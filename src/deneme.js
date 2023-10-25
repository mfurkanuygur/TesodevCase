const veri = {
    "cols": [
       "id",
       "nameSurname",
       "company",
       "email",
       "phone",
       "website",
       "country",
       "city"
    ],
    "data": [
       [
          1,
          "Gerhardt McGuirk",
          "Gutkowski, Cremin and Hansen",
          "gmcguirk0@tinyurl.com",
          "654-873-9156",
          "https://jiathis.com",
          "Philippines",
          "Camaligan"
       ]
    ]
 };
 
 const sütunlar = veri.cols;
 const veriSatırı = veri.data[0];
 
 // Sütunlar ve verileri eşleştirme
 const eşleştirilmişVeri = {};
 for (let i = 0; i < sütunlar.length; i++) {
    const sütunAdı = sütunlar[i];
    const veriDeğeri = veriSatırı[i];
    eşleştirilmişVeri[sütunAdı] = veriDeğeri;
 }
 
 console.log(eşleştirilmişVeri);
 