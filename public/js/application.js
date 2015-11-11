$(document).ready(function() {
      // Este código corre después de que `document` fue cargado(loaded) 
      // completamente. 
      // Esto garantiza que si amarramos(bind) una función a un elemento 
      // de HTML este exista ya en la página.
  
      $('form').on("submit", function(evento){

            //first stage: for preventing any default, stop HTML and don't do 'redirect to'
        evento.preventDefault();
     
    //get values to Post
     
        // var dataName = document.getElementById("user");
        var dataName = $("#user");
        // var dataId = dataName.attributes.getNamedItem("name").nodeValue;
        var dataId = dataName.attr("name");
        //var dataName = $('#user').attr('name');
        //var dataValue = $('#user').val();
        console.log(dataId);
        var data = $('#user').val();
        // console.log(data);
        var dataHash = dataId + "=" + data
    // {"user_input"=>"hola"}
    // console.log(dataHash);
    // var url = window.location.href;
    var url = $('#grandma').attr('action');
        // console.log(url);
        // "/abuelita" 

    //it gets a hash of form 'grandma' - serialized data

        var data2 = $('#grandma').serialize();
        console.log(data2);
        // console.log(data2);

        //to do a Post, it gets a url (url) and a data (data2)

        $.post(url,data2,function(response_data){
            // console.log(response_data);

      //it gets response from Post 'response_data' 

          var grandma_response = '<p>Tu Abuelita dice: "<span id="grandma_says">'+ response_data +'</span>"</p>'
      
      //it replaces all content from 'div' with id="grandma_response"

      $('#grandma_response').html(grandma_response);
        });

        // console.log(post);

    //it returns an alert when post successful

        // post.done(function (data){
        //  console.log(data);
        //  alert("ajax");
        // });

      });


});