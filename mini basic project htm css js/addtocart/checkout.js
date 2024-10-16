let place_order=document.getElementById("place_order");
let name=document.getElementById("name");
let city=document.getElementById("city");
let num=document.getElementById("num");
let email=document.getElementById("email");
let saddress=document.getElementById("saddress");

function placeOrder(){
      if(name.value && city.value && num.value && email.value &&
            saddress.value){
                  alert("place order succussfully");
                  window.location.href="index.html";
            }else{
                  alert("plz fill out this all fields")
            }
}



place_order.addEventListener("click", placeOrder);