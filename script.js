/*function myFunction() {
    var x = document.getElementById("myTopnav");
  
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }

 
  }

*/

function myFunction() {
  const nav = document.getElementById("myTopnav");
  const icon = document.querySelector(".icon i");

  nav.classList.toggle("responsive");
  icon.classList.toggle("open");  // toggle special style
}