// const cardContainer = document.getElementById("card-container");
// const allTabBtn = document.getElementById("all-btn");
// const openTabBtn = document.getElementById("open-btn");
// const closedTabBtn = document.getElementById("close-btn");
// const cardCount = document.getElementById("card-count");
// const loadingSpinner = document.getElementById("loading-spinner");
// const cardDetailModal =document.getElementById("card-detail-modal");

// // Moving

// function loadingActive() {
//     loadingSpinner.classList.remove("hidden")
//     // cardContainer.innerHTML = " ";
//     console.log(loadingSpinner)
// }
// function loadingRemove() {
//     loadingSpinner.classList.add("hidden");
//     console.log(loadingSpinner);
// }

// // LoadCardAll

// // async function loadAllCard() {
// //      loadingActive();
// //     const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
// //     const data = await res.json();
// //     displayCard(data.data);
    
// // }
// async function loadAllCard() {
//     loadingActive();

//     const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
//     const data = await res.json();

//     displayCard(data.data);
//     loadingRemove();
// }
// loadAllCard()

// function displayCard(cards) {
//     console.log(cards);
//     // corrected
//     // loadingActive()
//     // cardContainer.innerHTML = " ";
//     cards.forEach(card => {

//         const cardDiv = document.createElement("div");
//         if (card.status == "open") {
//             cardDiv.className = "card border-green-450 border border-t-4 border-t-green-600 shadow-sm ";
//         } else {
//              cardDiv.className = "card border-purple-450 border border-t-4 border-t-purple-800 shadow-sm ";
//         }

//         const priorityClass = card.priority == "high" ? "badge-error" : card.priority == "low" ? "bg-gray-450 text-white" : "badge-warning";
//         cardDiv.innerHTML =` 

//         <div onclick="openModal(${card.id})" class="card-body space-y-1">
//             <div class="flex  justify-between">
//                         <div class="flex ">
//                             ${card.status == "open"? `<img src="./assets/Open-Status.png" alt="">`: `<img src="./assets/Closed- Status .png" alt="">`}
//                         </div>
//       <div class="badge  badge-outline   ${priorityClass}">${card.priority}</div>
//                     </div>
//        <div>
//         <h2 class="card-title">${card.title}
//                         </h2>
//             <p class="line-clamp-2 text-gray-700">${card.description}</p>
//         <div class="card-actions justify-start my-2">
//                         <div class="badge bg-red-100 badge-outline badge-error">${card.labels[0] == "bug"? ` <i class="fa-solid fa-bug"></i>`: card.labels[0] == "enhancement"?`<i class="fa-solid fa-rocket"></i>`: `<i class="fa-brands fa-readme"></i>`}  ${card.labels[0]}</div>
//                         ${card.labels[1] ? `
//                         <div class="badge badge-outline bg-amber-50 badge-warning">
//                         <img src="./assets/vector.png" alt="">
//                         ${card.labels[1]}
//                         </div>` : ""}
//                         </div>
        
        
//         </div>     

//         <div class="border-t border-gray-300 pt-4 text-gray-700 space-y-2 text-base">
//           <p >#${card.id} ${card.author}</p>
//                         <p>${new Date(card.createdAt).toLocaleDateString()}</p>
//                      </div>  
//             </div> `;
            
            
//                     cardCount.textContent = cards.length;
//                     cardContainer.appendChild(cardDiv);
                     
//                      });
//                      loadingRemove();
// }

// // async function openIssue() {
    
// //     const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
// //     const data = await res.json();
// //     const allIssues = data.data;
// //         const filterOpenCard = allIssues.filter(issue => issue.status == "open");      
// //     displayCard(filterOpenCard);
// //     cardCount.textContent = filterOpenCard.length;
    
// // }
// async function openIssue() {
//     const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
//     const data = await res.json();

//     const filterOpenCard = data.data.filter(issue => issue.status == "open");

//     displayCard(filterOpenCard);
//     // cardCount.textContent = filterOpenCard.length;
// }
// // async function closedIssue() {
    
// //     const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
// //     const data = await res.json();
// //     const allIssues = data.data;
// //         const filterClosedCard = allIssues.filter(issue => issue.status == "closed");      
// //     displayCard(filterClosedCard);
// //     cardCount.textContent = filterClosedCard.length;
    
// // }
// async function closedIssue() {
//     const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
//     const data = await res.json();

//     const filterClosedCard = data.data.filter(issue => issue.status == "closed");

//     displayCard(filterClosedCard);
//     // cardCount.textContent = filterClosedCard.length;
// }

//  openTabBtn.addEventListener("click", function () {    
//         cardContainer.innerHTML = " ";
//         openIssue();
//         allTabBtn.classList.remove("btn-primary");
//         closedTabBtn.classList.remove("btn-primary");
//          openTabBtn.classList.add("btn-primary");
// })

// // function togglebtn(id) {
// //     cardContainer.innerHTML = " ";
// //     const selectedBtn = document.getElementById(id);
// //     if (selectedBtn == openTabBtn) {
// //         loadingActive()
// //      allTabBtn.classList.remove("btn-primary");
// //     closedTabBtn.classList.remove("btn-primary");
// //         openTabBtn.classList.add("btn-primary");
// //         openIssue(); 
// //         loadingRemove()
// //     }
// //     if (selectedBtn == closedTabBtn) {
// //         loadingActive()
// //      allTabBtn.classList.remove("btn-primary");
// //     closedTabBtn.classList.add("btn-primary");
// //         openTabBtn.classList.remove("btn-primary");
// //         closedIssue();
// //         loadingRemove();
// //     }
// //        else {
// //         loadingActive()
// //         allTabBtn.classList.add("btn-primary");
// //     closedTabBtn.classList.remove("btn-primary");
// //         openTabBtn.classList.remove("btn-primary");
// //         cardContainer.innerHTML = " ";
// //         loadAllCard();
// //         loadingRemove();
// //     }

// // }
// function togglebtn(id) {
//     const selectedBtn = document.getElementById(id);

//     loadingActive();

//     if (selectedBtn === openTabBtn) {
//         allTabBtn.classList.remove("btn-primary");
//         closedTabBtn.classList.remove("btn-primary");
//         openTabBtn.classList.add("btn-primary");

//         openIssue();
//     }

//     else if (selectedBtn === closedTabBtn) {
//         allTabBtn.classList.remove("btn-primary");
//         openTabBtn.classList.remove("btn-primary");
//         closedTabBtn.classList.add("btn-primary");

//         closedIssue();
//     }

//     else {
//         allTabBtn.classList.add("btn-primary");
//         openTabBtn.classList.remove("btn-primary");
//         closedTabBtn.classList.remove("btn-primary");

//         loadAllCard();
//     }

    
// }

// const openModal = async(id) => {
//     const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`);
//     const details = await res.json();
//     console.log(details.data);
//     const card = details.data;
//     const priorityClass = card.priority == "high" ? "badge-error" : card.priority == "low" ? "bg-gray-600 text-white" : "badge-warning";
//     const statusClass = card.status == "open" ? "badge-success" : "badge-primary";
//     console.log(card.labels);

//     cardDetailModal.innerHTML = `
//         <div class="modal-box">
//         <h3 class="text-lg font-bold mb-2">${card.title}</h3>
//         <div class="flex gap-3 ">
//         <span class=" badge ${statusClass}">${card.status}</span> <span>  • Opened by ${card.assignee}</span>  <span>• ${new Date(card.updatedAt).toLocaleDateString()}</span>
//         </div>

//         <div class="card-actions justify-start my-5">
//                         <div class="badge bg-red-100 badge-outline badge-error">${card.labels[0] == "bug"? ` <i class="fa-solid fa-bug"></i>`: card.labels[0] == "enhancement"?`<i class="fa-solid fa-rocket"></i>`: `<i class="fa-brands fa-readme"></i>`}  ${card.labels[0]}</div>
//                         ${card.labels[1] ? `
//                         <div class="badge badge-outline bg-amber-50 badge-warning">
//                         <img src="./assets/vector.png" alt="">
//                         ${card.labels[1]}
//                         </div>` : ""}
//                         </div>

//     <p class="py-4">${card.description}</p>

//         <div class="bg-gray-100 p-4 grid grid-cols-2 justify-start rounded">
//             <div >
//               <p>Assignee:</p>
//               <p class="font-bold">${card.assignee}</p>
//             </div>
//             <div>
//               <p class="text-gray-600">Priority:</p>
//               <div class="badge  text-white  ${priorityClass}">${card.priority}</div>
//             </div>
//         </div>
//         <div class="modal-action">
//         <form method="dialog">
            
//             <button class="btn btn-primary">Close</button>
//         </form>
//         </div>
//     </div>




// document.getElementById("search-btn").addEventListener("click", async () => {
//     const searchInput = document.getElementById("searchInput");
//     const searchValue = searchInput.value.trim().toLowerCase();

//     const res = await fetch(
//   "https://phi-lab-server.vercel.app/api/v1/lab/issues"
// );

// const data = await res.json();

// console.log(data);

//     // displayCard(data.data);
// });


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

