const promise = new Promise(function (resolve, reject) {
  resolve("🤑");
});

const cows = 9;
const countCows = new Promise(function (resolve, reject) {
  if (cows > 10) {
    resolve("✔");
  } else {
    reject("❌");
  }
});

countCows
  .then((res) => console.log(res))
  .catch((res) => console.log(res))
  .finally(() => console.log("Finally"));
