import assert from "node:assert/strict";
import { readFileSync, existsSync, readdirSync } from "node:fs";
import ts from "typescript";

const read = (path) => readFileSync(path, "utf8");
const dictionaries = Object.fromEntries(["de", "en"].map((locale) => [locale, JSON.parse(read(`src/content/translations/${locale}.json`))]));
assert.deepEqual(Object.keys(dictionaries.de).sort(), Object.keys(dictionaries.en).sort(), "Translation keys must match");
for (const file of readdirSync("src/components").filter((file) => file.endsWith(".tsx"))) {
  const ast = ts.createSourceFile(file, read(`src/components/${file}`), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  function visit(node) {
    if (ts.isCallExpression(node) && node.expression.getText(ast) === "t" && node.arguments[0] && ts.isStringLiteral(node.arguments[0])) {
      for (const [locale, dictionary] of Object.entries(dictionaries)) assert.ok(dictionary[node.arguments[0].text], `${file}: missing ${locale} translation for ${node.arguments[0].text}`);
    }
    ts.forEachChild(node, visit);
  }
  visit(ast);
}
const decode = (value) => value.replaceAll("&amp;", "&").replaceAll("&#x27;", "'").replaceAll("&quot;", '"');
const matches = (html, regex) => [...html.matchAll(regex)].map((match) => decode(match[1]));
const pages = Object.fromEntries(["tr", "de", "en"].map((locale) => [locale, read(`out/${locale === "tr" ? "" : `${locale}/`}index.html`).replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "")]));
const originalIds = matches(pages.tr, /\bid="([^"]+)"/g);
const originalImages = matches(pages.tr, /<img\b[^>]*\bsrc="([^"]+)"/g);
const externalLinks = (html) => matches(html, /<a\b[^>]*\bhref="((?:https?:|mailto:)[^"]+)"/g);
for (const [locale, html] of Object.entries(pages)) {
  const path = locale === "tr" ? "/" : `/${locale}/`;
  assert.ok(html.includes(`<html lang="${locale}">`), `${locale}: document language`);
  assert.ok(html.includes(`rel="canonical" href="https://berlinoyunstudyosu.com${path}"`), `${locale}: canonical`);
  for (const language of ["tr", "de", "en"]) {
    const target = language === "tr" ? "/" : `/${language}/`;
    assert.ok(html.includes(`hrefLang="${language}" href="https://berlinoyunstudyosu.com${target}"`), `${locale}: alternate ${language}`);
    assert.ok(html.includes(`href="${target}" lang="${language}"`), `${locale}: switch to ${language}`);
  }
  assert.deepEqual(matches(html, /\bid="([^"]+)"/g), originalIds, `${locale}: section structure changed`);
  assert.deepEqual(matches(html, /<img\b[^>]*\bsrc="([^"]+)"/g), originalImages, `${locale}: photo order changed`);
  assert.deepEqual(externalLinks(html), externalLinks(pages.tr), `${locale}: contact or ticket links changed`);
  for (const anchor of matches(html, /<a\b[^>]*\bhref="#([^"]+)"/g)) assert.ok(originalIds.includes(anchor), `${locale}: broken anchor ${anchor}`);
  for (const image of originalImages) assert.ok(existsSync(`out${image}`), `${locale}: missing image ${image}`);
  if (locale !== "tr") {
    const text = matches(html, />([^<>]+)</g).map((value) => value.trim());
    for (const value of text) assert.ok(!dictionaries[locale][value] || dictionaries[locale][value] === value, `${locale}: untranslated text ${value}`);
    assert.ok(html.includes(dictionaries[locale]["Berlin'de Türkçe Doğaçlama Komedi"]), `${locale}: show language context lost`);
  }
}
const sitemap = read("out/sitemap.xml");
for (const path of ["/", "/de/", "/en/"]) assert.ok(sitemap.includes(`<loc>https://berlinoyunstudyosu.com${path}</loc>`));
console.log("TR/DE/EN: translation coverage, static routes, language metadata, navigation, section order, images and external links passed.");
