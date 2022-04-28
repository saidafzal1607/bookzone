
let bookForm = document.getElementById('form');

const select = document.getElementById('author');

select.addEventListener('select',function(e){
    console.log(e)
})


async function getAuthorsId(){
    let  html = '';
    
    let res = await fetch('https://bookzon.herokuapp.com/api/authors');
    let data = await res.json();
    for (let item of data.payload){
        html += `
            <option class="option" id="${item._id}"  value="${item._id}" >${item.firstName}</option>
        `
        select.innerHTML = html;

        
    }
    console.log(html)
}

getAuthorsId()


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
        let res = await fetch('https://bookzon.herokuapp.com/api/books',{
            method :'POST',
            headers:
            {
                "Content-Type" : "application/json",
                "Authorization" : "Bearer " + localStorage.getItem("token"),

            },
            body: JSON.stringify(book),
        });
        let data = await res.json();
        console.log(data)
        if(data.success){
            location.pathname = '/book.html'
        }
        

    }
    addBooks()
})


