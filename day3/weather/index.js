// API = "a52e8b83a5d10447872f17072444c7ce";
// url = `api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API}`;


console.log("Hello World!");

async function handleOn() {
    const city = document.getElementById("inp").value;
    try {
        const res2 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=a52e8b83a5d10447872f17072444c7ce`);
        const res = await res2.json();
        console.log(res);
        console.log(res.list[0].weather[0].description);
        showData(res);
    }
    catch(err) {
        console.log(err);
    }
}

// handleOn();

function showData(data) {
    // var heading = document.createElement("h1");
    // heading.innerText = data.city.name;
    // contain.append(heading);
    
    // var discription = document.createElement("p");
    // discription.innerText = data.list[0].weather[0].description;
    // contain.append(discription);
    
    var contain = document.getElementById("forcast");
    var gmap_canvas = document.getElementById("gmap_canvas");
    const add = `<div>
    <h2>City: ${data.city.name}</h2>
    <h1>Country: ${data.city.country}</h1>
    <h3>Population: ${data.city.population}</h3>
    <h3>Temperature: ${(data.list[0].main.temp)-273.15} deg</h3>
    <h3>Humidity: ${data.list[0].main.humidity}</h3>
    <p>Description: ${data.list[0].weather[0].description}</p>
    </div>`;
    contain.innerHTML = add;
    gmap_canvas.src = `https://maps.google.com/maps?q=${data.city.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
    
    success(data);
    // append(data)
    
}

