
const btn_readMore = document.getElementById("btn_readMore");
const text_hide = document.getElementById("text_hide");
const btn_readLess = document.getElementById("btn_readLess")

const btn_readMore2 = document.getElementById("btn_readMore2");
const text_hide2 = document.getElementById("text_hide2");
const btn_readLess2 = document.getElementById("btn_readLess2");


btn_readMore.addEventListener("click", () => {  
  text_hide.classList.add("show");
  btn_readMore.classList.toggle("hide");
  btn_readLess.classList.add("show")
});

btn_readLess.addEventListener("click", () => {
  text_hide.classList.remove("show");
  btn_readLess.classList.remove("show")
  text_hide.classList.contains("hide")
    ? btn_readMore.classList.remove("hide")
    : btn_readMore.classList.remove("show");
});

btn_readMore2.addEventListener("click", () => {
  text_hide2.classList.toggle("show");
  btn_readMore2.classList.toggle("hide");
});

btn_readLess2.addEventListener("click", () => {
  text_hide2.classList.remove("show");
  text_hide2.classList.contains("show")
    ? btn_readMore2.classList.add("show")
    : btn_readMore2.classList.remove("hide");
});




const whatsapp = document.getElementById("whatsapp");

window.onscroll = () => {
  let position = window.scrollY;

  position >= 150
    ? whatsapp.classList.replace("wts", "wts_show")
    : whatsapp.classList.add("wts"),
      whatsapp.classList.remove("wts_show"); 
};


