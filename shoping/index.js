const products = [
  {
    name: "Clothe1",
    id: 1,
    description: "Clothes, jacket, shirt, T-shirt",
    price: 220,
    imgSrc: "../public/a.png",
  },
  {
    name: "Clothe2",
    id: 2,
    description: "Clothes, jacket, shirt, T-shirt",
    price: 220,
    imgSrc: "../public/a.png",
  },
  {
    name: "Clothe3",
    id: 3,
    description: "Clothes, jacket, shirt, T-shirt",
    price: 220,
    imgSrc: "../public/a.png",
  },
  {
    name: "Clothe4",
    id: 4,
    description: "Clothes, jacket, shirt, T-shirt",
    price: 220,
    imgSrc: "../public/a.png",
  },
  {
    name: "Clothe5",
    id: 5,
    description: "Clothes, jacket, shirt, T-shirt",
    price: 220,
    imgSrc: "../public/a.png",
  },
  {
    name: "Clothe6",
    id: 6,
    description: "Clothes, jacket, shirt, T-shirt",
    price: 220,
    imgSrc: "../public/a.png",
  },
  {
    name: "Clothe7",
    id: 7,
    description: "Clothes, jacket, shirt, T-shirt",
    price: 220,
    imgSrc: "../public/a.png",
  },
];

const burnButton = document.querySelector(".burn-button");
const productsParent = document.querySelector("#products-parent");

const user = { name: "", cart: [] };

const compose =
  (f, g) =>
  (...args) =>
    f(g(...args));
const shop = (...fns) => {
  return fns.reduce(compose);
};

function buy(user, item) {
  if (!user.length && !item) {
    return;
  }
  const updated = user.cart.concat(item);
  const rr = Object.assign({}, user, { cart: updated, name: "emi" });
  console.log(rr, user);
  return rr;
}

products.map((res) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const span2 = document.createElement("div");
  const img = document.createElement("img");
  const button = document.createElement("button");
  const basketItem = document.getElementById("basket-item");
  button.textContent = "Add to basket";
  const description = document.createElement("p");
  description.textContent = res.description;
  span2.textContent = `${res.price}.00 kr`;
  span.textContent = res.name;
  img.src = res.imgSrc;
  li.insertAdjacentElement("afterbegin", button);
  li.insertAdjacentElement("afterbegin", span2);
  li.insertAdjacentElement("afterbegin", description);
  li.insertAdjacentElement("afterbegin", img);
  button.addEventListener("click", () => {
    const newInCart = shop(buy)(user, { name: "data", price: 4400 });
  });
  li.insertAdjacentElement("afterbegin", span);

  productsParent.insertAdjacentElement("afterbegin", li);
});
