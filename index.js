const count = document.querySelector(".counter");
const increase = document.querySelector(".increase");
const decrease= document.querySelector(".decrease");
const reset = document.querySelector(".reset")
let number= 0;

increase.addEventListener("click", ()=>{
number++
 count.innerHTML=number;
 if(count.innerHTML == 0){
    count.style.color="#354853";
}
 if ( count.innerHTML > 0){
    count.style.color="green";
}
    return count

});

decrease.addEventListener("click", ()=>{
    number--
    count.innerHTML=number;
    if(count.innerHTML == 0){
        count.style.color="#354853";
    }
    if (count.innerHTML < 0){
        count.style.color="red";
    }
    return count
    });

    reset.addEventListener("click", () => {
        number = 0;
       
        count.style.color="#354853";
        return count.innerHTML=number;
    })

 