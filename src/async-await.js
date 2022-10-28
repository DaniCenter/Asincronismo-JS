const fnAsync = () => {
  return new Promise(function (resolve, reject) {
    true
      ? setTimeout(() => {
          resolve("Success!");
        }, 2000)
      : setTimeout(() => {
          reject("Error");
        }, 2000);
  });
};

const anotherFuncion = async () => {
  const something = await fnAsync();
  console.log(something);
};

console.log("Before");
anotherFuncion();
console.log("After");

// Async-Await witch API calls
import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

async function fetchData(urlApi) {
  const response = await fetch(urlApi).then((res) => res.json());
  return response;
}

const otherFunction = async (urlApi) => {
  try {
    const products = await fetchData(`${urlApi}/products`);
    const product = await fetchData(`${urlApi}/products/${products[0].id}`);
    const category = await fetchData(`${urlApi}/categories/${product.category.id}`);
    console.log(product);
    console.log(category);
  } catch (error) {
    console.log(error.message);
  }
};
otherFunction(API);
