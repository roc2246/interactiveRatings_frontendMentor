const thankYouState = document.getElementById("thankYouState");
const ratingState = document.getElementById("ratingState");
const ratings = document.querySelectorAll(".ratingBox_ratings_numbers");
const chosenRating = document.getElementById("chosenRating");

let ratingValue;

thankYouState.style.display = "none";

ratings.forEach(rating => {
    rating.addEventListener('click', () => {
        ratingValue = rating.innerText;
        chosenRating.innerText = ratingValue;
    })
})

const submitRating = () => {
  thankYouState.style.display = "block";
  ratingState.style.display = "none";
};
