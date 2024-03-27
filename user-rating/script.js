const imgEls = document.querySelectorAll(".rating");
const ratingNumber = imgEls.length;
let lastSelectionNo = 0,
  currentSelectionNo = 0;

imgEls.forEach((el) => {
  el.addEventListener("click", (event) => handleEvent(event.target.id));
});

// const handleEvent = (elemId) => {
//     const selectionRatingNo = +elemId.split("-")[1] //rating-1 -> [rating, 1] -> 1
//     for(let i=0; i<ratingNumber; i++){
//         const imgEl = document.getElementById('rating-' + (i+1))
//         imgEl.setAttribute('src', "./white_star.png")
//     }
//     for(let i=0; i<selectionRatingNo; i++){
//         const imgEl = document.getElementById('rating-' + (i+1))
//         imgEl.setAttribute('src', "./yellow_star.png")
//     }
// }
// this approach have some issue, suppose if we given 4 stars somehow i want to change to 2 stars. The dom will directly update to 2 stars from 4 stars. First it will reset fourstars then it will change to 2 stars, if we have more ratings like this it is very difficult to optimise. To resolve this issue follow  this approach.

/*if
currentSelection = 3
lastSelection = 2
here we have to change 1 dom element 
=> 3 - 2 = 1
=> 2 - 4 = -2
if number turnsto be positive -> highlight the remaining stars
if number turnsto be negetive -> reset the remaining stars
*/

const handleEvent = (elemId) => {
  const selectionRatingNo = +elemId.split("-")[1];
  currentSelectionNo = selectionRatingNo;
  const ratingDiff = currentSelectionNo - lastSelectionNo;
  let count = Math.abs(ratingDiff);
  if (ratingDiff > 0) {
    // 2 - 0 = 2, x + y = z (count)
    let i = lastSelectionNo + 1;
    while (count !== 0) {
      const imgEl = document.getElementById("rating-" + i);
      if (imgEl) {
        imgEl.setAttribute("src", "./yellow_star.png");
        count--;
        i++;
      }
    }
  }
  if (ratingDiff < 0) {
    // 2 - 4 = -2, count is abs = 2

    let i = lastSelectionNo;
    while (count !== 0) {
      const imgEl = document.getElementById("rating-" + i); //4
      if (imgEl) {
        imgEl.setAttribute("src", "./white_star.png");
        count--; //1
        i--;
      }
    }
  }
  lastSelectionNo = currentSelectionNo
};
