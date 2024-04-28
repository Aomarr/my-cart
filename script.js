const products = [
  {
    id: "123456789",
    title: "Red T-Shirt",
    image: "./images/red.png",
    priceBeforeSale: 150,
    priceAfterSale: 120,
    amount: 1,
  },
  {
    id: "456789123",
    title: "Black T-Shirt",
    image: "./images/black.png",
    priceBeforeSale: 180,
    priceAfterSale: 130,
    amount: 1,
  },
  {
    id: "789123456",
    title: "Blue T-Shirt",
    image: "./images/blue.png",
    priceBeforeSale: 200,
    priceAfterSale: 160,
    amount: 1,
  },
];
const myCart = document.querySelector(".content");
products.forEach((element) => {
  myCart.innerHTML += `
    <div class="item">
          <div class="image">
            <img src="${element.image}" alt="red shirt" />
          </div>
          <div class="info">
            <h2>${element.title}</h2>
            <div class="prices">
              <span class="current-price">${element.priceBeforeSale}$</span>
              <span class="old-price">${element.priceAfterSale}$</span>
            </div>
          </div>
          <div class="actions">
            <div class="delete">
            <i class="fa-regular fa-circle-xmark"></i>
            </div>
            <div class="amount">
              <button class="decrease">-</button>
              <span class="number">${element.amount}</span>
              <button class="increase">+</button>
            </div>
          </div>
        </div>
    `;
});
function removeItem() {
  erase = document.querySelectorAll(".delete");
  erase.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.target.closest(".item").remove();
    });
  });
}

removeItem();

function less() {
  decrease = document.querySelectorAll(".decrease");
  number = document.querySelectorAll(".number");
  for (let i = 0; i < decrease.length; i++) {
    decrease[i].addEventListener("click", () => {
      if (products[i].amount > 0) {
        products[i].amount--;
        number[i].textContent = products[i].amount;
      }
    });
  }
}

less();

function more() {
  decrease = document.querySelectorAll(".increase");
  number = document.querySelectorAll(".number");
  for (let i = 0; i < decrease.length; i++) {
    decrease[i].addEventListener("click", () => {
      products[i].amount++;
      number[i].textContent = products[i].amount;
    });
  }
}

more();
