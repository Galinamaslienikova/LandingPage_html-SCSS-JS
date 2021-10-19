const menu = document.querySelector("nav");
const menuBtn = document.querySelector(".burger-btn");
const btnClose = document.querySelector(".close");

function $(id) {
  return document.getElementById(id);
}
//menu
menuBtn.addEventListener("click", function () {
  menu.classList.add("active");
});
btnClose.addEventListener("click", function () {
  menu.classList.remove("active");
});
//prices
$("open").addEventListener("click", function () {
  $("manPrices").classList.add("activeManPrice");
  $("manPrices").classList.remove("unactiveManPrices");
  $("open").style.display = "none";
  $("close").style.display = "flex";
  $("openSevice").style.display = "flex";
  $("bigservice").classList.add("serviceSmallMargin");
});
$("close").addEventListener("click", function () {
  $("open").style.display = "flex";
  $("close").style.display = "none";
  $("openSevice").style.display = "none";
  $("manPrices").classList.add("unactiveManPrices");
  $("manPrices").classList.remove("activeManPrice");
  $("bigservice").classList.remove("serviceSmallMargin");
  
});
//slider
let number = 0;
let res=$('firstPhoto').clientWidth
$("navR").addEventListener("click", function () {
  ++number;
  $("firstPhoto").style.marginLeft = res*-1 * number + "px";
  $("numberPhoto").innerHTML = number + 1;

  if (number > 6) {
    number = 0;
    $("firstPhoto").style.marginLeft = res * number + "px";
    $("numberPhoto").innerHTML = number + 1;
  }
  console.log(number)
  console.log($('firstPhoto').clientWidth)
  
});
$("navL").addEventListener("click", function () {
  
  $("numberPhoto").innerHTML = number;
  $("firstPhoto").style.marginLeft =res *-1* (number - 1) + "px";

  if (number < 1) {
    number = 7;
    $("firstPhoto").style.marginLeft = res*-1 * (number - 1) + "px";
    $("numberPhoto").innerHTML = number;
  }
  number--;
  console.log(number)
  console.log(res)
});

window.addEventListener('resize', () => {
  res=$('firstPhoto').clientWidth
  number = 0;
  $("firstPhoto").style.marginLeft=0
  $("numberPhoto").innerHTML = '1'
})
//form
let val1 = "Введите имя";
let val2 = "Kомментарий";
review[0].value = val1;
review[1].value = val2;
for (let i = 0; i < review.length - 1; i++) {
  review[i].onclick = function () {
    review[i].value = "";
  };
}
review.addEventListener('submit',function(e){
  review[0].value = val1;
  review[1].value = val2;
  e.preventDefault();
},true)




//map_helper
function drag(elementToDrag, event) {
  
  let startX = event.clientX,
      startY = event.clientY;

  let origX = elementToDrag.offsetLeft,
      origY = elementToDrag.offsetTop;

  let deltaX = startX - origX,
      deltaY = startY - origY;

  document.addEventListener("mousemove", moveHandler, true);
  document.addEventListener("mouseup", upHandler, true);
  let y=0
  let x=0
  function moveHandler(e) {
    y=e.clientY - deltaY
    x=e.clientX - deltaX
      if (!e) e = window.event;
      console.log(e)
      elementToDrag.style.left = (e.clientX - deltaX) + "px";
      elementToDrag.style.top = (e.clientY - deltaY) + "px";
  }

  function upHandler(e) {
      if (!e) e = window.event; 

      document.removeEventListener("mouseup", upHandler, true);
      document.removeEventListener("mousemove", moveHandler, true);
      if(y<60){
        elementToDrag.style.top = 60 + "px";
      }
      if(y>268){
        elementToDrag.style.top = 268 + "px";
      }
      if(x<0){
        elementToDrag.style.left =0 + "px"
      }
  }
}
window.onload=function init() {
  $('borderHelper').addEventListener("mousedown", function (e) {
      drag(this, e);
      console.log(e)
  })
  $('borderHelper').onmouseover = function () {
   $('tap').style.display='flex'
  }
  $('borderHelper').onmouseout = function () {
    $('tap').style.display='none'
  }
  if($('map').clientWidth<768){
    $('tap').style.display='none'
    
  }
}

//arrow_scroll
document.addEventListener('scroll', function(){
  console.log(document.clientWidth)
  if(document.documentElement.scrollTop > 400){
    $('btnToTop').style.display = "block";
  } else {
    $('btnToTop').style.display = "none";
  }
});

