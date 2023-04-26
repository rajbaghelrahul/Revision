console.log("Hello World!");

async function hello() {
  let headers = new Headers();

  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");

  headers.append("Access-Control-Allow-Origin", "http://localhost:3004");
  headers.append("Access-Control-Allow-Credentials", "true");

  headers.append("GET", "POST", "OPTIONS");
  const data = await fetch("http://localhost:3004/exercises");
  const res = await data.json();
  console.log(res);
}
hello();
