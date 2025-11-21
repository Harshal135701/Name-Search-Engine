const users = [
    { name: "Srushti Lakare", pic: "assets/img1.jpg", bio: "a rainbow look like effect in smile is just amazing" },
    { name: "Aarohi Deshmukh", pic: "assets/img2.jpg", bio: "Her smile brings the kind of peace that feels like home." },
    { name: "Pranjali Patil", pic: "assets/img3.jpg", bio: "Elegance in every expression, confidence in every step." },
    { name: "Nandini Kulkarni", pic: "assets/img4.jpg", bio: "A simple vibe with a soft heart — that’s her magic." },
    { name: "Isha Khandekar", pic: "assets/img5.jpg", bio: "Calm, composed, and beautifully mysterious." },
    { name: "Shivam Jagtap", pic: "assets/img6.jpg", bio: "She carries a warmth that makes every moment brighter." },
    { name: "Sartak More", pic: "assets/img7.jpg", bio: "Soft smile, sharp mind — a perfect combination." },
];

// ======================
// GET DOM ELEMENTS ONCE
// ======================
const cardsContainer = document.querySelector(".cards");
const input = document.querySelector(".inp");
let message = document.querySelector(".message");

// ======================
// CREATE CARD ELEMENT
// ======================
function createCard(user) {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${user.pic}" class="bg-img" alt="">
        <div class="blurred-layer" style="background-image: url('${user.pic}')"></div>
        <div class="content">
            <h3>${user.name}</h3>
            <p>${user.bio}</p>
        </div>
    `;

    return card;
}

// ======================
// RENDER USERS
// ======================
function showUser(arr) {
    cardsContainer.innerHTML = "";  // clear only once
    const fragment = document.createDocumentFragment();

    arr.forEach(user => fragment.appendChild(createCard(user)));

    cardsContainer.appendChild(fragment);
}

// Initial load
showUser(users);

// ======================
// SEARCH FUNCTION
// ======================
input.addEventListener("input", () => {
    const value = input.value.trim().toLowerCase();

    const filtered = users.filter(user =>
        user.name.toLowerCase().startsWith(value)
    );

    showUser(filtered);
    if (filtered.length === 0) {
        message.style.visibility = "visible";
        message.textContent = "No user found!";
    } else {
        message.style.visibility = "hidden";
    }

});
