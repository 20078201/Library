let myLibrary = []
const bookTable = document.querySelector('#books')
const addBookBtn = document.querySelector('[data-book="add"]')

const Book = (title, author, pages, isRead) => {

    const info = () => {
        return `${title} by ${author}, ${pages} and ${isRead}`
    }

    return {title, author, pages, isRead, info}
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

function remove(array, ...inputs) {
    return array.filter(v => {
        return !inputs.includes(v)
    })
}

function update() {
    // Clear the screen
    while (bookTable.firstChild) {
        bookTable.removeChild(bookTable.firstChild)
    }
    
    // remake the cards and display it on the screen
    myLibrary.forEach(book => {
        const newCard = createBookDiv(book)
        bookTable.append(newCard)
    })
}

function createBookDiv(bookObj) {
    const container = document.createElement('div')
    container.classList.add('card')

    const cardHeader = document.createElement('div')
    cardHeader.classList.add('card-header')

    const title = document.createElement('h2')
    title.textContent = bookObj.title

    const author = document.createElement('p')
    author.textContent = bookObj.author

    const bookLength = document.createElement('p')
    bookLength.textContent = bookObj.pages

    cardHeader.append(title)
    cardHeader.append(author)
    cardHeader.append(bookLength)

    // hasRead
    const hasRead = document.createElement('button')
    hasRead.classList.add('card-button')
    if (bookObj.isRead === 'true'){
        hasRead.textContent = "Read"
        hasRead.setAttribute('data-read', 'true')
    } else if (bookObj.isRead === 'false') {
        hasRead.textContent = "Not Read"
        hasRead.setAttribute('data-read', 'false')
    }
    
    hasRead.addEventListener('click', () => {
        const read = hasRead.getAttribute('data-read')
        if (read === 'true') {
            hasRead.setAttribute("data-read", false)
        } else if (read === 'false') {
            hasRead.setAttribute("data-read", true)
        }
    })

    
    const removeBook = document.createElement('button')
    removeBook.textContent = 'REMOVE'
    removeBook.classList.add('card-button')
    removeBook.classList.add('remove-book')

    removeBook.addEventListener('click', () => {
        // Remove element from array
        myLibrary = remove(myLibrary, bookObj)
        // update
        update()
    })

    container.append(cardHeader, hasRead, removeBook)


    return container
}

addBookBtn.addEventListener('click', () => {
    const title = document.querySelector('#title')
    const author = document.querySelector('#author')
    const pages = document.querySelector('#pages')
    const allRadioButtons = document.querySelectorAll('input[name="isRead"]')
    let activeRadioButton;

    for (let i = 0; i < allRadioButtons.length; i++) {
        if (allRadioButtons[i].checked === false) continue
        activeRadioButton = allRadioButtons[i];
    }   
  
    if (title.value === "" || author.value === "" || pages.value === "") {
            alert("You need to fill the form")
            return
    } 

    if (pages.value <= 0) {
        alert("The page number can't be less than 0")
        return
    }


    // Create new book object
    const newBook = Book(title.value, author.value, pages.value, activeRadioButton.value)
    myLibrary.push(newBook)

    // Reset the inputs
    title.value = ''
    author.value = ''
    pages.value = ''

    update()
})








