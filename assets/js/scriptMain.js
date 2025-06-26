// // ========== المتغيرات الأساسية ==========
// const cardsContainer = document.querySelector(".mainDash");
// const addCardBtn = document.getElementById("addCard");
// const starFilterBtn = document.getElementById("goToStars");

// let cards = JSON.parse(localStorage.getItem("cards")) || [];
// let showingOnlyStarred = false;

// // ========== توليد كرت ==========
// function createCard(card) {
//     const cardDiv = document.createElement("div");
//     cardDiv.classList.add("card");
//     cardDiv.dataset.id = card.id;

//     cardDiv.innerHTML = `
//         <div class="cardMainDash">
//             <div class="StarCard">
//                 <button class="starBtn">
//                     <i class="fa-solid fa-star ${card.starred ? 'active-star' : ''}"></i>
//                 </button>
//             </div>
//             <div class="cardInformation">
//                 <input type="text" value="${card.title}" class="cardTitle">
//                 <div>
//                     <textarea placeholder="Add Notes...">${card.notes}</textarea>
//                 </div>
//                 <p class="dateInCardInfo">${card.date}</p>
//             </div>
//             <div class="cardDelete">
//                 <button class="deleteBtn"><i class="fa-solid fa-trash"></i></button>
//             </div>
//         </div>
//     `;

//     // حفظ التعديلات
//     cardDiv.querySelector(".cardTitle").addEventListener("input", (e) => {
//         updateCard(card.id, "title", e.target.value);
//     });

//     cardDiv.querySelector("textarea").addEventListener("input", (e) => {
//         updateCard(card.id, "notes", e.target.value);
//     });

//     // حذف الكرت
//     cardDiv.querySelector(".deleteBtn").addEventListener("click", () => {
//         deleteCard(card.id);
//     });

//     // تمييز النجمة
//     const starBtn = cardDiv.querySelector(".starBtn");
//     starBtn.addEventListener("click", () => {
//         card.starred = !card.starred;
//         updateCard(card.id, "starred", card.starred);
//         starBtn.querySelector("i").classList.toggle("active-star");
//         if (showingOnlyStarred) renderCards();

//     });

//     cardsContainer.appendChild(cardDiv);
// }

// // ========== تحديث كرت ==========
// function updateCard(id, field, value) {
//     const index = cards.findIndex(card => card.id === id);
//     if (index !== -1) {
//         cards[index][field] = value;
//         localStorage.setItem("cards", JSON.stringify(cards));
//     }
// }

// // ========== حذف كرت ==========
// function deleteCard(id) {
//     const cardDiv = document.querySelector(`.cardContiner[data-id="${id}"]`);

//     if (!cardDiv) return;

//     cardDiv.classList.add("fade-out");

//     setTimeout(() => {
//         // حذف من الـ array
//         cards = cards.filter(card => card.id !== id);
//         // تحديث التخزين المحلي
//         localStorage.setItem("cards", JSON.stringify(cards));
//         // حذف العنصر من الـ DOM
//         cardDiv.remove();
//     }, 500); // نفس المدة يلي بالـ CSS
// }

// // ========== إضافة كرت جديد ==========
// function addNewCard() {
//     const newCard = {
//         id: Date.now(),
//         title: "Untitled",
//         notes: "",
//         starred: false,
//         date: new Date().toLocaleString("en-US", {
//             day: "numeric",
//             month: "short",
//             year: "numeric",
//             hour: "2-digit",
//             minute: "2-digit",
//             hour12: true
//         })
//     };
//     cards.push(newCard);
//     localStorage.setItem("cards", JSON.stringify(cards));
//     renderCards();
// }

// // ========== عرض الكروت ==========
// function renderCards() {
//     cardsContainer.innerHTML = "";
//     const filtered = showingOnlyStarred ? cards.filter(card => card.starred) : cards;
//     filtered.forEach(createCard);
// }

// // ========== زر الإضافة ==========
// addCardBtn.addEventListener("click", addNewCard);

// // ========== زر الفلترة ==========
// starFilterBtn.addEventListener("click", () => {
//     showingOnlyStarred = !showingOnlyStarred;
//     starFilterBtn.classList.toggle("active-star", showingOnlyStarred); // <== كلاس يغير شكل الزر مثلاً
//     renderCards();
// });

// // ========== عرض الكروت عند البدء ==========
// renderCards();


// ========== المتغيرات الأساسية ==========
const cardsContainer = document.querySelector(".mainDash");
const addCardBtn = document.getElementById("addCard");
const starFilterBtn = document.getElementById("goToStars");

let cards = JSON.parse(localStorage.getItem("cards")) || [];
let showingOnlyStarred = false;

// ========== توليد كرت ==========
function createCard(card) {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardDiv.dataset.id = card.id;

    cardDiv.innerHTML = `
        <div class="cardMainDash">
            <div class="StarCard">
                <button class="starBtn">
                    <i class="fa-solid fa-star ${card.starred ? 'active-star' : ''}"></i>
                </button>
            </div>
            <div class="cardInformation">
                <input type="text" value="${card.title}" class="cardTitle">
                <div>
                    <textarea placeholder="Add Notes...">${card.notes}</textarea>
                </div>
                <p class="dateInCardInfo">${card.date}</p>
            </div>
            <div class="cardDelete">
                <button class="deleteBtn"><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>
    `;

    // حفظ التعديلات
    cardDiv.querySelector(".cardTitle").addEventListener("input", (e) => {
        updateCard(card.id, "title", e.target.value);
    });

    cardDiv.querySelector("textarea").addEventListener("input", (e) => {
        updateCard(card.id, "notes", e.target.value);
    });

    // حذف الكرت
    cardDiv.querySelector(".deleteBtn").addEventListener("click", () => {
        deleteCard(card.id);
    });

    // تمييز النجمة
    const starBtn = cardDiv.querySelector(".starBtn");
    starBtn.addEventListener("click", () => {
        card.starred = !card.starred;
        updateCard(card.id, "starred", card.starred);
        starBtn.querySelector("i").classList.toggle("active-star");
        if (showingOnlyStarred) renderCards();
    });

    cardsContainer.appendChild(cardDiv);
}

// ========== تحديث كرت ==========
function updateCard(id, field, value) {
    const index = cards.findIndex(card => card.id === id);
    if (index !== -1) {
        cards[index][field] = value;
        localStorage.setItem("cards", JSON.stringify(cards));
    }
}

// ========== حذف كرت ==========
// function deleteCard(id) {
//     const cardDiv = document.querySelector(`.card[data-id="${id}"]`);
//     if (!cardDiv) return;

//     cardDiv.classList.add("geometric-fade");
//     setTimeout(() => {
//         cards = cards.filter(card => card.id !== id);
//         localStorage.setItem("cards", JSON.stringify(cards));
//         cardDiv.remove();
//     }, 500);
// }

function deleteCard(id) {
    const cardDiv = document.querySelector(`.card[data-id="${id}"]`);
    if (!cardDiv) return;

    // فكك الكرت إلى مثلثات
    createTriangleExplosion(cardDiv);

    setTimeout(() => {
        cards = cards.filter(card => card.id !== id);
        localStorage.setItem("cards", JSON.stringify(cards));
        renderCards();
    }, 800);
}

function createTriangleExplosion(cardDiv) {
    const rect = cardDiv.getBoundingClientRect();
    const pieceCount = 20;

    for (let i = 0; i < pieceCount; i++) {
        const triangle = document.createElement("div");
        triangle.classList.add("triangle-piece");

        triangle.style.left = `${rect.left + Math.random() * rect.width}px`;
        triangle.style.top = `${rect.top + Math.random() * rect.height}px`;
        triangle.style.background = getComputedStyle(cardDiv).backgroundColor;
        triangle.style.transform = `rotate(${Math.random() * 360}deg) scale(${Math.random() * 0.8 + 0.5})`;

        document.body.appendChild(triangle);

        setTimeout(() => {
            triangle.remove();
        }, 800);
    }

    cardDiv.style.opacity = 0;
}

// ========== إضافة كرت جديد ==========
function addNewCard() {
    const newCard = {
        id: Date.now(),
        title: "Untitled",
        notes: "",
        starred: false,
        date: new Date().toLocaleString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
        })
    };
    cards.push(newCard);
    localStorage.setItem("cards", JSON.stringify(cards));
    renderCards();
}

// ========== عرض الكروت ==========
function renderCards() {
    cardsContainer.innerHTML = "";
    const filtered = showingOnlyStarred ? cards.filter(card => card.starred) : cards;
    filtered.forEach(createCard);
}

// ========== زر الإضافة ==========
addCardBtn.addEventListener("click", addNewCard);

// ========== زر الفلترة ==========
starFilterBtn.addEventListener("click", () => {
    showingOnlyStarred = !showingOnlyStarred;
    starFilterBtn.classList.toggle("active-star", showingOnlyStarred);
    renderCards();
});

// ========== عرض الكروت عند البدء ==========
renderCards();
