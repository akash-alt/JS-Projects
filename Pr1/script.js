
// var index = 0;
// function changeColors(){
//   var colors = ["red","blue","orange"]
//   document.getElementsByTagName("body")[0].
//   style.background = colors[index++]
//   if(index > colors.length - 1)
//     index = 0
// }
// changeColors()


//********************************************************* *//

//* 2nd
// const btn = document.querySelector('button');
// function random(number){
//   return Math.floor(Math.random() * (number+1))
// }
// btn.addEventListener('click',()=>{
//     const randomCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`
//     document.body.style.backgroundColor = randomCol
// })


//* 3rd
// const test = document.querySelector("test");



//******************************************************************************** *//

// const mainHeading =  document.querySelector("h2");
// const header = document.querySelector(".logo");
// const list = document.querySelectorAll(".list")

// console.log(mainHeading);
// console.log(header);
// console.log(list);

//*
// const mainHeader = document.querySelector(".mainHeading")
// console.log(mainHeader.textContent);
// mainHeader.textContent = "something else change";
// console.log(mainHeader.textContent);

//*********************************************************** *//

// const res = document.querySelector("div.main h3")
// console.log(res.style);
// res.style.color = "black"
// res.style.backgroundColor = "red";

//**************************************************** *//

// const link = document.querySelector("a")
// console.log(link.getAttribute("href"));
// link.setAttribute("href","https://www.geeksforgeeks.org/");

//***************************************************** *//

// const rootNode = document.getRootNode();
// const elementNode = rootNode.childNodes[1];
// const elementNode1 = rootNode.childNodes[2]
// console.log(elementNode);
// console.log(elementNode1.parentNode);


//**************************** Main ****************************** *//

// const res = document.querySelector(".input_submit");
// const headerColor = document.querySelector(".main");
// console.log(res);
// const res2 = res.classList.add("bg-dark")
// const res1 = res.classList.toggle("bg-dark");
// const res3 = headerColor.classList.add("bg-dark")
// console.log(res2);
// console.log(res1);
// console.log(res3);


//*********************************************************************** *//

// const todo = document.querySelector(".to_do");
// console.log(todo.innerHTML);
// todo.innerHTML +=  "<li>this is new list</li>";
// todo.innerHTML = todo.innerHTML + "<li>this is second new list</li>"


//********************************************************** *//
//* Adding functionality in the button

// const btn = document.querySelector(".learnBtn");
// console.log(btn);
// btn.onclick = function(){
//   console.log("this is clicked on button");
// }


//******************************************* *//

// const btn = document.querySelector(".learnBtn");
//* we can write this function inside of the eventlistener
// function clickMe(){
//   console.log("hello,you clicked me!!");
// }
// btn.addEventListener("click",function(){
//   console.log("you clicked me");
// })


//************************************************ *//

const btn = document.querySelectorAll(".my_button button");
// for (const buttons  of btn) {
//   buttons.addEventListener("click",(e)=>{
//     // console.log(e.currentTarget);
//     console.log(e.target.style.backgroundColor = "red")
//     e.target.style.backgroundColor = "blue"
//     e.target.style  = "teal"
//   })
// }

//* method - 2

// btn.forEach(buttons=>{
//   buttons.addEventListener("click",(e)=>{
//       e.target.style.backgroundColor = "red";
//       e.target.style.backgroundColor = "blue";
//       e.target.style.backgroundColor = "green"
//   })
// })

//******************************************************** *//

fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => {
  if(response.ok){
      return response.json()
  }
  else{
    throw new Error("something went wrong!!")
  }
}
   )
.then(data => console.log(data))
.catch((error)=>{
  console.log(error);
})









