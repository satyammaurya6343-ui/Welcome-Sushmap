let selectedCity = "";
let selectedMood = "";
let selectedPeople = "";
let selectedBudget = "";

function login() {
    document.querySelector(".hero").style.display = "none";
    document.querySelector(".features").style.display = "none";

    document.getElementById("citySection").style.display = "none";
    document.getElementById("moodSection").style.display = "none";
    document.getElementById("peopleBudgetSection").style.display = "none";
    document.getElementById("resultsSection").style.display = "none";

    document.getElementById("loginSection").style.display = "flex";
}

function findPlaces() {
    document.querySelector(".hero").style.display = "none";
    document.querySelector(".features").style.display = "none";
    document.getElementById("exploreSection").style.display = "none";

    document.getElementById("citySection").style.display = "flex";
}

function chooseCity(city) {
    selectedCity = city;

    document.getElementById("cityMessage").innerText =
        "Selected city: " + city;
}

function nextStep() {
    if (selectedCity === "") {
        alert("Please select your city first.");
        return;
    }

    document.getElementById("citySection").style.display = "none";
    document.getElementById("moodSection").style.display = "flex";
}

function chooseMood(mood) {
    selectedMood = mood;

    document.getElementById("moodMessage").innerText =
        "Selected mood: " + mood;
}

function nextMood() {
    if (selectedMood === "") {
        alert("Please select your mood first.");
        return;
    }

    document.getElementById("moodSection").style.display = "none";
    document.getElementById("peopleBudgetSection").style.display = "flex";
}

function choosePeople(people) {
    selectedPeople = people;

    document.getElementById("peopleBudgetMessage").innerText =
        "People: " + people;
}

function chooseBudget(budget) {
    selectedBudget = budget;

    document.getElementById("peopleBudgetMessage").innerText =
        "Budget: ₹" + budget;
}

function nextPeopleBudget() {
    if (selectedPeople === "") {
        alert("Please select number of people first.");
        return;
    }

    if (selectedBudget === "") {
        alert("Please select your budget first.");
        return;
    }

    document.getElementById("peopleBudgetSection").style.display = "none";

    document.getElementById("resultCity").innerText = selectedCity;
    document.getElementById("resultMood").innerText = selectedMood;
    document.getElementById("resultPeople").innerText = selectedPeople;
    document.getElementById("resultBudget").innerText = selectedBudget;

    document.getElementById("resultsSection").style.display = "flex";
}
function applyFilters() {
    const venueType = document.getElementById("venueType").value;
    const sortBy = document.getElementById("sortBy").value;

    const venueCards = document.querySelectorAll(".venue-card");

    venueCards.forEach(card => {
        const type = card.querySelector(".venue-info > span").innerText.trim();

        if (venueType === "" || type === venueType) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });

    if (sortBy === "price-low") {
        sortVenues("low");
    } else if (sortBy === "price-high") {
        sortVenues("high");
    }

    document.getElementById("filterMessage").innerText =
        "Filters applied successfully!";
}

function clearFilters() {
    document.getElementById("venueType").value = "";
    document.getElementById("sortBy").value = "";

    document.getElementById("filterMessage").innerText =
        "Filters cleared.";
}

function editRequirement() {
    document.getElementById("resultsSection").style.display = "none";
    document.getElementById("peopleBudgetSection").style.display = "flex";
}
function bookVenue(venueName) {
    document.getElementById("bookingVenueName").innerText = venueName;

    document.getElementById("bookingPopup").style.display = "flex";
}

function closeBooking() {
    document.getElementById("bookingPopup").style.display = "none";
}

function confirmBooking() {
    const venueName =
        document.getElementById("bookingVenueName").innerText;

    const bookingsList =
        document.getElementById("bookingsList");

    const bookingItem = document.createElement("div");

    bookingItem.className = "booking-item";

    bookingItem.innerHTML = `
        <h3>${venueName}</h3>
        <p>Booking confirmed successfully.</p>
        <span>✓ Confirmed</span>
    `;

    bookingsList
        .querySelector(".no-booking")
        ?.remove();

    bookingsList.appendChild(bookingItem);

    closeBooking();

    alert("Booking confirmed for " + venueName);
}
function submitLogin() {
    const name = document.getElementById("userName").value.trim();
    const email = document.getElementById("userEmail").value.trim();

    if (name === "" || email === "") {
        alert("Please enter your name and email.");
        return;
    }

    document.getElementById("loginSection").style.display = "none";

    document.getElementById("welcomeName").innerText =
        "Welcome, " + name + "!";

    document.getElementById("profileSection").style.display = "flex";
}
function continueFromProfile() {
    document.getElementById("profileSection").style.display = "none";

    document.querySelector(".hero").style.display = "none";
    document.querySelector(".features").style.display = "none";

    document.getElementById("exploreSection").style.display = "flex";
}
function showExplore() {
    document.querySelector(".hero").style.display = "none";
    document.querySelector(".features").style.display = "none";

    document.getElementById("citySection").style.display = "none";
    document.getElementById("moodSection").style.display = "none";
    document.getElementById("peopleBudgetSection").style.display = "none";
    document.getElementById("resultsSection").style.display = "none";
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("profileSection").style.display = "none";

    document.getElementById("exploreSection").style.display = "flex";
}

function showBookings() {
    document.querySelector(".hero").style.display = "none";
    document.querySelector(".features").style.display = "none";

    document.getElementById("exploreSection").style.display = "none";
    document.getElementById("citySection").style.display = "none";
    document.getElementById("moodSection").style.display = "none";
    document.getElementById("peopleBudgetSection").style.display = "none";
    document.getElementById("resultsSection").style.display = "none";
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("profileSection").style.display = "none";

    document.getElementById("bookingsSection").style.display = "flex";
}

function showSupport() {
    document.querySelector(".hero").style.display = "none";
    document.querySelector(".features").style.display = "none";

    document.getElementById("exploreSection").style.display = "none";
    document.getElementById("citySection").style.display = "none";
    document.getElementById("moodSection").style.display = "none";
    document.getElementById("peopleBudgetSection").style.display = "none";
    document.getElementById("resultsSection").style.display = "none";
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("profileSection").style.display = "none";
    document.getElementById("bookingsSection").style.display = "none";

    document.getElementById("supportSection").style.display = "flex";
}