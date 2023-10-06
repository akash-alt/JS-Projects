
let pass = document.getElementById("password");
let msg = document.getElementById("message");
let str = document.getElementById("strength");

pass.addEventListener('input',()=>{
  if(pass.value.length > 0){
    msg.style.display = "block"
  }else{
    msg.style.display = "none"
  }

  if(pass.value.length < 4){
    str.innerHTML = "weak";
    msg.style.color = "red";
    pass.style.borderColor = "#ff5925"
  }
  else if(pass.value.length >= 4 && pass.value.length < 8){
    str.innerHTML = "medium";
    msg.style.color = "yellow";
    pass.style.borderColor = "yellow"
  }
  else{
    str.innerHTML = "strong";
    msg.style.color = "green";
    pass.value.borderColor = "green"
  }
  
})