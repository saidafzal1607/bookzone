let user = JSON.parse(localStorage.getItem("user"))
console.log(user.firstName)



async function getAuthors(){
    let wrapper = document.querySelector('.categories__wrapper-card');
    let res = await fetch('https://bookzon.herokuapp.com/api/authors');
    let data = await res.json();
    
    
    let html = '';
    for(let item of data.payload){
        html += `
        <div id="${item._id}" onClick="getDetail(event)"  class="categories__card">
        <img class="author__img" src="./images/writers/behbudiy.png" alt="dunyoning ishlari" >
        <h4 class="author__title">${item.firstName} <br/> ${item.lastName}</h4>
        <p class="author__date">${new Date(item.date_of_birth).getFullYear()}-${new Date(item.date_of_death).getFullYear()}</p>
        
        </div>
        ` 
        console.log(item._id, item)

        wrapper.innerHTML = html
        

    }
}

function getDetail(event){
    console.log(event.path[1].id)
    let id = event.path[1].id;
    localStorage.setItem("id", id);
    location.pathname = '/detailAuthor.html';
}


getAuthors()




let avatar = document.querySelector('.nav__avatar');
let dropdown = document.querySelector('.dropdown');
avatar.addEventListener('click', function(){
    if(!dropdown.hasChildNodes()){
        dropdown.innerHTML = `
        <h2 class="user-name">${user.firstName}</h2>
        <h2 class="lastName">${user.lastName}</h2>
        <a style="padding:0 10px; color:black; font-size:16px; font-weight:900;"  href="/signUp.html">chiqish =></a>
        `

    }
    else{
        dropdown.innerHTML = ''
    }
    

    
})


// async function getUser(){
//     const res = await fetch('https://bookzon.herokuapp.com/api/users');
//     const data =  await res.json();
//     console.log(data)
// }

// getUser()
