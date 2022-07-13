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



// LocalStorage SaveData

document.querySelector('.buttonAdd').addEventListener('click', () => { //Save Data In LocalStorage
    let keys = Object.keys(localStorage);
    let data = localStorage.getItem('cards') ? localStorage.getItem('cards') : '';
    let titleData = document.querySelector('.cardTitle').value;
    let discData = document.querySelector('.cardDisc').value;
    let linkData = document.querySelector('.link').value;
	let myJSON = JSON.stringify( {title: titleData, disc: discData, link: linkData});
    let testJSON = data + '|' + myJSON;
	localStorage.setItem('cards', testJSON);
    addCard(titleData, discData, linkData);
    
})

function addCard(title, disc, link) {  //Create Card When You Click Button
    let div = document.createElement("div");
    let titleTag = document.createElement("h1");
    let discTag = document.createElement("p");
    let cards = document.querySelector('.cards');
    let buttonTextTag = document.createElement("p");
    let aTag = document.createElement("a");
    let buttonTag = document.createElement("div");
    let titleText = document.createTextNode(title);
    let discText = document.createTextNode(disc);
    let linkData = document.createTextNode(link);
    let buttonText = document.createTextNode('link');

    buttonTag.classList.add('linkButton');
    buttonTextTag.appendChild(buttonText)
    buttonTag.appendChild(buttonTextTag);
    aTag.appendChild(buttonTag);

    div.classList.add('card');
    titleTag.appendChild(titleText);
    discTag.appendChild(discText);
    div.appendChild(titleTag);
    div.appendChild(discTag);
    div.appendChild(aTag); 

    cards.insertBefore(div, cards.children[1]);
}

function allStorage() { //Get All Data From LocalStorage
    if (localStorage.getItem('cards') === null) return '';

    let data = localStorage.getItem('cards').split('|');
    data.splice(0, 1);
    return data;
    
}

function addCards() { 
    let keys = Object.keys(localStorage);
    for (card of allStorage()) {     
        let cardData = JSON.parse(card)

        let div = document.createElement("div");
        let titleTag = document.createElement("h1");
        let discTag = document.createElement("p");
        let buttonTextTag = document.createElement("p");
        let aTag = document.createElement("a");
        let buttonTag = document.createElement("div");
        let cards = document.querySelector('.cards');
        let titleText = document.createTextNode(cardData.title); 
        let discText = document.createTextNode(cardData.disc); 
        let linkText = document.createTextNode(cardData.link); 
        let buttonText = document.createTextNode('link');

        aTag.href = linkText;

        div.classList.add('card');
        buttonTag.classList.add('linkButton');
        buttonTextTag.appendChild(buttonText)
        buttonTag.appendChild(buttonTextTag);
        aTag.appendChild(buttonTag);
        titleTag.appendChild(titleText)
        discTag.appendChild(discText);
        div.appendChild(titleTag); 
        div.appendChild(discTag); 
        div.appendChild(aTag); 
    
        cards.insertBefore(div, cards.children[1]);
    }
}

addCards(); 