    
const ul = document.getElementById("memo-library-container");
const body = document.getElementById("body");
const title = document.forms["memo-form"]["title"];
let date = getDate();

let memoArray = localStorage.getItem('memos') ?
JSON.parse(localStorage.getItem('memos')) : [];

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
    ul.insertAdjacentHTML("afterbegin", memoCard);
}    


function getDate(){
    let mm = new Date().toLocaleDateString("en-GB", { month: "2-digit" }).toString().slice(0, 2);
    let dd = new Date().toLocaleDateString("en-GB", { day: "2-digit" });
    let yy = new Date().getFullYear().toString().substr(-2);
    let memoDate = `${dd} <div class="bullet"></div> ${mm} <div class="bullet"></div> ${yy}`
    return memoDate
}

