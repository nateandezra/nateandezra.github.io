function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

var detailViewData = {
  anime_sticker_pack: {
    id: "anime_sticker_pack",
    name: '"Anime" Sticker Pack',
    description:
      "4 assorted stickers including our logo, Luffy, Goku, and Super-Saiyan Goku.",
    main_image: "Stickers.png",
    image1: "GokuOrange.PNG",
    image2: "OnePiece.png",
    image3: "Dragonball.png",
    price: "7.00",
  },
  //"eyescream_custom_hat": {
  // "id": "eyescream_custom_hat",
  //"name": "\"Eye Scream\" Custom Hat",
  //"description": "Handmade embroidered hat, made with the finest materials.",
  //"main_image": "EyeScream.png",
  // "image1": "EyeScream2.png",
  //"image2": "EyeScream3.png",
  //"image3": "EyeScream4.png",
  // "price": "20.00",
  //},
  pharell_art_print: {
    id: "pharell_art_print",
    name: '"Pharell NMD" Signed Art Print',
    description: "Hand signed art print on cardstock.",
    main_image: "IMG_1718.PNG",
    image1: "Pharell.JPG",
    image2: "Pharell2.png",
    image3: "Pharell3.JPG",
    price: "5.00",
  },
  vegeta_art_print_1: {
    id: "vegeta_art_print",
    name: '"Vegeta" Signed Art Print 4" X 6"',
    description: "Hand signed art print on cardstock.",
    main_image: "VegetaPoster.PNG",
    image1: "VegetaMarble.JPG",
    image2: "Vegeta1.JPG",
    image3: "Vegeta2.JPG",
    price: "8.00",
  },
  vegeta_art_print_2: {
    id: "vegeta_art_print",
    name: '"Vegeta" Signed Art Print 8" X 10"',
    description: "Hand signed art print on cardstock.",
    main_image: "VegetaPoster.PNG",
    image1: "VegetaMarble.JPG",
    image2: "Vegeta1.JPG",
    image3: "Vegeta2.JPG",
    price: "15.00",
  },
  vegeta_art_print_3: {
    id: "vegeta_art_print",
    name: '"Vegeta" Signed Art Print 18" X 24"',
    description: "Hand signed art print on cardstock.",
    main_image: "VegetaPoster.PNG",
    image1: "VegetaMarble.JPG",
    image2: "Vegeta1.JPG",
    image3: "Vegeta2.JPG",
    price: "25.00",
  },
  joker_art_print: {
    id: "joker_art_print",
    name: '"Joker" Signed Art Print',
    description: "Hand signed art print on cardstock.",
    main_image: "Joker1.png",
    image1: "Joker2.png",
    image2: "Joker3.png",
    image3: "Joker4.png",
    price: "5.00",
  },
  thriller_art_print: {
    id: "thriller_art_print",
    name: '"Thriller" Signed Art Print',
    description: "Hand signed art print on cardstock.",
    main_image: "Thriller.png",
    image1: "100PHOTO/SAM_0227.JPG",
    image2: "Thriller2.png",
    image3: "Thriller3.png",
    price: "5.00",
  },
  drake_art_print: {
    id: "drake_art_print",
    name: '"Drake" Signed Art Print',
    description: "Hand signed art print on cardstock.",
    main_image: "Drake.png",
    image1: "Drake1.png",
    image2: "Drake3.png",
    image3: "Drake3.JPG",
    price: "5.00",
  },
  lambo_art_print: {
    id: "lambo_art_print",
    name: '"Lambo" Signed Art Print',
    description: "Hand signed art print on cardstock.",
    main_image: "Lambo.png",
    image1: "Lambo1.PNG",
    image2: "Lambo2.PNG",
    image3: "Lambo3.PNG",
    price: "5.00",
  },
  goku_art_print: {
    id: "goku_art_print",
    name: '"Goku" Signed Art Print',
    description: "Hand signed art print on cardstock.",
    main_image: "Goku3.png",
    image1: "Goku.png",
    image2: "Goku2.JPG",
    image3: "Goku4.png",
    price: "5.00",
  },
  popculture_sticker_pack: {
    id: "popculture_sticker_pack",
    name: '"Pop Culture" Sticker Pack',
    description:
      "4 assorted stickers including our logo, Drake, Post Malone, and Lambo.",
    main_image: "PopCulture.PNG",
    image1: "DrakeSticker.PNG",
    image2: "LamboSticker.PNG",
    image3: "LogoSticker.PNG",
    price: "7.00",
  },
  sneaker_sticker_pack: {
    id: "sneaker_sticker_pack",
    name: '"Sneaker" Sticker Pack',
    description:
      "5 assorted stickers including our logo, Pharell NMD, Yeezy 700, Nike Airmag, and Jordan 1.",
    main_image: "Sneakers.PNG",
    image1: "PharellSticker.PNG",
    image2: "Jordan1.png",
    image3: "Yeezy.PNG",
    price: "10.00",
  },
  food_sticker_pack: {
    id: "food_sticker_pack",
    name: '"Food" Original Sticker Pack',
    description:
      "4 original concepts made into stickers including our logo, Pizza, Pineapple, and Mochi.",
    main_image: "Food.PNG",
    image1: "Pineapple.PNG",
    image2: "Pizza.PNG",
    image3: "Mochi.PNG",
    price: "7.00",
  },
  kids_sticker_pack: {
    id: "kids_sticker_pack",
    name: '"Kids" Sticker Pack',
    description:
      "3 assorted stickers including our logo, Paw Patrol, and Curious George.",
    main_image: "Kids.PNG",
    image1: "CuriousGeorge.PNG",
    image2: "LogoSticker.PNG",
    image3: "PawPatrol.PNG",
    price: "5.00",
  },
  football_sticker_pack: {
    id: "football_sticker_pack",
    name: '"Football" Sticker Pack',
    description: "3 assorted stickers including our logo, 49ers, and Seahawks.",
    main_image: "Football.PNG",
    image1: "49ers.PNG",
    image2: "LogoSticker.PNG",
    image3: "Seahawks.PNG",
    price: "5.00",
  },
};

function getRandomProducts(excludeKey) {
  let keys = Object.keys(detailViewData);
  console.log("keys", keys);
  let index = keys.indexOf(excludeKey);

  if (index > -1) {
    keys.splice(index, 1);
  }
  return shuffle(keys);
}
