
const faqs = document.querySelectorAll(".faq");

const res =  faqs.forEach(faq=>{
  faq.addEventListener("click",()=>{
    faq.classList.toggle("active")
    console.log("click");
  })
})

