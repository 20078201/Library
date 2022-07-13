let myLibrary = []

function Book(title, author, pages, isRead) {
    //The constructor
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} and ${this.isRead}`
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

const hobbit = new Book('The Hobbit', "JJ Reddick", "256", "Read")
const fastAndFurious = new Book('Fast and Furious', "Vin diesel", "256", "Read")
const crawlDad = new Book('Where The Crawl Dad Sing', "Veuil Owens", "200", "Read")
const warHammer = new Book('War Hammer - Seige of Tower', "Kurt James", "556", "Not Read")
const harryPotter = new Book('Harry Potter', "R,R Martin", "656", "Not Read")
const powerRanger = new Book('Power Ranger - Jump Force', "Rick Sanzesh", "156", "Not Read")
const bleach = new Book('Bleach', "Kubo", "1000", "Read")
const naruto = new Book('Naruto', "Abe Shinji", "256", "Read")
const vigor = new Book('Vigor', "JJ Martin", "456", "Read")
const musashi = new Book('The last bar', "AJ Martin", "377", "Read")

myLibrary.push(hobbit, fastAndFurious, crawlDad, warHammer, harryPotter, powerRanger, bleach, naruto, vigor, musashi)

const bookTable = document.querySelector('#books')

for (const key in myLibrary) {
    const row = document.createElement('tr')
    const book = myLibrary[key]
    for (const property in book) {
        if (book.hasOwnProperty(property)) {
            const td = document.createElement('td')
        td.textContent = book[property]
        row.append(td)
        }   
    }
    bookTable.append(row)
}







