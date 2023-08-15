    
const ul = document.getElementById("memo-library-container");
let body = document.getElementById("body");
let title = document.forms["memo-form"]["title"];

let date = getDate();

let memoArray = localStorage.getItem('memos') ?
JSON.parse(localStorage.getItem('memos')) : [];


memoArray.forEach(({ date, title, body }) => {
    const memoCard = 
        `<li class="memo-card">
            <header class="card-header">
                <span class="date">${date}</span><span class="title">${title}<span>
            </header>
            <div class="card-body-container">
                <p class="card-body">${body}</p>
            </div>
        </li>`;
    ul.insertAdjacentHTML("afterbegin", memoCard);
});

document.getElementById("clearBtn").addEventListener("click", () => {
    localStorage.clear();
    ul.innerHTML = ``;
    memoArray = [];
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
        </li>`;

    let memoObj = {
        title: title.value,
        body: body.value,
        date: date,
    };

    memoArray.push(memoObj);
    localStorage.setItem('memos', 
    JSON.stringify(memoArray));
    ul.insertAdjacentHTML("afterbegin", memoCard);
    document.forms[0].reset();
};

function getDate(){
    let mm = new Date().toLocaleDateString("en-GB", { month: "2-digit" }).toString().slice(0, 2);
    let dd = new Date().toLocaleDateString("en-GB", { day: "2-digit" });
    let yy = new Date().getFullYear().toString().substr(-2);
    let memoDate = `${dd} <div class="bullet"></div> ${mm} <div class="bullet"></div> ${yy}`
    return memoDate
};

