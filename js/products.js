const mens_lot = [
  {
    image: "images/Shirt1.jpg",
    name: "Comfy Men Vest",
    price: [374, 27],
    discount: "₹100 discount on 1st order",
    delivery_charges: "Delivery ₹70",
    rating: "3.5",
  },
  {
    image: "images/Shirt2.jpg",
    name: "Comfy Designer Men Shirts",
    price: [399, 25],
    discount: "₹100 discount on 1st order",
    delivery_charges: "Free Delivery",
    rating: "3.0",
  },
  {
    image: "images/Shirt3.jpg",
    name: "Trendy Fashionable Men Shirts",
    price: [477, 21],
    discount: "₹100 discount on 1st order",
    delivery_charges: "Free Delivery",
    rating: "4.5",
  },
  {
    image: "images/Shirt4.jpg",
    name: "Cartoon Graffiti Printed Turn Down Collar Shirts",
    price: [369, 27],
    discount: "₹100 discount on 1st order",
    delivery_charges: "Free Delivery",
    rating: "2.5",
  },
  {
    image: "images/Shirt5.jpg",
    name: "Fancy Glamorous Men Tshirts",
    price: [241, 30],
    discount: "₹72 discount on 1st order",
    delivery_charges: "Free Delivery",
    rating: "3.6",
  },
  {
    image: "images/Shirt6.jpg",
    name: "Fancy Fashionista Men Shirts",
    price: [405, 25],
    discount: "₹100 discount on 1st order",
    delivery_charges: "Free Delivery",
    rating: "3.5",
  },
  {
    image: "images/Shirt7.jpg",
    name: "Classic Fashionista Men Shirts",
    price: [373, 27],
    discount: "₹100 discount on 1st order",
    delivery_charges: "Free Delivery",
    rating: "4.0",
  },
  {
    image: "images/Shirt8.jpg",
    name: "TaBudi Men's Cotton Full Sleeves Shirt",
    price: [540, 19],
    discount: "₹100 discount on 1st order",
    delivery_charges: "Free Delivery",
    rating: "5.0",
  },
  {
    image: "images/Shirt9.jpg",
    name: "Men Shirt",
    price: [475, 21],
    discount: "₹100 discount on 1st order",
    delivery_charges: "Free Delivery",
    rating: "",
  },
  {
    image: "images/Shirt10.jpg",
    name: "Stylish Fashionable Men Shirts",
    price: [526, 19],
    discount: "₹100 discount on 1st order",
    delivery_charges: "Free Delivery",
    rating: "4.3",
  },
  {
    image: "images/Shirt11.jpg",
    name: "Men's Regular Fit T-Shirt 100% Cotton (Size-L)",
    price: [473, 21],
    discount: "₹100 discount on 1st order",
    delivery_charges: "Free Delivery",
    rating: "4.3",
  },
  {
    image: "images/Shirt12.jpg",
    name: "Stylish Designer Men Shirts",
    price: [363, 28],
    discount: "₹100 discount on 1st order",
    delivery_charges: "Free Delivery",
    rating: "4.0",
  },
];
const products_JSON = JSON.stringify(mens_lot);
localStorage.setItem("product_lot", products_JSON);
let mens_lot = localStorage.getItem("product_lot");
mens_lot = JSON.parse(mens_lot);
function showProduct() {
  var prod_div = document.getElementById("");
}
