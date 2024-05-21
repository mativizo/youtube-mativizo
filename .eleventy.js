const youtubeNewest = [
    { id: "2gGisWTgzFM", title: "Kolejny odcinek | Seria Niefortunnych Przekleństw!", description: "Trzeci odcinek z gry Phasmophobia wraz z @Xarieq wpada na kanał! Łapiemy duchy, bez spiny." },
    { id: "O1pCGy6KXhc", title: "Phasmophobia, ale to PRL!", description: "Pierwszy film z serii \"Ale to PRL\". Dajcie znać, jak Wam się podoba taka koncepcja!"},
    { id: "ObM0glDMRFM", title: "Oglądamy 30+ najlepszych shortów! 😂", description: "Trzeci odcinek z gry Phasmophobia wraz z @Xarieq wpada na kanał! Łapiemy duchy, bez spiny." },
];

const youtubeSeries = [
    { 
        title: "Seria Niefortunnych Przekleństw | Phasmophobia",
        description: "Seria ta - we współpracy z @Xarieq - jest oparta na wulgarnym języku i luźnym podejściu do koncepcji szukania duchów. Dwuosobowa ekipa rizzuje zjawy jak trzeba. Dobre do obiadku, ale lepiej nie z rodziną.",
        videos: [
            { id: "P1UQtj8ACno", title: "🤬 JEST TU KTOŚ?! | Phasmophobia SNP #1 @Xarieq" },
        ],
        playlist: "https://www.youtube.com/playlist?list=PLsQYoYeIcdaxWgN109CeF1IPr4JlwS4_y"
    }
];




module.exports = function(eleventyConfig) {
    eleventyConfig.addCollection("youtubeNewest", function(collection) {
        return youtubeNewest;
    });
    eleventyConfig.addCollection("youtubeSeries", function(collection) {
        return youtubeSeries;
    });

    return {
      dir: {
        input: "_pages",
        output: "_site",
        layouts: "../_includes/layouts"
      }
    }
  };