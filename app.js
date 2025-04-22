
let select=document.querySelector("input");
let ul=document.querySelector("ul")

select.addEventListener("change",()=>{
    let cre=document.createElement("li")
    ul.appendChild(cre)
    cre.innerText=select.value
    select.value=""
})
