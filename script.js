const ratingCard = document.getElementById('rating-card');
const thankyouCard = document.getElementById('thankyou-card');
const submitButton = document.querySelector('#rating-card button');
const ratings = document.querySelectorAll('#rating-card ul li');


function submitRating() {
    submitButton.addEventListener('click', () => {
        ratingCard.style.display = 'none';
        thankyouCard.style.display = 'flex';

        const selectedRating = document.querySelector('#selected-rating-msg p span');
        selectedRating.textContent = ratingValue;
    });
}

let ratingValue = 1;
ratings.forEach(rating => {
    rating.addEventListener('click', (e) => {
        ratings.forEach(rate => rate.classList.remove('selected'));
        ratingValue = rating.textContent;

        if (rating.classList.contains('selected')) {
            rating.classList.remove('selected');
        }
        else {
            rating.classList.add('selected');
        }
        submitRating();
    });
});