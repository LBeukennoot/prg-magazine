window.addEventListener('load', init)

//declaring of global vars
let currentBook;
let currentBookImg;
let bookList;
let apiUrl = 'webservice/index.php';
let webserviceURLdetails;
let bookInfo;

function init() {
    //add event listener to list
    bookList = document.getElementById('book-list');
    bookList.addEventListener('click', bookClickHandler);
    //start function to get books
    ajaxRequest(apiUrl, getBookItemsSuccesHandler);
}

//getting the information from the json file (this function is used twice)
function ajaxRequest(url, successHandler) {
    fetch(url)
        .then((response) => {
            if(!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(successHandler)
        .catch(ajaxErrorHandler);
}

function getBookItemsSuccesHandler(data) {
    //empty list to be sure no weird private data is in it lol
    bookList.innerHTML = "";

    //go trough the array and get all the information
    for(let item of data) {
        //create card element
        let card = document.createElement('div');
        card.classList.add('card');
        //adding class if book already was added to favorite
        if (localStorage.getItem(item.id) == 'true') {
            card.classList.add('favorite');
        }

        //create img element
        let img = document.createElement('img');
        img.src = item.img;
        img.classList.add('cover');
        //saving id from array into html to get back later in code
        img.dataset.index = item.id;
        img.dataset.name = item.name;
        img.dataset.img = item.img;
        card.appendChild(img);

        //create title element
        let title = document.createElement('h2');
        title.innerHTML = item.name;
        card.appendChild(title);

        //create author element
        let author = document.createElement('p');
        author.innerHTML = item.author;
        card.appendChild(author);

        //create favorite button element
        let favorite = document.createElement('button');
        //bla
        if (localStorage.getItem(item.id) == 'true') {
            favorite.innerHTML = "Verwijder Favoriet";
        } else {
            favorite.innerHTML = "Favoriet";
        }
        favorite.id = 'favorite';
        favorite.dataset.index = item.id;
        card.appendChild(favorite);

        //'print' the card
        bookList.appendChild(card);
    }
}

//handling everything when you clicked on a book
function bookClickHandler(e) {
    e.preventDefault();

    //getting id from e
    let card = e.target;
    let bookIndex = card.dataset.index;
    currentBookImg = card.dataset.img;
    currentBook = card.dataset.name;

    //checking where is clicked
    if(e.target.nodeName == 'IMG') {
        //if clicked on image? get book extra info!
        apiUrlDetails = 'webservice/index.php?id=' + bookIndex;
        ajaxRequest(apiUrlDetails, getBookDataSuccessHandler);

    } else if (e.target.nodeName == 'BUTTON') {
        //if clicked on favorite? check if already in favorite!
        if (e.target.parentElement.classList.contains('favorite')) {
            //already in favorite so remove it
            localStorage.setItem(bookIndex, false);
            e.target.parentElement.classList.remove('favorite');
            e.target.innerHTML = "Favoriet";
        } else {
            //not yet in favorite so add it
            localStorage.setItem(bookIndex, true);
            e.target.parentElement.classList.add('favorite');
            e.target.innerHTML = "Verwijder favoriet";
        }
    }
}

//getting the book info and putting it into html
function getBookDataSuccessHandler(data) {
    let tags = capitalizeFirstLetter(data.tags.join(", "));

    let infoImg = document.getElementById('info-img');
    infoImg.classList.add('info-cover');
    infoImg.src = currentBookImg;
    infoImg.alt = 'hoi';

    let infoTitle = document.getElementById('info-title');
    infoTitle.innerHTML = currentBook;

    let infoText = document.getElementById('info-text');
    infoText.innerHTML = data.description;

    let infoTags = document.getElementById('info-tags');
    infoTags.innerHTML = 'Tags: ' + tags;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

//error handler, very handy
function ajaxErrorHandler(data) {
    console.log(data);

    bookList.innerHTML = "";

    const element = document.createElement('list');
    element.innerText = "Er is iets mis gegaan bij het ophalen van de boeken, waarschijnlijk heeft iemand ze laten vallen...";
    bookList.appendChild(element);
}