function search() {
    //Declare variables
    var searchbox, product, storename, pname, match;
    searchbox = document.getElementById("search-item").value.toUpperCase();
    storename = document.getElementById("product-list");
    product = document.querySelectorAll("product");
    pname = storename.getElementsByTagName("h2");



// Loop through all list items, and hide those who don't match the search query
  for(var i=0; i < product.lenght; i++){
      match = product[i].getElementsByTagName("h2")[0];
        if(match.innerHTML.toLocaleUpperCase().indexOf(searchbox) > -1){
          product[i].style.display = "";
        } else {
          product[i].style.display = "none";
      }
    }
}


function search() {
    // Declare variables
    var input, filter, storeItem,product, pname, i, textValue;
    input = document.getElementById("search-item");
    filter = input.value.toUpperCase();
    storeItem = document.getElementById("product-list");
    product = storeItem.getElementsByClassName("product");
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < product.length; i++) {
      pname = product[i].getElementsByTagName("h2")[0];
      if (pname) {
        textValue = pname.textContent || pname.innerText;
        if (textValue.toUpperCase().indexOf(filter) > -1){
          product[i].style.display = "";
        } else {
        product[i].style.display = "none";
        }
    }
  }

}

              // if(match){
            //     //let textvalue = match.textContent || match.innerHTML

            //     if(textvalue.toUpperCase().indexOf(searchbox) > -1){
            //         product[i].style.display="";
            //     } else{
            //         product[i].style.display= none;
            //     }
            // }