


function addData(){
      let inputbox=document.getElementById("myinput");
      let mylist=document.getElementById('mylist')



      
      if(inputbox.value == ""){
            alert("Please add data")
      }else{
            let newelement=document.createElement('ul')
            newelement.innerHTML= `${inputbox.value} <i class="fa-solid fa-trash"></i>`
      
            mylist.appendChild(newelement)
            inputbox.value=""

            newelement.querySelector('i').addEventListener("click",()=>{
                  newelement.remove()
            })
      }
}













