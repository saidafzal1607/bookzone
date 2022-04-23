let register = document.getElementById('form');
let button  = document.querySelector('.nav__btn');
button.addEventListener('click', function(){
    location.pathname = '/signUp.html'
})
console.log(register)
register.addEventListener('submit', function(e){
    e.preventDefault()
    let user = {
        email : e.target.email.value,
        password : e.target.parol.value,
    }
    
    async function enterUser(){
        const res = await fetch('https://bookzon.herokuapp.com/api/login', {
            method: 'POST',
            headers :{'Content-Type':'application/json',},
            body: JSON.stringify(user)
        })
        const data = await res.json();
        console.log(data.user)
        if(data.success){
            localStorage.setItem("token", JSON.stringify(data.token))
            localStorage.setItem("user", JSON.stringify(data.user))
            location.pathname = '/index.html'
        }
        else if(data.msg){
            Swal.fire({
                icon: 'error',
                title: 'email or password is incorrect',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
            })
        }
    }
    enterUser()
})



