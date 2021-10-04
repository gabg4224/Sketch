let fragment = document.createDocumentFragment(),
  contenedor = document.querySelector("#contenedor"),
  clean = document.querySelector("#clean"),
  rango = document.querySelector("#rango"),
  container = document.querySelector("#container"),
  counter = document.querySelector("#counter")
  
let btnblack = document.querySelector("#black"),
  black = true,
  btnrainbow = document.querySelector("#rainbow"),
  rainbow = false,
  btnGrayScale = document.querySelector("#grayScale"),
  grayScale = false,
  colorBox = document.querySelector("#colorBox")




  let colorActive = ""

  window.addEventListener('DOMContentLoaded', () => {
   rango.value = 16
   counter.textContent = `${rango.valueAsNumber} X ${rango.valueAsNumber}`
});


let color = () => {
  if (colorActive == "") {
    colorActive = "red";
  } else if (colorActive == "red") {
    colorActive = "orange";
  }else if (colorActive == "orange") {
    colorActive = "yellow";
  }else if (colorActive == "yellow") {
    colorActive = "green";
  }else if (colorActive == "green") {
    colorActive = "blue";
  }else if (colorActive == "blue") {
    colorActive = "violet";
  }else if (colorActive == "violet") {
    colorActive = "red";
  }

return colorActive
};

let elementCreater = (number = 16) => {
  for (let i = 0; i < number * number; i++) {
    let element = document.createElement("DIV");

    element.classList.add(`elemento${i}`, "cuadrito");
    fragment.appendChild(element);
  }

  container.appendChild(fragment);
};

elementCreater();

container.addEventListener("mouseover", (e) => {
  if (black == true) {
e.target.style.backgroundColor = 'black'

 
  } else if (grayScale == true) {
e.target.style.backgroundColor = 'gray'
  } else if (rainbow == true) {
color()
    e.target.style.backgroundColor = colorActive
}});



let cleanse = () => {
  let replace = document.createDocumentFragment();

  for (let i = 0; i < rango.valueAsNumber * rango.valueAsNumber; i++) {
    let element = document.createElement("DIV");

    element.classList.add(`elemento${i}`, "cuadrito");
    replace.appendChild(element);
  }

  container.replaceChildren(replace);
};

btnblack.addEventListener("click", (e) => {
  black = true;
  grayScale = false;
  rainbow = false;
  colorActive = ''
  btnblack.classList.add('active')
  colorBox.classList.add('black')
  btnGrayScale.classList.remove('active')
  colorBox.classList.remove('gray')
  btnrainbow.classList.remove('active')
  colorBox.classList.remove('rainbow')
});

btnGrayScale.addEventListener("click", () => {
  black = false;
  grayScale = true;
  rainbow = false;
  colorActive = ''
  btnGrayScale.classList.add('active')

  btnblack.classList.remove('active')
  btnrainbow.classList.remove('active')

  colorBox.classList.add('gray')
  colorBox.classList.remove('black')
  colorBox.classList.remove('rainbow')
});

btnrainbow.addEventListener("click", () => {
  black = false;
  grayScale = false;
  rainbow = true;
  colorActive = ''
  btnrainbow.classList.add('active')
  btnblack.classList.remove('active')
  btnGrayScale.classList.remove('active')


  colorBox.classList.add('rainbow')
  colorBox.classList.remove('black')
  colorBox.classList.remove('gray')
});


rango.addEventListener("mousemove", () => {
  counter.textContent = `${rango.valueAsNumber} X ${rango.valueAsNumber}`
});


rango.addEventListener("mousedown", () => {
for (let i = 0; i < rango.valueAsNumber*rango.valueAsNumber; i++) {
  container.children[i].style.backgroundColor= `#fff`
  
}
});



rango.addEventListener("mouseup", () => {
  cleanse()
  container.style.gridTemplateColumns = `repeat(${rango.valueAsNumber},1fr)`;
  container.style.gridTemplateRows = `repeat(${rango.valueAsNumber},1fr)`;
});




clean.addEventListener("click", () => {
  for (let i = 0; i < rango.valueAsNumber*rango.valueAsNumber; i++) {
    container.children[i].style.backgroundColor= `#fff`}
    
});


