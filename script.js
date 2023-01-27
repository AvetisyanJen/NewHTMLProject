const aside = document.querySelector(".aside")
const CategoryDiv = document.querySelector(".category-nav")
const FeatureDiv = document.querySelector(".Featured-nav")
const article = document.querySelector(".article")
const cartNume = document.querySelector(".cartNum")
const cart = document.querySelector(".fa-shopping-cart")
const input = document.querySelector(".search")

fetch('https://fakestoreapi.com/products/categories')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data.forEach(element => {

            const h3 = document.createElement("h3")
            h3.classList.add("categorys-style")
            h3.innerHTML = element
            CategoryDiv.append(h3)
        })
    }
    )

async function fetchStoreJSON() {
    const response = await fetch('https://fakestoreapi.com/products?limit=4');
    const data = await response.json();
    return data
}
fetchStoreJSON().then(data => {
    data.forEach(element => {
        const div = document.createElement("div")
        const txtDiv = document.createElement("div")
        const img = document.createElement("img")
        const h4 = document.createElement("h4")
        const price = document.createElement("h4")
        div.classList.add("FeaduredContainer")
        img.classList.add("Featuredimg")
        img.src = element.image
        h4.innerHTML = element.title
        price.innerHTML = element.price + "$"
        FeatureDiv.append(div)
        div.append(img, txtDiv)
        txtDiv.append(h4, price)
    })

});

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        let product = data.slice(5, 10)
        console.log(product)
        product.forEach(element => {
            console.log(element)
            const div = document.createElement("div")
            const img = document.createElement('img')
            const h4 = document.createElement('h4')
            const h4Price = document.createElement('h4')
            const button = document.createElement('button')
            button.textContent = "Add to Cart"
            button.classList.add("product-add-button")
            img.src = element.image
            h4.innerHTML = element.title
            h4Price.innerHTML = element.price + "$"
            h4.classList.add("h4")
            h4Price.classList.add("h4Price")
            img.classList.add("fgcptIMG")
            div.classList.add("divFigure")
            img.setAttribute('width', 200)
            img.setAttribute("height", 200)
            let w = img.getAttribute('width')
            let h = img.getAttribute("height")
            console.log(w, h)
            article.append(div)
            div.append(img, h4, h4Price, button)
            button.addEventListener("click", function () { addToCart(element) })
            img.addEventListener("click", function () { resize(img) })


        })
        input.addEventListener("change", function () { search(product) })

    })



function search(product) {
    console.log(product)
    let val = input.value
    console.log(val)
    let data = product.filter(el => el.title.startsWith(val) && val != "")
    console.log(data)
    localStorage.setItem("product", JSON.stringify(data))
    location.href = "search.html"
}


function random(a) {
    return Math.round(Math.random() * a)
}
setInterval(function () {
    const sale = document.querySelector(".sale")

    sale.style.left = random(100) + "%"

    sale.style.position = "absolute"

}, 500)

//     function resize(img){

//      let w=img.getAttribute('width')
//             let h=img.getAttribute("height")
//             console.log(w,h)
//  	if(w==200 && h==200){
//  		img.setAttribute('width',300)
//  		img.setAttribute("height",300)
//  	}
//  	else{

//         img.setAttribute('width',200)
//  		img.setAttribute("height",200)
//  	}
//  	img.style.transition='.5s'
//  }


function addToCart() {
    cartNume.classList.add("cartNum-active")
    cartNume.innerHTML++
    // Swal.fire({
    //     text: 'Added to cart',
    // })
}


