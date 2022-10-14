

var container=document.getElementById("c1")
function get_api(){
    fetch('https://fakestoreapi.com/products')
    .then((res)=>{
        return res.json();

    }).then(( products) =>{
        
        products.forEach(pr => {
            
            console.log(typeof(pr))
            console.log(pr.title)
            
           
            // container.innerHTML+=`
            // <div class="card mt-2" style="width: 18rem ; ">
            //     <img class="card-img-top " width="100px" height="250px" src="${pr.image}" alt="">
            //     <div class="card-body">
            //         <h5 class="card-title h-50 overflow-hidden">${pr.title}.</h5>
            //         <div class="bot_product d-flex d-flex justify-content-between pt-6">

            //             <p class="card-text ">${pr.price}</p>
            //             <button class="btn btn-primary h-30" onclick="printprod('${pr.title}')"   >add to cart</button>

            //         </div>

                    
            //     </div>
            // </div> 
            // `

        });
       

    })

    .catch((error)=>{
        console.log(error);
    })






}
get_api()



    fetch("https://fakestoreapi.com/products", {
     
   
    method: "POST",
     
   
    body: JSON.stringify({
        id:78,
        title: "foo",
        price:776,
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        category:"largemen",
        image:"https://fakestoreapi.com…PKd-2AYL._AC_SL1500_.jpg",
         rating:{'rate':77,'count':655}
        

       
    }),
     
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
 

.then(response => response.json())
 

.then(json => console.log(json));
  
    
    
  


fetch('https://fakestoreapi.com/products/7',  {
  method: 'DELETE',
})
.then(res => res.json()) 
.then(res => console.log(res))





    
const update = {
    title: "foo",
         price:776,
       description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
       category:"largemen",
       image:"https://fakestoreapi.com…PKd-2AYL._AC_SL1500_.jpg",
    };

   
       
        fetch("https://fakestoreapi.com/products/7", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          method: "PUT",    
       
          
          body: JSON.stringify(update)
          
          
        })
          .then(function (response) {
       
            
            return response.json();
          })
          .then(function (data) {
            console.log(data);
          });
      
       
     


