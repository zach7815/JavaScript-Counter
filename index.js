const count = document.querySelector(".counter");
const increase = document.querySelector(".increase");
const decrease= document.querySelector(".decrease");
const reset = document.querySelector(".reset")
let number=0;


const changeValue = (num) => {
number += num;
   count.classList.toggle("negative", number < 0);
   count.classList.toggle("positive", number > 0);
   count.innerHTML=number;
  };
  
  increase.addEventListener('click', () => {
    changeValue(1);
  });
  
  decrease.addEventListener('click', () => {
    changeValue(-1);
  });

    reset.addEventListener("click", () => {
        count.innerHTML=0;
       count.classList.remove("negative");
       count.classList.remove("positive");
    })
