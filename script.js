const PageBuilder = document.getElementById("PageBuilder");

//color of the background
const colorBackgroundRed = document.getElementById("redInput");
const colorBackgroundGreen = document.getElementById("greenInput");
const colorBackgroundBlue = document.getElementById("blueInput");

//type of the elemets and details
const typeOfTheElements = document.getElementById("typeOfTheElements");
const countOfTheElementsLeft = document.getElementById(
  "countOfTheElementsLeft"
);
const countOfTheElementsRight = document.getElementById(
  "countOfTheElementsRight"
);
const countOfTheElementsTop = document.getElementById("countOfTheElementsTop");
const countOfTheElementsBottom = document.getElementById(
  "countOfTheElementsBottom"
);

const widthfTheElements = document.getElementById("widthfTheElements");
const heightofTheElements = document.getElementById("heightofTheElements");

const divLeft = document.getElementById("left");
const divRight = document.getElementById("right");
const divTop = document.getElementById("top");
const divBottom = document.getElementById("bottom");
//buttons
const btnAdd = document.getElementById("btnAdd");
const colorBtn = document.getElementById("color");
const animation1 = document.getElementById("animation1");
const animation2 = document.getElementById("animation2");
const animation3 = document.getElementById("animation3");

colorBtn.addEventListener("click", function () {
  colorBackgroundRed.addEventListener("input", dynamicOlor());
  colorBackgroundGreen.addEventListener("input", dynamicOlor());
  colorBackgroundBlue.addEventListener("input", dynamicOlor());

  function dynamicOlor() {
    PageBuilder.style.backgroundColor = `rgb(${colorBackgroundRed.value}, ${colorBackgroundGreen.value}, ${colorBackgroundBlue.value})`;
  }
});

btnAdd.addEventListener("click", function () {
  for (i = 0; i < countOfTheElementsLeft.value; i++) {
    const elements = document.createElement(`${typeOfTheElements.value}`);
    elements.id = `boxLeft-${i}`;
    elements.classList.add("boxLeft");
    elements.style.width = `${widthfTheElements.value}px`;
    elements.style.height = `${heightofTheElements.value}px`;
    elements.style.backgroundColor = "red";
    elements.style.borderRadius = "50%";
    divLeft.appendChild(elements);
  }

  for (k = 0; k < countOfTheElementsRight.value; k++) {
    const elements = document.createElement(`${typeOfTheElements.value}`);
    elements.id = `boxRight-${k}`;
    elements.classList.add("boxRight");
    elements.style.width = `${widthfTheElements.value}px`;
    elements.style.height = `${heightofTheElements.value}px`;
    elements.style.backgroundColor = "black";
    elements.style.borderRadius = "50%";
    divRight.appendChild(elements);
  }

  for (z = 0; z < countOfTheElementsTop.value; z++) {
    const elements = document.createElement(`${typeOfTheElements.value}`);
    elements.id = `boxTop-${z}`;
    elements.classList.add("boxTop");
    elements.style.width = `${widthfTheElements.value}px`;
    elements.style.height = `${heightofTheElements.value}px`;
    elements.style.backgroundColor = "blue";
    elements.style.borderRadius = "50%";
    divTop.appendChild(elements);
  }

  for (s = 0; s < countOfTheElementsBottom.value; s++) {
    const elements = document.createElement(`${typeOfTheElements.value}`);
    elements.id = `boxBottom-${s}`;
    elements.classList.add("boxBottom");
    elements.style.width = `${widthfTheElements.value}px`;
    elements.style.height = `${heightofTheElements.value}px`;
    elements.style.backgroundColor = "yellow";
    elements.style.borderRadius = "50%";
    divBottom.appendChild(elements);
  }

  btnAdd.disabled = true;
});

btnRST.addEventListener("click", function () {
  PageBuilder.removeChild(PageBuilder.firstChild);
  PageBuilder.removeChild(PageBuilder.lastChild);
  typeOfTheElements.value = "";
  countOfTheElementsLeft.value = "";
  countOfTheElementsRight.value = "";
  countOfTheElementsTop.value = "";
  countOfTheElementsBottom.value = "";
  widthfTheElements.value = "";
  heightofTheElements.value = "";
  btnAdd.disabled = false;
});
animation1.addEventListener("click", function () {
  function ChacneColorAll() {
    const divLeftBox = document.querySelectorAll(".boxLeft");
    const divRightBox = document.querySelectorAll(".boxRight");
    const divTopBox = document.querySelectorAll(".boxTop");
    const divBottomBox = document.querySelectorAll(".boxBottom");
    const newDivMid = document.createElement("div");

    newDivMid.classList.add("bigDiv");
    newDivMid.style.width = "200px";
    newDivMid.style.height = "200px";
    newDivMid.style.backgroundColor = "blue";
    newDivMid.innerHTML = `<div><p>we did it</p></div>`;
    PageBuilder.appendChild(newDivMid);
    let counterLeft = 0;
    let counterRight = 0;
    let counterTop = 0;
    let counterBottom = 0;

    function changeColor() {
      if (counterLeft < divLeftBox.length) {
        divLeftBox[counterLeft].classList.add("color-yellow");

        divLeftBox.forEach((value) => {
          value.style.transform = `scale(${Math.random() * 2})`;
        });
        divLeftBox.forEach((value) => {
          value.style.borderRadius = `${Math.random() * 100}%`;
        });
        counterLeft++;
        setTimeout(changeColor, 500);
      } else if (counterBottom < divBottomBox.length) {
        divBottomBox[counterBottom].classList.add("color-green");
        divBottomBox.forEach((value) => {
          value.style.transform = `scale(${Math.random() * 2 + 1})`;
        });
        divBottomBox.forEach((value) => {
          value.style.borderRadius = `${Math.random() * 100}%`;
        });
        counterBottom++;
        setTimeout(changeColor, 500);
      } else if (counterRight < divRightBox.length) {
        divRightBox[counterRight].classList.add("color-red");
        divRightBox.forEach((value) => {
          value.style.transform = `scale(${Math.random() * 2})`;
        });
        divRightBox.forEach((value) => {
          value.style.borderRadius = `${Math.random() * 100}%`;
        });
        counterRight++;
        setTimeout(changeColor, 500);
      } else if (counterTop < divTopBox.length) {
        divTopBox[counterTop].classList.add("color-pink");
        divTopBox.forEach((value) => {
          value.style.transform = `scale(${Math.random() * 2})`;
        });
        divTopBox.forEach((value) => {
          value.style.borderRadius = `${Math.random() * 100}%`;
        });
        counterTop++;
        setTimeout(changeColor, 500);
      }
    }
    changeColor();
  }
  ChacneColorAll();
});

animation2.addEventListener("click", function () {
  function changeShapeMain() {
    const divLeftBox = document.querySelectorAll(".boxLeft");
    const divRightBox = document.querySelectorAll(".boxRight");
    const divTopBox = document.querySelectorAll(".boxTop");
    const divBottomBox = document.querySelectorAll(".boxBottom");
    const newDivMid = document.createElement("div");

    newDivMid.classList.add("bigDiv");
    newDivMid.style.width = "200px";
    newDivMid.style.height = "200px";
    newDivMid.style.backgroundColor = "blue";
    newDivMid.innerHTML = `<div><p>we did it</p></div>`;
    PageBuilder.appendChild(newDivMid);
    let counterLeft = 0;
    let counterRight = 0;
    let counterTop = 0;
    let counterBottom = 0;

    function changeShapeDiv() {
      if (counterLeft < divLeftBox.length) {
        divLeftBox[counterLeft].classList.add("border-radius");
        divLeftBox.forEach((value) => {
          value.style.transform = `scale(${Math.random() * 2})`;
        });
        divLeftBox.forEach((value) => {
          value.style.borderRadius = `${Math.random() * 100}%`;
        });
        counterLeft++;
        setTimeout(changeShapeDiv, 500);
      } else if (counterBottom < divBottomBox.length) {
        divBottomBox[counterBottom].classList.add("border-radius-1");
        divBottomBox.forEach((value) => {
          value.style.transform = `scale(${Math.random() * 2})`;
        });
        divBottomBox.forEach((value) => {
          value.style.borderRadius = `${Math.random() * 100}%`;
        });
        counterBottom++;
        setTimeout(changeShapeDiv, 500);
      } else if (counterRight < divRightBox.length) {
        divRightBox[counterRight].classList.add("border-radius");
        divRightBox.forEach((value) => {
          value.style.transform = `scale(${Math.random() * 2})`;
        });
        divRightBox.forEach((value) => {
          value.style.borderRadius = `${Math.random() * 100}%`;
        });
        counterRight++;
        setTimeout(changeShapeDiv, 500);
      } else if (counterTop < divTopBox.length) {
        divTopBox[counterTop].classList.add("border-radius-1");
        divTopBox.forEach((value) => {
          value.style.transform = `scale(${Math.random() * 2})`;
        });
        divTopBox.forEach((value) => {
          value.style.borderRadius = `${Math.random() * 100}%`;
        });
        counterTop++;
        setTimeout(changeShapeDiv, 500);
      }
    }
    changeShapeDiv();
  }
  changeShapeMain();
});

animation3.addEventListener("click", function () {
  function flashMainDiv() {
    const divLeftBox = document.querySelectorAll(".boxLeft");
    const divRightBox = document.querySelectorAll(".boxRight");
    const divTopBox = document.querySelectorAll(".boxTop");
    const divBottomBox = document.querySelectorAll(".boxBottom");
    const newDivMid = document.createElement("div");
    newDivMid.classList.add("bigDiv");
    newDivMid.style.width = "200px";
    newDivMid.style.height = "200px";
    newDivMid.style.backgroundColor = "blue";
    newDivMid.innerHTML = `<div><p>we did it</p></div>`;
    PageBuilder.appendChild(newDivMid);
    function flashMain() {
      for (i = 0; i < divLeftBox.length; i++) {
        divLeftBox[i].classList.add("flash-radius");
      }

      for (i = 0; i < divBottomBox.length; i++) {
        divBottomBox[i].classList.add("flash-radius");
      }
      for (i = 0; i < divRightBox.length; i++) {
        divRightBox[i].classList.add("flash-radius");
      }
      for (i = 0; i < divTopBox.length; i++) {
        divTopBox[i].classList.add("flash-radius");
      }
    }
    flashMain();
  }
  flashMainDiv();
  animation1.removeEventListener("click");
});
