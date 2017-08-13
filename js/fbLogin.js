
(function()
{

      // Initialize Firebase
      var config = {
        apiKey: "AIzaSyBLMHG-ZJzfqMjCD2fCM4vYe92Dq6uq1Wc",
        authDomain: "allgames-74c45.firebaseapp.com",
        databaseURL: "https://allgames-74c45.firebaseio.com",
        projectId: "allgames-74c45",
        storageBucket: "allgames-74c45.appspot.com",
        messagingSenderId: "538487521878"
      };
      firebase.initializeApp(config);

      const txtEmail = document.getElementById('txtEmail');
      const txtPassword= document.getElementById('txtPassword');
      const btnLogin= document.getElementById('btnLogin');
      const btnLogout= document.getElementById('btnLogout');

      //Add login event
      btnLogin.addEventListener('click', e =>{

        //GET EMAIL AND PASS

        //TODO: CHECK 4 REAL EMAIL
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));

      });

      firebase.auth().onAuthStateChanged(firebaseUser => {

          if(firebaseUser){

              window.location.href = "index_back.html";

          }else{

          }


      });




      // btnLogout.addEventListener('click', e =>{

      //   firebase.auth().signOut();

      // });



      //sign up
      // btnSign.addEventListener('click', e =>{

      //   const email = txtEmail.value;
      //   const pass = txtPassword.value;
      //   const auth = firebase.auth();

      //   const promise = auth.createUserWithEmailAndPassword(email, pass);
      //   promise.catch(e => console.log(e.message));

      // });


}());

