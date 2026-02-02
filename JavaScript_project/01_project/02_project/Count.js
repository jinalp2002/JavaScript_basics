let number = 0;

function countNum() {
  const incBtn = document.getElementById("increase");
  const decBtn = document.getElementById("decrease");
  const display = document.getElementById("plus");
  const reset = document.getElementById("reset")

  incBtn.addEventListener("click", () => {
    if (number<20) {
      number++;
    display.innerText = number;
    }
    
  });

  decBtn.addEventListener("click", () => {
      if (number>0) {
            number--;
    display.innerText = number;
      }
    
  });

  reset.addEventListener("click",()=>{
      number=0;
      display.innerText = number;
  })
}

countNum();
