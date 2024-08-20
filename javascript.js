const btn = document.getElementById("btn");
const container = document.getElementById("container");
const body = document.getElementById("body");
const par = document.getElementById("par");

container.style.textAlign = "right";

const handleClick = () => {
  if (container.style.textAlign === "right"){
    container.style.textAlign = "left";
    body.style.backgroundColor = "black";
    par.style.color = "white";
  }
  else if (container.style.textAlign === "left") {
    container.style.textAlign = "right";
    body.style.backgroundColor = "white";
    par.style.color = "black";
  }
}

btn.addEventListener("click", handleClick);