/**
 * @file data.js contains the data required for the web app like Images that needs to be
 * displayed on the home screen, amazon urls if the user is visiting foreign site ask to 
 * visit his/her country site for fast shipping and products information.   
 */

export const Images = {
  newyear: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2021/NYNY/Fuji_TallHero_NYNY_en_US_2x._CB412256578_.jpg",
  computers: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_2x._CB432469748_.jpg",
  toys: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_2x._CB431858162_.jpg",
  homeessentials: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_2x._CB429090087_.jpg",
  beauty: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_2x._CB429089928_.jpg",
  amazonmusic: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/Events/Holiday/Gateway/US-EN_100220_3monthsfree_ACQ_GW_Hero_D_3000x1200_CV59._CB403490035_.jpg"
};

export const amazon_urls = {
  "Australia": "https://www.amazon.com.au",
  "Brazil": "https://www.amazon.com.br",
  "Canada": "https://www.amazon.ca",
  "China": "https://www.amazon.cn",
  "France": "https://www.amazon.fr",
  "Germany": "https://www.amazon.de",
  "India": "https://www.amazon.in",
  "Italy": "https://www.amazon.it",
  "Japan": "https://www.amazon.co.jp",
  "Mexico": "https://www.amazon.com.mx",
  "Netherlands": "https://www.amazon.nl",
  "Saudi Arabia": "https://www.amazon.sa",
  "Singapore": "https://www.amazon.sg",
  "Spain": "https://www.amazon.es",
  "Sweden": "https://www.amazon.se",
  "Turkey": "https://www.amazon.com.tr",
  "United Arab Emirates": "https://www.amazon.ae",
  "United Kingdom": "https://www.amazon.co.uk",
  "United States": "https://www.amazon.com"
};

function Seed() {
  /**
   * @function Seed() assigns products their ids, title, price, rating and image.
   * 
   * @returns products list. 
   */

  function getUUID() {
    /**
     * @function getUUID() it generates a uuid (universal unique identification number)
     * that we will assign to our products 
     */
    return "xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx".replace(/[xN]/g, function (c) {
      /**
       * @method replace() searches a string for a specified value, or a regular expression, 
       * and returns a new string where the specified values are replaced.
       * 
       * @argument /[xN]/g is a regex expression that needs to be replaced from the string.
       * 
       * @argument function (c) is a callback function that actually generates a uuid 
       * (universal unique identification number)
       * 
       * Here the string is the uuid (universal unique identification number) format 
       */
      var r = Math.random() * 16 | 0;
      var v = c === "x" ? r : ((r & 0x3) | 0x8);

      return v.toString(16);
    });
  }

  const products = {
    "Computers": [
      {
        id: getUUID(),
        title: "HP 2XN62AA 27-inch Full HD 1920 x 1080 IPS Backlit LED Micro-Edge VGA HDMI Display",
        price: "300.49",
        image: "https://m.media-amazon.com/images/I/71V2rgkb2rL._AC_UY327_FMwebp_QL65_.jpg",
        rating: 5
      },
      {
        id: getUUID(),
        title: "Sceptre Curved 27 LED Monitor HDMI VGA Build-In Speakers, EDGE-LESS Metal Black 2019 (C275W-1920RN)",
        price: "350.99",
        image: "https://m.media-amazon.com/images/I/914W+OtJQ-L._AC_UY327_FMwebp_QL65_.jpg",
        rating: 4
      },
      {
        id: getUUID(),
        title: "Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics...",
        price: "330.99",
        image: "https://images-na.ssl-images-amazon.com/images/I/41vMYgD92xL.jpg",
        rating: 5
      },
      {
        id: getUUID(),
        title: "ASUS VivoBook 15 Thin and Light Laptop- 15.6” Full HD, Intel i5-1035G1 CPU, 8GB RAM, 512GB SSD...",
        price: "378.99",
        image: "https://m.media-amazon.com/images/I/81fstJkUlaL._AC_UY327_FMwebp_QL65_.jpg",
        rating: 5
      },
      {
        id: getUUID(),
        title: "Latest_Lenovo ThinkPad X1 Carbon 8th Gen 14” FHD Laptop, Intel i7-10510U,16GB RAM,1TB SSD, HDMI...",
        price: "389.99",
        image: "https://m.media-amazon.com/images/I/61A0i5RiPnL._AC_UY327_FMwebp_QL65_.jpg",
        rating: 5
      },
      {
        id: getUUID(),
        title: "HP 22 inch(54.61 cm) Ultra-Slim Anti Glare Full HD LED Monitor - 3 Side Micro Bezel, IPS Panel with VGA, HDMI Ports - HP 22m Display - 3WL45AA (Black)",
        price: "199.99",
        image: "https://m.media-amazon.com/images/I/71TrDy1ItOL._AC_UY327_FMwebp_QL65_.jpg",
        rating: 5
      },
    ],
    "Fashion": [
      {
        id: getUUID(),
        name: "Lee Men's Regular Fit Straigth Leg Jean",
        brand: "Nike",
        price: "26",
        image: "https://m.media-amazon.com/images/I/91qGNjc-iPL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 5
      },
      {
        id: getUUID(),
        name: "Lee Men's Regular Fit Straigth Leg Jean",
        brand: "Nike",
        price: "26",
        image: "https://m.media-amazon.com/images/I/81QqPqUNpXL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 5
      },
      {
        id: getUUID(),
        name: "Lee Men's Regular Fit Straigth Leg Jean",
        brand: "Nike",
        price: "26",
        image: "https://m.media-amazon.com/images/I/81kgTgSSTIL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 5
      },
      {
        id: getUUID(),
        name: "Lee Men's Regular Fit Straigth Leg Jean",
        brand: "Nike",
        price: "26",
        image: "https://m.media-amazon.com/images/I/61NlrvixWeL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 5
      },
      {
        id: getUUID(),
        name: "Lee Men's Regular Fit Straigth Leg Jean",
        brand: "Nike",
        price: "26",
        image: "https://m.media-amazon.com/images/I/91QdWiGdA9L._AC_UL480_FMwebp_QL65_.jpg",
        rating: 5
      },
      {
        id: getUUID(),
        name: "Lee Men's Regular Fit Straigth Leg Jean",
        brand: "Nike",
        price: "26",
        image: "https://m.media-amazon.com/images/I/81HIcavdH6L._AC_UL480_FMwebp_QL65_.jpg",
        rating: 5
      },
    ],
    "Toys": [
      {
        id: getUUID(),
        title: "",
        price: "",
        image: "",
        rating: 4
      },
    ]
  };

  return products;
}

export const products = Seed();