//get Products
$(document).ready(function(){
var productsList;
function getall(){
    $(".productsList").html("");
    $.ajax({
        url:"api/getProduct.php",
        method:"GET",
        success:function(data){
            productsList = JSON.parse(data);
            for (var i = 0; i < productsList.length; i++){
               $(".productsList").append(`<tr> 
               <td>${productsList[i]["productname"]}</td>
               <td>${productsList[i]["productcolor"]}</td>
               <td><button type="button" class="btn btn-success update-btn" data-toggle="modal" data-target="#exampleModalCenter2">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
 <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
 <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path>
</svg>
             </button></td>
               <td><button type="button" class="btn btn-danger">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
 <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
 <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
</svg>
             </button></td>
             <input type="hidden" class="idtd"></input>
               
               </tr>`)
            }
        }
    })
  }
  getall()

  // Add a product to database
$(".submit").click(function() {
    var ProductName = $(".productname").val();
    var ProductColor = $(".productcolor").val();
    $.ajax({
      url:"api/addProduct.php",
      method:"POST",
      data:{
        productname :ProductName,
        productcolor :ProductColor,
      },
      success:function(data) {
      getall();
    }
  })
})

//update-btn-on-click
$("body").on("click",".productsList .update-btn",function() {
    $(".edit-form").show();
    var index = $(this).parents("tr").index();
    $(".edit-form .productname").val(productsList[index]["productname"]);
    $(".edit-form .productcolor").val(productsList[index]["productcolor"]);
    $(".edit-form .sid").val(productsList[index]["id"]);
  });
  
  // save-product-database
  $(".save-product").click(function() {
    var ProductName = $(".edit-form .productname").val();
    var ProductColor = $(".edit-form .productcolor").val();
    var Id = $(".edit-form .sid").val();
    console.log(ProductName,ProductColor)
  

    //send to php file via ajax
    $.ajax({
      url:"api/updateProduct.php",
      method:"POST",
      data:{
        id : Id,
        productname :ProductName,
        productcolor :ProductColor,
      },
          success:function(data) {
            console.log(data)
          getall();
        }
    })
  })

// Delete a product to database
$("body").on("click",".btn-danger",function(){
    var index = $(this).parents("tr").index();
    $(".productsList .idtd").val(productsList[index]["id"]);
    console.log(productsList)
    var productId = $(".productsList .idtd").val();
    console.log(productId)

    $.ajax({
        url:"api/deleteProduct.php",
        method:"POST",
        data:{
            id :productId
        },
        success:function(data){
            $(this).parent().remove();
            getall();
        }
    })
})
$(".save-product").click(function(){
  $("#exampleModalCenter2").modal('hide');
});
$(".submit").click(function(){
  $("#exampleModalCenter").modal('hide');
});

})