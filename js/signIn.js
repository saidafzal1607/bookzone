let register = document.getElementById('form');
console.log(register)
register.addEventListener('submit', function(e){
    e.preventDefault()
    let user = {
        email : e.target.email.value,
        parol : e.target.parol.value,
    }
    console.log(user)

})



async function enterUser(){
    const res = await fetch('https://bookzon.herokuapp.com/api/login', {
        method: 'POST',
        headers :{'Content-Type':'application/json',},
        body: JSON.stringify({
        
        })
    })
    const data = await res.json();
    console.log(data)
}