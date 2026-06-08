
const cardContainer = document.getElementById("card-container");
const allTabBtn = document.getElementById("all-btn");
const openTabBtn = document.getElementById("open-btn");
const closedTabBtn = document.getElementById("close-btn");
const cardCount = document.getElementById("card-count");
const loadingSpinner = document.getElementById("loading-spinner");
const cardDetailModal = document.getElementById("card-detail-modal");

// LOADING
function loadingActive() {
    loadingSpinner.classList.remove("hidden");
}

function loadingRemove() {
    loadingSpinner.classList.add("hidden");
}

//LOAD ALL
async function loadAllCard() {
    loadingActive();

    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const data = await res.json();

    displayCard(data.data);

    loadingRemove();
}

loadAllCard();

//DISPLAY CARDS
function displayCard(cards) {
    cardContainer.innerHTML = "";

    cards.forEach(card => {

        const cardDiv = document.createElement("div");

        cardDiv.className = card.status == "open"
            ? "card border border-t-4 border-t-green-600 shadow-sm"
            : "card border border-t-4 border-t-purple-800 shadow-sm";

        const priorityClass =
            card.priority == "high"
                ? "badge-error"
                : card.priority == "low"
                ? "bg-gray-500 text-white"
                : "badge-warning";

        cardDiv.innerHTML = `
            <div onclick="openModal(${card.id})" class="card-body space-y-1">

                <div class="flex justify-between">
                    <div>
                        ${card.status == ""
                            ? `<img src="Open-Status.png"`
                            : `<img src="./assets/Closed-Status.png" />`}
                    </div>

                    <div class="badge badge-outline ${priorityClass}">
                        ${card.priority}
                    </div>
                </div>

                <h2 class="card-title">${card.title}</h2>

                <p class="text-gray-700 line-clamp-2">${card.description}</p>

                <div class="card-actions">
                    <div class="badge badge-error">
                        ${card.labels[0]}
                    </div>

                    ${card.labels[1]
                        ? `<div class="badge badge-warning">${card.labels[1]}</div>`
                        : ""}
                </div>

                <div class="border-t pt-2 text-sm text-gray-600">
                    <p>#${card.id} ${card.author}</p>
                    <p>${new Date(card.createdAt).toLocaleDateString()}</p>
                </div>

            </div>
        `;

        cardContainer.appendChild(cardDiv);
    });

    cardCount.textContent = cards.length;
}

//FILTER OPEN
async function openIssue() {
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const data = await res.json();

    const openCards = data.data.filter(i => i.status === "open");

    displayCard(openCards);
}

//FILTER CLOSED
async function closedIssue() {
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const data = await res.json();

    const closedCards = data.data.filter(i => i.status === "closed");

    displayCard(closedCards);
}

//TAB BUTTONS
openTabBtn.addEventListener("click", () => {
    openIssue();
});

closedTabBtn.addEventListener("click", () => {
    closedIssue();
});

allTabBtn.addEventListener("click", () => {
    loadAllCard();
});

//MODAL
const openModal = async (id) => {
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`);
    const data = await res.json();

    const card = data.data;

    const priorityClass =
        card.priority == "high"
            ? "badge-error"
            : card.priority == "low"
            ? "bg-gray-600 text-white"
            : "badge-warning";

    const statusClass =
        card.status == "open"
            ? "badge-success"
            : "badge-primary";

    cardDetailModal.innerHTML = `
        <div class="modal-box">

            <h3 class="text-lg font-bold mb-2">${card.title}</h3>

            <div class="flex gap-2 text-sm">
                <span class="badge ${statusClass}">${card.status}</span>
                <span>• ${card.assignee}</span>
                <span>• ${new Date(card.updatedAt).toLocaleDateString()}</span>
            </div>

            <p class="py-4">${card.description}</p>

            <div class="flex gap-2">
                <span class="badge ${priorityClass}">
                    ${card.priority}
                </span>
            </div>

            <div class="modal-action">
                <form method="dialog">
                    <button class="btn btn-primary">Close</button>
                </form>
            </div>

        </div>
    `;

    document.getElementById("card-detail-modal").showModal();
};

