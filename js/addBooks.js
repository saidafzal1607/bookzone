// let book = {
//     "title": "The Adventures of Tom Sawyer",
//     "description": "The Adventures of Tom Sawyer is an 1876 novel by Mark Twain about a boy growing up along the Mississippi River. It is set in the 1840s in the town of St. Petersburg, ",
//     "author": "60f0224792ce9f6d804c994f",
//     "country": "United States of America",
//     "files": "File",
//     "language": "English",
//     "link": "https://en.wikipedia.org/wiki/The_Adventures_of_Tom_Sawyer",
//     "pages": 274,
//     "year": 1876,
//     "rate": 4,
//     "price": 10.92,
//     "category": "classic | biography | science",
//     "isPublished": true
// }

// let user = JSON.parse(localStorage.getItem("user"))


let bookForm = document.getElementById('form');
bookForm.addEventListener('submit', function(e){
    e.preventDefault()
    let book = {
        title : e.target.title.value,
        pages : e.target.pages.value,
        year : e.target.year.value,
        price : e.target.price.value,
        country: e.target.country.value,
        author:e.target.author.value,
        description : e.target.description.value
    }
    console.log(book)

    async function addBooks(){
        const res = await fetch('https://bookzon.herokuapp.com/api/books',{
            method :'POST',
            headers:
            {
                "Content-Type":"application/json",
                "Authorization": "Bearer " + localStorage.getItem("token"),

            },
            body: JSON.stringify(book),
        });
        const data = await res.json();
        console.log(data)
        

    }
    addBooks()
})


