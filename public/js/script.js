const thankYouState = document.getElementById("thankYouState");
const ratingState = document.getElementById("ratingState");
const ratings = document.querySelectorAll(".ratingBox_ratings_numbers");
const chosenRating = document.getElementById("chosenRating");

let ratingValue;

thankYouState.style.display = "none";

ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    ratings.forEach((rating) => (rating.style.backgroundColor = "#262f38"));
    rating.style.backgroundColor = "#7c8898";
    ratingValue = rating.innerText;
    chosenRating.innerText = ratingValue;
  });
});

const submitRating = () => {
  thankYouState.style.display = "block";
  ratingState.style.display = "none";
};
