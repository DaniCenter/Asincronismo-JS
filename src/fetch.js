import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

function fetchData(urlApi) {
  return fetch(urlApi);
}

function postData(urlApi, data) {
  const response = fetch(urlApi, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
}

// Get a product, product-Name and category
fetchData(`${API}/products`)
  .then((res) => res.json())
  .then((res) => {
    console.log(res[0]);
    return fetchData(`${API}/products/${res[0].id}`);
  })
  .then((res) => res.json())
  .then((res) => {
    console.log(res.title);
    return fetchData(`${API}/categories/${res.category.id}`);
  })
  .then((res) => res.json())
  .then((res) => console.log(res.name))
  .catch((err) => console.log(err))
  .finally(() => console.log("Termino la ejecucion"));

// Post a new product
const dataExample = {
  title: "Product Example",
  price: 10,
  description: "A product example for practice by Daniel",
  categoryId: 1,
  images: ["https://placeimg.com/640/480/any"],
};

postData(`${API}/products`, dataExample)
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
