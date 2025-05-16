const paragraph=document.querySelector("p");
const button=document.querySelector("button");
const generate=(lenght)=>{
   let otp="";
   for(let i =0; i < lenght; i++){
    otp+=Math.floor(Math.random() *10)
   }
   return otp;
}
button.addEventListener("click",()=>{
    const otp=generate(4)
    paragraph.innerText=otp;
})