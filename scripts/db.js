let basket = [];

let menu = {
    hauptgerichte: [
      {
        name: "Spaghetti Carbonara",
        preis: 10.99,
        amount: 0,
        beschreibung: "Klassische Pasta mit cremiger Sauce, Speck und Parmesan"
      },
      {
        name: "Veganes Curry",
        preis: 9.49,
        amount: 0,
        beschreibung: "Mildes Kichererbsen-Curry mit Basmatireis und Kokosmilch"
      },
      {
        name: "Grillteller",
        preis: 14.99,
        amount: 0,
        beschreibung: "Gemischtes Fleisch vom Grill mit Kräuterbutter und Pommes"
      },
      {
        name: "Lachsfilet",
        preis: 13.50,
        amount: 0,
        beschreibung: "Gegrillter Lachs mit Zitronensauce und Gemüse"
      },
      {
        name: "Ofenkartoffel Deluxe",
        preis: 8.75,
        amount: 0,
        beschreibung: "Riesige Ofenkartoffel mit Sour Cream, Röstzwiebeln und Salat"
      }
    ],
    beilagen: [
      {
        name: "Pommes Frites",
        preis: 2.99,
        amount: 0,
        beschreibung: "Knusprig frittierte Kartoffelstäbchen mit Ketchup oder Mayo"
      },
      {
        name: "Beilagensalat",
        preis: 3.50,
        amount: 0,
        beschreibung: "Frischer grüner Salat mit Hausdressing"
      },
      {
        name: "Knoblauchbrot",
        preis: 2.50,
        amount: 0,
        beschreibung: "Ofenfrisches Brot mit Knoblauchbutter"
      },
      {
        name: "Reis",
        preis: 2.20,
        amount: 0,
        beschreibung: "Naturreis als Beilage zu vielen Gerichten"
      },
      {
        name: "Grillgemüse",
        preis: 3.80,
        amount: 0,
        beschreibung: "Zucchini, Paprika und Aubergine vom Grill"
      }
    ],
    desserts: [
      {
        name: "Tiramisu",
        preis: 4.90,
        amount: 0,
        beschreibung: "Italienisches Dessert mit Mascarpone, Espresso und Kakao"
      },
      {
        name: "Schokolava Cake",
        preis: 5.20,
        amount: 0,
        beschreibung: "Warmer Schokokuchen mit flüssigem Kern"
      },
      {
        name: "Panna Cotta",
        preis: 4.50,
        amount: 0,
        beschreibung: "Sahne-Dessert mit Beerenspiegel"
      },
      {
        name: "Apfelstrudel",
        preis: 4.80,
        amount: 0,
        beschreibung: "Mit Rosinen und Zimt, serviert mit Vanillesoße"
      },
      {
        name: "Eisbecher Trio",
        preis: 5.00,
        amount: 0,
        beschreibung: "Drei Kugeln Eis nach Wahl mit Sahne"
      }
    ],
    getränke: [
      {
        name: "Cola",
        preis: 2.50,
        amount: 0,
        beschreibung: "Erfrischendes koffeinhaltiges Softgetränk, 0.33l"
      },
      {
        name: "Hausgemachte Limonade",
        preis: 3.20,
        amount: 0,
        beschreibung: "Fruchtige Zitronenlimonade mit frischer Minze, 0.5l"
      },
      {
        name: "Eistee Pfirsich",
        preis: 2.80,
        amount: 0,
        beschreibung: "Gekühlter schwarzer Tee mit Pfirsichgeschmack, 0.5l"
      },
      {
        name: "Stilles Mineralwasser",
        preis: 1.80,
        amount: 0,
        beschreibung: "Natürliches Mineralwasser ohne Kohlensäure, 0.5l"
      },
      {
        name: "Kaffee",
        preis: 2.20,
        amount: 0,
        beschreibung: "Frisch gebrühter schwarzer Kaffee, wahlweise mit Milch"
      }
    ]
  };