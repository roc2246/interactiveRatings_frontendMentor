const thankYouState = document.getElementById("thankYouState");
const ratingState = document.getElementById("ratingState");
const ratings = document.querySelectorAll(".ratingBox_ratings_numbers");
const chosenRating = document.getElementById("chosenRating");

let ratingValue;

thankYouState.style.display = "none";

ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    ratings.forEach(rating => rating.removeAttribute("id"))
    rating.id= 'ratingBox_ratings_numbers--chosen';
    ratingValue = rating.innerText;
    chosenRating.innerText = ratingValue;
  });
});

function submitRating() {
  thankYouState.style.display = "block";
  ratingState.style.display = "none";
}
