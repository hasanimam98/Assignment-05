const cardContainer = document.getElementById("card-container");
const allTabBtn = document.getElementById("all-btn");
const openTabBtn = document.getElementById("open-btn");
const closedTabBtn = document.getElementById("close-btn");
const cardCount = document.getElementById("card-count");
const loadingSpinner = document.getElementById("loading-spinner");
const cardDetailModal =document.getElementById("card-detail-modal");

// Moving

function loadingActive() {
    loadingSpinner.classList.remove("hidden")
    cardContainer.innerHTML = " ";
    console.log(loadingSpinner)
}
function loadingRemove() {
    loadingSpinner.classList.add("hidden");
    console.log(loadingSpinner);
}

// LoadCardAll

async function loadAllCard() {
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const data = await res.json();
    displayCard(data.data);
}
loadAllCard()

function displayCard(cards) {
    console.log(cards);
    loadingActive()
    cardContainer.innerHTML = " ";
    cards.forEach(card => {

        const cardDiv = document.createElement("div");
        if (card.status == "open") {
            cardDiv.className = "card border-green-450 border border-t-4 border-t-green-600 shadow-sm ";
        } else {
             cardDiv.className = "card border-purple-450 border border-t-4 border-t-purple-800 shadow-sm ";
        }

        const priorityClass = card.priority == "high" ? "badge-error" : card.priority == "low" ? "bg-gray-450 text-white" : "badge-warning";