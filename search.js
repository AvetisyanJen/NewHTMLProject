let Product=localStorage.getItem("product")
if(Product){
	Product=JSON.parse(Product)
	console.log(Product)
}


Product.length!==0 ?Product.forEach(i=>{
let div=document.createElement("div")
let img=document.createElement("img")
let h1=document.createElement("h1")
let h2=document.createElement("h2")
let p=document.createElement("p")
let h3=document.createElement("h3")
img.src=i.image
h1.innerHTML=i.title
h2.innerHTML=i.category
p.textContent=i.description
h3.innerText=i.price+"$"
document.body.append(div)
div.append(img,h1,h2,p,h3)
}):(document.body.append(document.createElement("h1").innerHTML="Product not found"))
