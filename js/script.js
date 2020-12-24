var sitename= document.getElementById("sitename");
var urlsitename= document.getElementById("urlsitename");

var sitebook ;
if(localStorage.getItem("book store ")==null){
  sitebook=[];
}
else{
  sitebook =JSON.parse(localStorage.getItem("book store "));
  displayproducts();
}
function addProduct(){
 var bookfav = {
   name :sitename.value,
   urlname: urlsitename.value,
   
 };
 sitebook.push(bookfav);
 clearproduct();
localStorage.setItem("book store " ,JSON.stringify(sitebook));
 displayproducts();
console.log(sitebook);

};
function clearproduct(){
  sitename.value="";
  urlsitename.value="";
 
}
function displayproducts(){
  var carton ="";
  for(var i=0 ; i < sitebook.length ; i++){

    var carton =carton + `<tr>
    <td>`+ i+`</td>
    <td>`+sitebook[i].name +`</td>
   
    
    <td> <button onclick="changeFormForUpdate(`+i+`)" class="btn btn-outline-warning"><a href="`+sitebook[i].urlname +`">visitesite</a></button> </td>
    <td><button onclick="deletproduc(`+i+`)" class="btn btn-outline-danger">delete</button></td>
    
</tr>`;
  }
document.getElementById("addpro").innerHTML = carton ;
}

function deletproduc(prodectsdelet){
  sitebook.splice(prodectsdelet,1);

  displayproducts();
  localStorage.setItem("book store " ,JSON.stringify(sitebook));
}
function searchProduct(searchTerm)//sam
{
    var cartoona = ``;

    for(var i=0 ; i < sitebook.length ; i++)
    {
       if(sitebook[i].name.toLowerCase().includes(searchTerm.toLowerCase())==true)
        {
          
            cartoona = cartoona +`<tr>
            <td>`+i+`</td>
            <td>`+sitebook[i].name+`</td>
            
            
            <td> <button onclick="changeFormForUpdate(`+i+`)" class="btn btn-outline-warning"><a href="`+sitebook[i].urlname +`">visitesite</a></button> </td>
            <td> <button onclick="deleteProduct(`+i+`)" class="btn btn-outline-danger">delete</button> </td>
            </tr>`;
        }
        else
        {
          console.log(searchTerm)
            console.log("m4 Mawgod");
            //m4Mawgod
        }
        
    }
    document.getElementById("addpro").innerHTML = cartoona;

}

