const ratingsContainer = document.querySelector(".ratings-container");
const ratings = [...ratingsContainer.children];
const ratingCard = ratingsContainer.parentElement.parentElement;
const submitBtn = document.querySelector(".submit-btn");
let rating;

ratingsContainer.addEventListener("click", function (event) {
  let n = ratings.indexOf(event.target);
  rating = event.target.innerText;
  ratings.forEach((rating, i) => {
    if (i <= n) {
      rating.classList.add("selected");
      rating.classList.remove("hovered");
    }
  });
});

ratings.forEach((rating) => {
  rating.addEventListener("mouseenter", function () {
    let n = ratings.indexOf(this);
    ratings.forEach((rating, i) => {
      if (i <= n) {
        rating.classList.add("hovered");
      }
      rating.classList.remove("selected");
    });
  });

  rating.addEventListener("mouseleave", function () {
    let n = ratings.indexOf(this);
    ratings.forEach((rating, i) => {
      if (i <= n) {
        rating.classList.remove("hovered");
      }
    });
  });
});

submitBtn.addEventListener("click", function () {
  ratingCard.innerHTML = printUi(rating);
});

function printUi(rate) {
  return `<section id="thanks">
        <img
          src="images/illustration-thank-you.svg"
          alt="thanks"
          class="thanks-illustration"
        />
        <p class="rating">You selected ${rate} out of 5</p>
        <h1 class="appreciate">Thank you!</h1>
        <p class="thanks-description">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </section>`;
}
