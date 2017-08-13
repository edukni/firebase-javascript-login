
(function()
{

      // Initialize Firebase with your credentials.
      var config = {

      };
      firebase.initializeApp(config);



      //Add realtime listener
      var path = window.location.pathname;
      var page = path.split("/").pop();
      console.log( page );
      
      firebase.auth().onAuthStateChanged(firebaseUser => {

          if(firebaseUser){

              if(page=="index_back.html"){
                  
                  $(".userEmail").text(firebaseUser.email);

              }else{
                   window.location.href = "index_back.html";

              }
          }else{

              if(page=="index_back.html"){
                  window.location.href = "index.html";
              }else{

              }


          }


      });









}());