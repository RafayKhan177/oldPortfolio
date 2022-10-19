function openNav() {
  document.getElementById("mySidenav").style.width = "220px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

//Scroll

const navbarElem = document.querySelector("#nav");
const footerElem = document.querySelector("footer");
const aboutUsElem = document.querySelector(".aboutUs");


const scroollElement = document.createElement("div");
scroollElement.classList.add("scrollTop-div");
scroollElement.innerHTML = `<i style="overflow: hidden;" data-aos="slide-up" class="fa-regular fa-circle-up scrollTopIcon"></i>`;
footerElem.after(scroollElement);


const scrollTop = () => {
  navbarElem.scrollIntoView({ behavior: "smooth" });
};

scroollElement.addEventListener("click", scrollTop);

