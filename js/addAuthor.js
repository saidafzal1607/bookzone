let form = document.getElementById('form');

const image_input = document.querySelector('#image_input');
let upload_image = '' ;

const author = document.getElementById('author-img');


image_input.addEventListener("change", function(){
    console.log('hee')
    const reader = new FileReader();
    reader.addEventListener("load", ()=>{
        upload_image = reader.result;
        
        author.innerHTML = `
        <img src="${upload_image}" alt=""/>
        `
    })
    reader.readAsDataURL(this.files[0]);
})


form.addEventListener('submit', function(e){
    e.preventDefault();
    let author = {
        firstName : e.target.fName.value,
        lastName : e.target.lName.value,
        date_of_birth : e.target.birth_date.value,
        date_of_death : e.target.death_date.value
    }

    async function addAuthor() {
        let res = await fetch('https://bookzon.herokuapp.com/api/authors', {
            method : 'POST',
            headers : {
                "Content-Type" : "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token"),
            },
            body: JSON.stringify(author)
        })
        let data = await res.json();
        console.log(data)

        if(data.success){
            location.pathname = '/index.html';
        }
    };
    addAuthor()
})