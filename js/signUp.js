let register = document.querySelector('.form');

let button = document.querySelector('.nav__btn');
button.addEventListener('click', function(){
    location.pathname = '/signIn.html'
})
// let navBtn = document.querySelector('.nav__btn');
// navBtn.addEventListener('click', function(e){
//     e.preventDefault()
//     console.log(location)
//     location.pathname === '/signIn.html'
// })

// navBtn.addEventListener('click', function(){
    
//     location.pathname === '/signIn.html';
// })
const url = 'https://bookzon.herokuapp.com/api/'


register.addEventListener('submit', function(e){

    e.preventDefault()
    let error = document.getElementById('msg');
    if(e.target.parol.value !== e.target.parol2.value){
        error.innerHTML = 'second password is false'
        error.style.color = 'red' 
        return
    }
    let user = {
        email: e.target.email.value,
        password: e.target.parol.value,
        firstName: e.target.fName.value,
        lastName: e.target.lName.value,
        phone: e.target.tell.value,
    }

    async function postRegister(){
        const res = await fetch('https://bookzon.herokuapp.com/api/sign-up',{
            method: 'POST',
            headers:{'Content-Type':'application/json',},
            body:JSON.stringify(user)
        })
        const data = await res.json();
        console.log(data.user)
        if(data.success){
            localStorage.setItem("token", JSON.stringify(data.token))
            localStorage.setItem("user", JSON.stringify(data.user))
            location.pathname = '/index.html'

        }
        else if(typeof(data.msg) === 'string'){
            Swal.fire({
                icon: 'error',
                title: 'you have already registired',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
            })
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
            })
        }
    }

    postRegister()

    // fetch ('https://bookzon.herokuapp.com/api/sign-up', {
    //     method:'POST',
    //     headers:{'Content-Type':'application/json',
    //                },
    //     body:JSON.stringify(user)
    // })
    // .then(res=>res.json())
    // .then(data=>console.log(data.token))
    // .catch(err=>console.log(err))
    
    // if(data.success){
    //     localStorage.setItem("token",data.token);
    //     Swal.fire({
    //         icon: 'success',
    //         title: 'successfully task',
    //         text: 'all of them true!',
    //         footer: '<a href="">Why do I have this issue?</a>'
    //     })
    // }else{
    //     Swal.fire({
    //         icon: 'error',
    //         title: 'Oops...',
    //         text: 'Something went wrong!',
    //         footer: '<a href="">Why do I have this issue?</a>'
    //     })
    // }

    // console.log(data)
    
})