const story = document.querySelector('.quotes');
function randomValueFromArray(array) {
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}
let storyQuotes = ["Some old wounds never truly heal, and bleed again at the slightest word", "If I look back, I am lost.", 
                                    "Different roads sometimes lead to the same castle.", "The man who fears losing has already lost.",
                                    "He who hurries through life hurries to his grave.", "A good act does not wash out the bad, nor a bad act the good. Each should have its own reward.",
                                    "The storms come and go, the waves crash overhead, the big fish eat the little fish, and I keep on paddling."];
function result() {
  //newStory = randomValueFromArray(storyQuotes);
  story.textContent = randomValueFromArray(storyQuotes);
  story.style.visibility = 'visible';
 }
result();


let sansaPic = document.getElementById("sansa");
let characterCaption = document.getElementById("characters");
let sansaBackground = document.getElementById("sansa-background");

let triggerAt = 100;
function sansa() {
  sansaPic.onscroll;
  let topOfImage = sansaPic.scrollTop + triggerAt;
  return topOfImage;
}

function caption() {
  characterCaption.onscroll;
  let topOfCaption = characterCaption.scrollTop + triggerAt;
  return topOfCaption;
}

function background() {
  sansaBackground.onscroll;
  let topOfSansaBackground = sansaBackground.scrollTop + triggerAt;
  return topOfSansaBackground;
}

window.addEventListener("scroll", fadeInImage);

function fadeInImage() {
  let currentPosition = window.pageYOffset;
  let topOfImage = sansa();
  let topOfCaption = caption();
  let topOfSansaBackground = background();

    if (currentPosition > topOfImage) {
      sansaPic.style.visibility = "visible";
      window.removeEventListener("scroll", fadeInImage);
    }
    if (currentPosition > topOfCaption) {
      characterCaption.style.visibility = "visible";
      window.removeEventListener("scroll", fadeInImage);
    }
    if (currentPosition > topOfSansaBackground) {
      sansaBackground.style.visibility = "visible";
      window.removeEventListener("scroll", fadeInImage);
    }
}



  

