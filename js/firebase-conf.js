// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBVqorrxJwSwxrLovSrp44iXyGb81mkHrc",
    authDomain: "cetiliztli-technologies.firebaseapp.com",
    projectId: "cetiliztli-technologies",
    storageBucket: "cetiliztli-technologies.appspot.com",
    messagingSenderId: "270122380975",
    appId: "1:270122380975:web:91f7258b8e7c1c2c0b2e5a",
    measurementId: "G-T0BXRCJZS7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var performance_standalone = "https://www.gstatic.com/firebasejs/8.4.1/firebase-performance-standalone.js";
  
 (function(sa,fbc){function load(f,c){
  	var a=document.createElement('script');
	a.async=1;a.src=f;
	var s=document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(a,s);}load(sa);
	window.addEventListener('load',function(){firebase.initializeApp(fbc).performance()});
})(performance_standalone, firebaseConfig);