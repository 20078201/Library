let myLibrary = []

const Book = (title, author, pages, isRead) => {

    const info = () => {
        return `${title} by ${author}, ${pages} and ${isRead}`
    }

    return {title, author, pages, isRead, info}
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

const bookTable = document.querySelector('#books')
const addBookBtn = document.querySelector('[data-book="add"]')

function createBookDiv(bookObj) {
    const container = document.createElement('div')
    container.classList.add('card')
    const title = document.createElement('h2')
    title.textContent = bookObj.title
    const author = document.createElement('p')
    author.textContent = bookObj.author
    const bookLength = document.createElement('p')
    bookLength.textContent = bookObj.pages
    const hasRead = document.createElement('button')
    if(bookObj.isRead){
        hasRead.textContent = "book has been read"
    } else if (!bookObj.isRead) {
        hasRead.textContent = "book has not been finished"
    }
    const removeBook = document.createElement('button')
    removeBook.textContent = 'REMOVE'

    container.append(title, author, bookLength, hasRead, removeBook)

    return container
}

addBookBtn.addEventListener('click', () => {
    const title = document.querySelector('#title')
    const author = document.querySelector('#author')
    const pages = document.querySelector('#pages')
    const isRead = document.querySelectorAll('input[type="radio"]')
    if (isRead.value === 'true' && isRead.checked) {
        isRead.textContent = 'This book has been read'
    } else if (isRead.value = 'false' && isRead.checked) {
        isRead.textContent = 'This book has not been read yet'
    }

    const userBook = createBookDiv(Book(title.textContent, author.textContent, pages.textContent, 
        isRead.textContent)) 
    
    myLibrary.push(userBook)
    bookTable.append(userBook)
})









