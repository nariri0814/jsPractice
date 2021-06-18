/*
    1. json 파일 불러오기
    2. html파일에 리스트 넣어주기
    3. 아이템 클릭하면 필터링, 필터링된 아이템 보여주기
*/

// function loadItems() {
//     // fetch : data 받아오는 함수
//     // 성공하면 reponse 출력(불러옴)
//     return fetch('data/data.json')
//         .then(response => response.json())
//         .then(json => json.items);
// }

// function displayItems(items) {
//     const container = document.querySelector('.main_ul');
//     container.innerHTML = items.map(item => createHTMLString(item)).join('');
// }

// // 아이템리스트 넣기
// function createHTMLString(item) {
//     return `
//     <li class="main_li">
//         <a href="">
//             <img src="${item.image}" alt="${item.type}" class="li_img">
//             <div class="li_txt">
//                 <span>${item.gender}, ${item.size}</span>
//             </div>
//         </a>
//     </li>
//     `;
// }

// function onButtonClick(event, items) {
//     const dataset = event.target.dataset;
//     const key = dataset.key;
//     const value = dataset.value;

//     if(key == null || value == null) {
//         return;
//     }

//     displayItems(items.filter(item => item[key] === value));
    
// }

// function setEventListeners(items) {
//     const logo = document.querySelector('.logo');
//     const buttons = document.querySelector('.h_gnb_ul');
//     logo.addEventListener('click', () => displayItems(items));
//     buttons.addEventListener('click', event => onButtonClick(event, items));
// }

// //main
// loadItems()
//     .then(items => {
//         displayItems(items);
//         setEventListeners(items);
//     })
//     .catch(console.log);






/////////////////////////////////////////////////
// 연습

/*
    1. json 파일 불러오기
    2. html파일에 리스트 넣어주기
    3. 아이템 클릭하면 필터링, 필터링된 아이템 보여주기
*/

function loadItems() {
    return fetch('data/data.json')
        .then(response => response.json())
        .then(json => json.items);
};

function displayItems(items) {
    const container = document.querySelector('.main_ul');
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

function createHTMLString(item) {
    return `
    <li class="main_li">
        <a href="">
            <img src="${item.image}" alt="${item.type}" class="li_img">
            <div class="li_txt">
                <span>${item.gender}, ${item.size}</span>
            </div>
        </a>
    </li>
    `;
}

function onButtonClick(event, items) {
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;

    if(key == null || value == null) {
        return;
    }

    displayItems(items.filter(item => item[key] === value));
}

function setEventListeners(items) {
    const logo = document.querySelector('.logo');
    const buttons = document.querySelector('.h_gnb_ul');
    logo.addEventListener('click', () => displayItems(items));
    buttons.addEventListener('click', event => onButtonClick(event, items));
}

loadItems()
    .then(items => {
        displayItems(items);
        setEventListeners(items);
    }).catch(console.log);






