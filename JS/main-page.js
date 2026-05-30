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
        <div onclick="openModal(${card.id})" class="card-body space-y-1">
            <div class="flex  justify-between">
                        <div class="flex ">
                            ${card.status == "open"? `<img src="./assets/Open-Status.png" alt="">`: `<img src="./assets/Closed- Status .png" alt="">`}
                        </div>
      <div class="badge  badge-outline   ${priorityClass}">${card.priority}</div>
                    </div>
       <div>
        <h2 class="card-title">${card.title}
                        </h2>
            <p class="line-clamp-2 text-gray-700">${card.description}</p>
        <div class="card-actions justify-start my-2">
                        <div class="badge bg-red-100 badge-outline badge-error">${card.labels[0] == "bug"? ` <i class="fa-solid fa-bug"></i>`: card.labels[0] == "enhancement"?`<i class="fa-solid fa-rocket"></i>`: `<i class="fa-brands fa-readme"></i>`}  ${card.labels[0]}</div>
                        ${card.labels[1] ? `
                        <div class="badge badge-outline bg-amber-50 badge-warning">
                        <img src="./assets/vector.png" alt="">
                        ${card.labels[1]}
                        </div>` : ""}
                        </div>
        
        
        </div>     

        <div class="border-t border-gray-300 pt-4 text-gray-700 space-y-2 text-base">
          <p >#${card.id} ${card.author}</p>
                        <p>${new Date(card.createdAt).toLocaleDateString()}</p>
                     </div>  
            </div>    
            
                    cardCount.textContent = cards.length;
                    cardContainer.appendChild(cardDiv);
                     loadingRemove()
                     });
}

async function openIssue() {
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const data = await res.json();
    const allIssues = data.data;
        const filterOpenCard = allIssues.filter(issue => issue.status == "open");      
    displayCard(filterOpenCard);
    cardCount.textContent = filterOpenCard.length;
}
async function closedIssue() {
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const data = await res.json();
    const allIssues = data.data;
        const filterClosedCard = allIssues.filter(issue => issue.status == "closed");      
    displayCard(filterClosedCard);
    cardCount.textContent = filterClosedCard.length;
}

 openTabBtn.addEventListener("click", function () {    
        cardContainer.innerHTML = " ";
        openIssue();
        allTabBtn.classList.remove("btn-primary");
        closedTabBtn.classList.remove("btn-primary");
         openTabBtn.classList.add("btn-primary");
})

function togglebtn(id) {
    cardContainer.innerHTML = " ";
    const selectedBtn = document.getElementById(id);
    if (selectedBtn == openTabBtn) {
        loadingActive()
     allTabBtn.classList.remove("btn-primary");
    closedTabBtn.classList.remove("btn-primary");
        openTabBtn.classList.add("btn-primary");
        openIssue(); 
        loadingRemove()
    }
    if (selectedBtn == closedTabBtn) {
        loadingActive()
     allTabBtn.classList.remove("btn-primary");
    closedTabBtn.classList.add("btn-primary");
        openTabBtn.classList.remove("btn-primary");
        closedIssue();
        loadingRemove();
    }
       else {
        loadingActive()
        allTabBtn.classList.add("btn-primary");
    closedTabBtn.classList.remove("btn-primary");
        openTabBtn.classList.remove("btn-primary");
        cardContainer.innerHTML = " ";
        loadAllCard();
        loadingRemove();
    }

}