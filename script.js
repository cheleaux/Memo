    
const ul = document.getElementById("memo-library-container");
let body = document.forms["memo-form"]["body-input"];
let title = document.forms["memo-form"]["title-input"];

let date = getDate();

let memoArray = localStorage.getItem('memos') ?
JSON.parse(localStorage.getItem('memos')) : [];


document.getElementById("clearBtn").addEventListener("click", () => {
    localStorage.clear();
    ul.innerHTML = ``;
    memoArray = [];
});


memoArray.forEach(({ date, title, body }) => {
    const memoCard = 
        `<li class="memo-card">
            <header class="card-header">
                <span class="date">${date}</span><span class="title">${title}<span>
            </header>
            <div class="card-body-container">
                <p class="card-body">${body}</p>
            </div>
            <div class="taskbar"><button class="deleteBtn" onclick="deleteMemo()"><i class="bi bi-trash3-fill"></i></button></div>
        </li>`;
    ul.insertAdjacentHTML("afterbegin", memoCard);
});



function pinMemo(pin) {
    pin.preventDefault();
    const memoCard = 
        `<li class="memo-card">
            <header class="card-header">
                <span class="date">${date}</span><span class="title">${title.value}<span>
            </header>
            <div class="card-body-container">
                <p class="card-body">${body.value}</p>
            </div>
            <div class="taskbar"><button class="deleteBtn" onclick="deleteMemo()"><i class="bi bi-trash3-fill"></i></button></div>
        </li>`;

    let memoObj = {
        title: title.value,
        body: body.value,
        date: date
    };

    memoArray.push(memoObj);
    localStorage.setItem('memos', 
    JSON.stringify(memoArray));
    ul.insertAdjacentHTML("afterbegin", memoCard);
    document.forms[0].reset();
};

function deleteMemo() {
    const deletionTarget = event.target.closest(".memo-card");
    indexOfMemo = Array.from(ul.children).indexOf(deletionTarget);
    memoArray.splice(indexOfMemo, 1);
    localStorage.setItem('memos', JSON.stringify(memoArray));
    deletionTarget.remove();
};

function getDate(){
    let mm = new Date().toLocaleDateString("en-GB", { month: "2-digit" }).toString().slice(0, 2);
    let dd = new Date().toLocaleDateString("en-GB", { day: "2-digit" });
    let yy = new Date().getFullYear().toString().substr(-2);
    let memoDate = `${dd} <div class="bullet"></div> ${mm} <div class="bullet"></div> ${yy}`;
    return memoDate
}