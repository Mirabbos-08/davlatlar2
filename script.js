const btn = document.getElementById("btn");
const ota = document.getElementById("ota");
const input = document.getElementById("input");
const select = document.getElementById("continent");

let countries = [];

async function getFlags() {
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    const flag = await response.json();
    bayroqChizish(flag);
    countries = flag;
}
getFlags()
function bayroqChizish(malumot) {
    console.log(malumot);
    ota.innerHTML = ``;
    malumot.forEach(element => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.onclick=function(){
            window.location.href="./inner.html";
            const tanlangan=countries.filter(e=> e.name.common==this.children[1].textContent)[0];
            localStorage.setItem("davlat",JSON.stringify(tanlangan));
        }
        div.innerHTML = `
          <img src="${element.flags.svg}" alt="as">
            <h2>${element.name.common}</h2>
        `
        ota.appendChild(div);
    });
}

input.addEventListener("input", () => {
    const filteredArray = countries.filter((e) =>
        e.name.common.toLowerCase().includes(input.value.toLowerCase())

    );
    bayroqChizish(filteredArray);
});
select.addEventListener("input", () => {
    if(select.value=="All"){
     bayroqChizish(countries)
    }else{
        const filteredArray = countries.filter((e) =>
            e.region.toLowerCase().includes(select.value.toLowerCase())
    
        );
        bayroqChizish(filteredArray);

    }
})


