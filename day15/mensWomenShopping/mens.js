handleOn();
async function handleOn() {
    try {
        const data = await fetch(`http://localhost:3000/mensData`);
        const res = await data.json();
        console.log(res);
        showData(res);
        console.log(res);
        console.log(JSON.parse(localStorage.getItem("addCart")));
        console.log("cartCount");
    }catch {
        console.log("Something went wrong!");
    }
}

var count = 0;
var arr = [];

// showData();
function showData(data) {
    data.map((elem) => {
        var container = document.getElementById("mainContainer");
        
        var div = document.createElement("div");
        var image = document.createElement("img", "src", elem.image_url);
        image.setAttribute("src", elem.image_url);
        image.setAttribute("alt", elem.id);
        
        var headings = document.createElement("h2");
        headings.innerText = elem.name;
        
        var priceBox = document.createElement("div");
        var price = document.createElement("h3");
        price.innerText = `$ ${elem.price}`;
        
        var strikePrice = document.createElement("h5");
        strikePrice.innerText = elem.strikedoffprice;
        
        priceBox.append(price, strikePrice);
        
        var cartBtn = document.createElement("button");
        cartBtn.innerText = "Add to Cart";
        cartBtn.addEventListener("click", greet => {
            console.log("Hello!", elem.id);
            if(elem.id !== arr.map((e) => {
                e.id;
            })) {
                arr.push(elem);
            }
            localStorage.setItem("addCart", JSON.stringify(arr));
            count++;
            localStorage.setItem("cartCount", JSON.stringify(count));
            console.log("Cart count", count);
        });
        // cartBtn.setAttribute("class", btn);
        
        div.append(image, headings, priceBox, cartBtn);
        container.append(div);
        console.log(image);
    })



    // var mainDiv = document.createElement("div");
    // var headings = document.createElement("h2");
    // headings.innerText = data.name;
    // container.innerHTML = add;
}

// function greet() {
//     console.log("Hello!", data.id);
// }

















// var add = ``;
// var card = data.map((elem, ind) => {
// add += `<div>
//         <img scr=${elem[ind].name}></img>
//         <h2>${elem[ind].name}</h2>
//         <H3>$ ${elem[ind].price}</H3>
//         <button id="btn">Add to Cart</button>
//     </div>`
// })