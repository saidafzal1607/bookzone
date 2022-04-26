let form = document.getElementById('form');


form.addEventListener('submit', function(e){
    e.preventDefault();
    let author = {
        firstName : e.target.fName.value,
        lastName : e.target.lName.value,
        birthDate : e.target.birth_date.value,
        deathDate : e.target.death_date.value
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
    };
    addAuthor()
})