let user = JSON.parse(localStorage.getItem("user"))
console.log(user.firstName)
let avatar = document.querySelector('.nav__avatar');
let dropdown = document.querySelector('.dropdown');
avatar.addEventListener('click', function(){
    if(!dropdown.hasChildNodes()){
        dropdown.innerHTML = `
        <h2 class="user-name">${user.firstName}</h2>
        <h2 class="lastName">${user.lastName}</h2>
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
