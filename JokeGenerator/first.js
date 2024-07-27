let URL="https://v2.jokeapi.dev/joke/Any?type=single";
const factpara=document.querySelector("#fact");

const btn=document.querySelector("#btn");


const getfact= async()=>{
    console.log("fetchinng data...");
    let response= await fetch (URL);
    console.log(response);
    let data = await response.json();
    factpara.innerText=data.joke;
}
btn.addEventListener("click",getfact);