// buttons hover 
const buttons = document.querySelectorAll('.button');

buttons.forEach(item => {
    item.onmouseover= () => {
        item.classList.add('active');
        item.firstElementChild.classList.add('active');
    }
    item.onmouseout = () => {
        item.classList.remove('active');
        item.firstElementChild.classList.remove('active');
    }
})

// buttonClose 
// const buttonClose = document.querySelector('.buttonClose')

// buttonClose.addEventListener('click', () => {
//     buttons.classList.add('remove')
// })
document.querySelector('.buttonAdd').addEventListener('click', () => {
    let keys = Object.keys(localStorage);
    let titleData = document.querySelector('.cardTitle').value;
    let discData = document.querySelector('.cardTitle').value;
	let myJSON = JSON.stringify({title: titleData,disc: discData});
	localStorage.setItem(keys.length, myJSON);
    allStorage()
})

function allStorage() { 
    let keys = Object.keys(localStorage);
    let i = keys.length;
    let div = document.createElement("div"); //div
    let titleTag = document.createElement("h1"); //h1
    let discTag = document.createElement("p"); //p
    while ( i-- ) {
        let cards = document.querySelector('.cards');
        let data = JSON.parse(localStorage.getItem(keys[i]));


        div.classList.add('card');

        let titleText = document.createTextNode(data.title)
        titleTag.appendChild(titleText);

        let discText = document.createTextNode(data.disc)
        discTag.appendChild(discText);

        div.appendChild(titleTag) //div h1 p
        div.appendChild(discTag)

        cards.appendChild(div)
    }
}

allStorage()