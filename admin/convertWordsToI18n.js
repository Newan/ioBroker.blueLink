const fs = require('fs');
const path = require('path');

// 1. Importiere die words.js Datei
const { words } = require('./words.js');

// 2. Definiere die Zielsprachen und Dateien
const languages = ['en', 'de']; // Sprachen, die du unterst�tzen m�chtest
const translations = {
  en: {},
  de: {}
};

// 3. Automatisch �bersetzungen f�r die Sprachen anlegen (hier nur als Beispiel)
Object.keys(words).forEach(key => {
  translations.en[key] = words[key]; // Englisch bleibt gleich
  translations.de[key] = words[key]; // In einer echten App w�rdest du hier echte �bersetzungen hinzuf�gen
});

// 4. Erstelle das Verzeichnis f�r die Lokalisierungen
const localesDir = path.join(__dirname, 'locales');
if (!fs.existsSync(localesDir)) {
  fs.mkdirSync(localesDir);
}

// 5. Schreibe die JSON-Dateien f�r jede Sprache
languages.forEach(lang => {
  const filePath = path.join(localesDir, `${lang}.json`);
  fs.writeFileSync(filePath, JSON.stringify(translations[lang], null, 2), 'utf8');
  console.log(`�bersetzungen f�r ${lang} gespeichert in ${filePath}`);
});

console.log("Konvertierung abgeschlossen.");

