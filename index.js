const btnNumber = document.querySelector(".addNumber");
const btnString = document.querySelector(".addString");
const leftPart = document.querySelector(".leftPart");
const rightPart = document.querySelector(".rightPart");
const textInput = document.querySelector(".textInput");
const numberInput = document.querySelector(".numberInput");
const sortNumbers = document.querySelector(".sortNumbers");
const sortStrings = document.querySelector(".sortStrings");
btnNumber.addEventListener("click", () => {
  if (!numberInput.value.trim().length) {
    alert("НИЗЯ");
    return;
  }
  const div = document.createElement("div");
  div.classList.add("cellWithNumber");
  div.innerHTML = `${numberInput.value}`;
  leftPart.appendChild(div);
});
btnString.addEventListener("click", () => {
  if (
    !textInput.value.trim().length ||
    !Number.isNaN(Number(textInput.value))
  ) {
    alert("НИЗЯ");
    return;
  }
  const div = document.createElement("div");
  div.classList.add("cellWithString");
  div.innerHTML = `${textInput.value}`;
  rightPart.appendChild(div);
});
sortNumbers.addEventListener("click", () => {
  const arrFromCollection = Array.from(leftPart.children);
  arrFromCollection.sort((a, b) => {
    return Number(a.innerHTML) - Number(b.innerHTML);
  });
  const fragment = new DocumentFragment();
  arrFromCollection.forEach((element) => {
    fragment.appendChild(element);
  });
  leftPart.appendChild(fragment);
});
sortStrings.addEventListener("click", () => {
  const arrFromCollection = Array.from(rightPart.children);
  arrFromCollection.sort((a, b) => {
    return a.innerHTML > b.innerHTML ? 1 : -1;
  });
  const fragment = new DocumentFragment();
  arrFromCollection.forEach((element) => {
    fragment.appendChild(element);
  });
  rightPart.appendChild(fragment);
});
