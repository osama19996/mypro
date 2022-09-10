/// get slider-items

let sliderImages =Array.from(document.querySelectorAll(".slider-container img"));

//// get number of slides
let slidesCount = sliderImages.length;
console.log(slidesCount);
/// set current slide
let currentSlide = 1;
//// slide number ellement
let slideNumberElement =document.getElementById("slide-number");
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");


/// creeat ul element

let paignationElement = document.createElement("ul") ;

paignationElement.setAttribute("id","paignation-ul");

// creat li depend on slideimages array
for( let i = 1 ; i<=slidesCount ; i++){

  let paignationItem = document.createElement("li") ;

  paignationItem.setAttribute("data-index" , i);
  paignationItem.appendChild(document.createTextNode(i));
  paignationElement.appendChild(paignationItem);

}
/// add creat element ul in span
document.getElementById("indicators").appendChild( paignationElement );
 //// get tne creat ull
let paignationCreatedUl = document.getElementById("paignation-ul");
/// GET THE CREAT UL LI
let paignationBullets = Array.from(document.querySelectorAll(" #paignation-ul li"));

//// looop on bullets
for( let i=0; i<paignationBullets.length ; i++){

  paignationBullets[i].onclick = function(){

    currentSlide= parseInt(this.getAttribute("data-index"));
    checker();

  }


}
checker();

//// hadling the buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

/// next slide function
function nextSlide(){

  if( nextButton.classList.contains("disabled")){

    return false;

     }
    else{

      currentSlide ++;
      checker();
    }

}

///prev slide function
function prevSlide(){
if( prevButton.classList.contains("disabled")){

    return false;

     }
    else{

      currentSlide --;
      checker();
    }

}
//// checker function
function checker(){
removeAll();

  slideNumberElement.textContent =`slide #${currentSlide} of ${slidesCount}`;

  /// SET ACTIVE  CLASS ON CURRENT SLIDE
  sliderImages[currentSlide -1].classList.add("active");

  /// set activ class on paignationItem

  paignationCreatedUl.children[currentSlide - 1].classList.add('active');

  //// check it is first or not
  if(currentSlide ===1){
    prevButton.classList.add("disabled");
  }
  else{
   prevButton.classList.remove("disabled");
  }
///check it is the list or not
  if(currentSlide === slidesCount){
     nextButton.classList.add("disabled");
  }
  else{
         nextButton.classList.remove("disabled");


  }
}

///  remove fun

function removeAll(){
sliderImages.forEach(function (el){ el.classList.remove("active")});
paignationBullets.forEach(function (Bullet){ Bullet.classList.remove("active")});
  }
