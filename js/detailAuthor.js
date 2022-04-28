let id = localStorage.getItem("id");
console.log(id)

async function getAuthor(){
    // let main = document.querySelector('.wrapper-main');
    // let html = '';
    let res = await fetch(`https://bookzon.herokuapp.com/api/authors/${id}`);
    let data = await res.json();
    // console.log(data.payload.firstName)

    // html = `
    // <div class="row">
    // <div class="col-1">
    //     <img src="./images/writers/o'tkir.png" alt="" class="author-img">
    //     <div class="date">
    //         <div class="birth">
    //             <p>Tavallud sanasi</p>
    //             <h3 class="birth-date ">${new Date(data.payload.date_of_birth).getFullYear()}</h3>
    //             <p>Toshkent,Uzbekistan</p>
    //         </div>
    //         <div class="death">
    //             <p>Vafot sanasi</p>
    //             <h3 class="death-date">${new Date(data.payload.date_of_death).getFullYear()}</h3>
    //             <p>Toshkent,Uzbekistan</p>
    //         </div>
    //     </div>
    // </div>
    // <div class="col-2">
    //     <h1 class="name">${data.payload.firstName}<br/>${data.payload.lastName}</h1>
    //     <p class="description">
    //         Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique praesentium voluptatibus enim doloribus, rem ipsa quos magni nihil autem dolores voluptas quasi aliquid perferendis debitis incidunt quisquam explicabo nostrum? Quis possimus reprehenderit, soluta assumenda et deserunt odit mollitia facilis nesciunt. Vitae quaerat numquam inventore quia cum. Maxime totam debitis fugiat, minus ad adipisci laborum recusandae exercitationem accusantium delectus nemo voluptatem consequuntur officiis harum voluptatum id nobis ipsam aspernatur non impedit.
    //     </p>
    //     <h4 class="commit">
    //         Ijod
    //     </h4>
    //     <p class="definition">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quisquam culpa vitae asperiores repellat nihil quae perferendis, hic tempore repudiandae iure consequatur quaerat doloremque reprehenderit.
    //     </p>
    //     <div class="own-books">
    //         <div class="books-head">
    //             <h1 class="head-title">Asarlari</h1>
    //             <p class="full-books">Barchasini ko'rish</p>
    //         </div>
    //         <div class="wrapper-books">
                
    //         </div>
    //     </div>
    // </div>
    // </div>
    // `
    // main.innerHTML = html
    
    
}

getAuthor()



async function ownBooks(){
    let res = await fetch(`https://bookzon.herokuapp.com/api/books/author/${id}`);
    let data =await res.json();

    let wrapper = document.querySelector('.wrapper-books');
    let html = '';


    data.payload.forEach(item => {
        html += `
        <div class="card">
        <img src="./images/books/dunyoning-ishlari.png" alt="" class="card-img">
        <h3 class="book-name">${item.title}</h3>
        <p class="price-book">${item.price}</p>
        </div>
        `

        wrapper.innerHTML = html
    });

}

ownBooks()