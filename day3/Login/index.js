console.log("Hello world!");

async function handleOn() {
    var emailinput = document.getElementById("emails").value;
    var passinput = document.getElementById("pass").value;
    try {
        var data = await fetch(`https://reqres.in/api/login`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: emailinput,
                password: passinput
            })
        });
        var res = await data.json()
        console.log(res);

    }
    catch(err) {
        console.log(err);
    }
}