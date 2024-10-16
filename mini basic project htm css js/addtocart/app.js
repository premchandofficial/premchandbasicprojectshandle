 // render variable data in body
 let renderData=document.querySelector(".renderData");
 let renderCartData=document.querySelector(".renderCartData")
 let renderCountCart=document.querySelector(".countCart")
 let line=document.querySelector(".line");

 let total_price=document.getElementById("total_price");
 let emptyCart=document.querySelector(".emptyCart");
 let cItems=document.querySelector(".cItems");

 let emptyC=false;

 let arr=[];
 let calculateTotal=[];
 let decreaseTotal=[];
 let tContainer=document.querySelector(".tContainer");
 


// get data from api

async function getData(){
   const res=await fetch("https://fakestoreapi.com/products")
   const data=await  res.json(); 
   //console.log(data)
   data.map((ele)=>{
     
      let productMainDiv=document.createElement("div"); // main div for child tags
      let createImgele=document.createElement("img");   // img tag
      let createTitle=document.createElement("p")      // p tag product title description
      let createPriceEle=document.createElement("p");  // p tag for price
      let btnEle=document.createElement("button")      // button tag for add to cart 

      let btnText=document.createTextNode("Add to Cart")
      let createPriceText=document.createTextNode(`Price : $${ele.price}`);
      let createTextTitle=document.createTextNode(`${ele.title.slice(0,35)}...`);
            // set src attribute for recieve img from api
      createImgele.setAttribute("src",ele.image);
        // set class attribute for styling images and main div
      createImgele.setAttribute("class", "myImages")
      productMainDiv.setAttribute("class", "box-main")
      createTitle.setAttribute("class", "productTitle")
      createPriceEle.setAttribute("class", "price-element")
      btnEle.setAttribute("class", "btn-element")
          // append textnode in tags p,p,button etc
      createTitle.appendChild(createTextTitle)
      createPriceEle.appendChild(createPriceText)
      btnEle.appendChild(btnText)
      //append child elements in main div  for better styling
      productMainDiv.appendChild(createImgele)
      productMainDiv.appendChild(createTitle)
      productMainDiv.appendChild(createPriceEle)
      productMainDiv.appendChild(btnEle)


      renderData.appendChild(productMainDiv)

      
       // add to cart functionality in pure javaScript 
      function addtocart(img,price){
           // creating once again elements and class for addtocart functionality;
           
          // arr.push({ii:img, pp:price})
           //alert("Product added cart")
           //console.log(arr)
           //console.log(arr.length)

           renderCountCart.innerHTML++;

             //calculateCartPrice.push(price)
             
              

            let cartMDiv=document.createElement("div");
            cartMDiv.setAttribute("class", "cart-styling");
            tContainer.style.display="flex";     
            line.style.display="block";
            emptyC=true;
            if(emptyC){
               cItems.style.display="flex"
            emptyCart.style.display="none"     

            }

            let cartImgEle=document.createElement("img");
            cartImgEle.setAttribute("src", img)
            let cartPriceEle=document.createElement("p");
            cartPriceEle.setAttribute("class", "cart-pprice")
            let cartTrashBtn=document.createElement("i");//trash icon
            
              
            
              
                 // deleet cart items
            cartTrashBtn.addEventListener("click", deleetFun);
            function deleetFun(){
               alert("item deleeted")
              //console.log(cartMDiv)
              cartMDiv.remove();
              renderCountCart.innerHTML--;
             
              


            
              
              //console.log(les)

             // console.log(myTotal)
              

              

              

              // cartMDiv.style.display="none"
               //renderCartData.innerHTML=arr.length;
            } 
            cartTrashBtn.setAttribute("class", "fa-solid fa-trash")
            

            let cartPriceText=document.createTextNode(`$~ ${price}`)
            cartImgEle.setAttribute("class", "cartImgElement")

            

            cartPriceEle.appendChild(cartPriceText)
            cartMDiv.append(cartImgEle)
            cartMDiv.appendChild(cartPriceEle)
            cartMDiv.appendChild(cartTrashBtn)

            renderCartData.appendChild(cartMDiv)
            calculateTotal.push(price);
            //console.log(calculateTotal)
           let myTotal= calculateTotal.reduce((accumlator,curValue)=>{
           return accumlator + curValue;

           })
           
           total_price.innerHTML=`Total Price :$${myTotal}`;
           

           
          //  console.log(myTotal)
          // alert("Product add to cart")
      }
 
   btnEle.addEventListener("click",()=>addtocart(ele.image,ele.price))

   })
}
getData();
