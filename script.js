const default_color = "";
const default_mode = "black";
const default_size = "16";

let currentMode = default_mode,
  currentSize = default_size,
  currentColor = default_color;

let fragment = document.createDocumentFragment(),
  contenedor = document.querySelector("#contenedor"),
  clean = document.querySelector("#clean"),
  rango = document.querySelector("#rango"),
  container = document.querySelector("#container"),
  counter = document.querySelector("#counter");

let btnblack = document.querySelector("#black"),
  btnrainbow = document.querySelector("#rainbow"),
  btnGrayScale = document.querySelector("#grayScale"),
  colorBox = document.querySelector("#colorBox");

let setCurrentMode = (newMode) => {
  btnActive(newMode);
  currentMode = newMode;
};

let btnActive = (newMode) => {
  if (currentMode == "black") {
    btnblack.classList.remove("active");
    colorBox.classList.remove("black");
  } else if (currentMode == "grayScale") {
    btnGrayScale.classList.remove("active");
    colorBox.classList.remove("grayScale");
  } else if (currentMode == "rainbow") {
    btnrainbow.classList.remove("active");
    colorBox.classList.remove("rainbow");
  }

  if (newMode == "black") {
    btnblack.classList.add("active");
    colorBox.classList.add("black");
  } else if (newMode == "grayScale") {
    btnGrayScale.classList.add("active");
    colorBox.classList.add("grayScale");
  } else if (newMode == "rainbow") {
    btnrainbow.classList.add("active");
    colorBox.classList.add("rainbow");
  }
};

let color = () => {
  if (currentColor == "") {
    currentColor = "red";
  } else if (currentColor == "red") {
    currentColor = "orange";
  } else if (currentColor == "orange") {
    currentColor = "yellow";
  } else if (currentColor == "yellow") {
    currentColor = "green";
  } else if (currentColor == "green") {
    currentColor = "blue";
  } else if (currentColor == "blue") {
    currentColor = "violet";
  } else if (currentColor == "violet") {
    currentColor = "red";
  }

  return currentColor;
};

let elementCreater = (number = 16) => {


  container.style.gridTemplateColumns = `repeat(${number},1fr)`;
  container.style.gridTemplateRows = `repeat(${number},1fr)`;

  for (let i = 0; i < number * number; i++) {
    let element = document.createElement("DIV");

    element.classList.add(`elemento${i}`, "cuadrito");
    fragment.appendChild(element);
  }

  container.appendChild(fragment);
};




let updateCounter = (value)=>{ 
  currentSize = value
  counter.innerHTML = `${currentSize} X ${currentSize}`  }

let clearGrid = ( ) => container.innerHTML = ""


let reloadContainer = () => {
  clearGrid()
  elementCreater(currentSize);
};

let updateContainer = ()=>{
  updateCounter()
  reloadContainer()
}



btnblack.addEventListener ("click", () => setCurrentMode("black"))

btnGrayScale.addEventListener("click", () => setCurrentMode("grayScale"));

btnrainbow.addEventListener("click", () => setCurrentMode("rainbow"));

rango.addEventListener("mousemove", (e) => updateCounter(e.target.value));

rango.addEventListener("change", (e) => {
  updateCounter(e.target.value)
  reloadContainer()

});


clean.addEventListener("click", () => reloadContainer());


container.addEventListener("mouseover", (e) => {
  if (currentMode == "black") {
    e.target.style.backgroundColor = "black";
  } else if (currentMode == "grayScale") {
    e.target.style.backgroundColor = "gray";
  } else if (currentMode == "rainbow") {
    color();
    e.target.style.backgroundColor = currentColor;
  }
});


window.addEventListener("DOMContentLoaded", () => {
  elementCreater(default_size);
  updateCounter(currentSize)
  rango.value = currentSize

});
