
var productName=document.getElementById('pNanme')
var productPrice=document.getElementById('pPrice')
var productCategory=document.getElementById('pCategory')
var productDesc=document.getElementById('pDesc')
var addBtn=document.getElementById('addBtn')
var alertName=document.querySelector('.alertName')
var alertPrice=document.querySelector('.alertPrice')
console.log(alertName);
// var allproduct=JSON.parse(localStorage.getItem('product'))
var updatedIndex=0
var allproduct=[]
if(localStorage.getItem('product')!=null){
   allproduct=JSON.parse( localStorage.getItem('product'))
   displayProducts()
}


// functions
function addProduct(){
    if(validateName() && validatePrice()){
        if(addBtn.innerHTML=='Add product'){
            // add
            var product={
                name : productName.value,
                price:productPrice.value ,
                category:productCategory.value ,
                desc:productDesc.value
        
            }
            allproduct.push(product)
            console.log(allproduct);
            localStorage.setItem('product' , JSON.stringify(allproduct))
            clearData()
            displayProducts()
           
        
            
    
        }
        else{
            // update
            updateData()
        }
        

    }
   
    
    


    

   }
  
  
   
  
       



function clearData(){
    productName.value=''
    productPrice.value=''
    productCategory.value=''
    productDesc.value=''

}
function displayProducts(){
  var catrona=''
    for(var i=0 ; i< allproduct.length ; i++){
        catrona+=`  <tr>
        
        <td>${allproduct[i].name}</td>
        <td>${allproduct[i].price}</td>
        <td>${allproduct[i].category}</td>
        <td>${allproduct[i].desc}</td>
        <td><button onclick=getValues(${i}) class="btn btn-warning">Update</button></td>
        <td><button onclick='deleteProduct(${i})' class="btn btn-danger">Delete</button></td>


    </tr>`
      
    }

   document.getElementById('tData').innerHTML=catrona
}


function deleteProduct(index){
    allproduct.splice(index,1)
    console.log(allproduct);
    displayProducts()
    localStorage.setItem('product' , JSON.stringify(allproduct))
    
    

}

function search(){
    var term=document.getElementById('searchValue').value
    var cartona=''
    for(var i=0 ; i<allproduct.length ; i++){
        if(allproduct[i].name.toLowerCase().includes(term.toLowerCase())){
            cartona+=`  <tr>
        
            <td>${allproduct[i].name.replace(term,`<span class='bg-info'>${term}</span>`)}</td>
            <td>${allproduct[i].price}</td>
            <td>${allproduct[i].category}</td>
            <td>${allproduct[i].desc}</td>
            <td><button class="btn btn-warning">Update</button></td>
            <td><button onclick='deleteProduct(${i})' class="btn btn-danger">Delete</button></td>
    
    
        </tr>`
        }
    }
    document.getElementById('tData').innerHTML=cartona

}

function getValues(index){
    updatedIndex=index
    productName.value=allproduct[index].name
    productPrice.value=allproduct[index].price
    productCategory.value=allproduct[index].category
    productDesc.value=allproduct[index].desc
    addBtn.innerHTML='update'
}
function updateData(){
    var updatedProduct={
        name : productName.value,
        price:productPrice.value ,
        category:productCategory.value ,
        desc:productDesc.value
    }
    allproduct.splice(updatedIndex,1,updatedProduct)
    displayProducts()
    localStorage.setItem('product' , JSON.stringify(allproduct))
    clearData()
    addBtn.innerHTML='Add product'

}

// validation 
var regexPrice=/^[2-7][1-8]$/


productName.addEventListener('blur' , validateName)
productPrice.addEventListener('blur' , validatePrice)
function validateName(){
    var regexName=/^[A-Z][a-z]{2,8}$/
  if(  regexName.test(productName.value)==true){
    productName.classList.add('is-valid')
    productName.classList.remove('is-invalid')
    alertName.classList.replace('d-block' , 'd-none')
    return true
    

  }
  else{
    productName.classList.add('is-invalid')
    productName.classList.remove('is-valid')
    alertName.classList.replace('d-none' , 'd-block')
    return false


  }

}

function validatePrice(){
    var regexPrice=/^[1-9][0-9]{2,3}$/
  if(  regexPrice.test(productPrice.value)==true){
    productPrice.classList.add('is-valid')
    productPrice.classList.remove('is-invalid')
    alertPrice.classList.replace('d-block' , 'd-none')
    return true
    

  }
  else{
    productPrice.classList.add('is-invalid')
    productPrice.classList.remove('is-valid')
    alertPrice.classList.replace('d-none' , 'd-block')
    return false


  }

}









































