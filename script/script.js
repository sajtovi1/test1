var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); 
}
function funk(){
  var vrednost = confirm("Da li ste sigurni da želite da obrišete?");
  if(vrednost==true){
    var forma = window.document.forms[0];
    for(let i=0;i<forma.elements.length;i++){
      forma.reset();
    }
  }
}
 
document.getElementById("reset").addEventListener("click",funk);

function validacija() {

  if (document.forms[0].ime.value=='') {
    alert("Niste uneli Vaše ime i prezime!");
    document.forms[0].ime.focus();
    return false
  }
      
  if (document.forms[0].mail.value=='') {
    alert("Niste uneli email adresu!");
    document.forms[0].mail.focus();
    return false;
  }

  if(document.forms[0].mail.value.indexOf('@') == -1)
  {
    alert("Niste uneli email adresu u odgovarajućem formatu!");
    document.forms[0].mail.focus();
    return false;
  }
      
  
    
  var vr = confirm("Da li želite da završite?");
  if(vr==true){
    var forma = window.document.forms[0];
    for(let i=0;i<forma.elements.length;i++){
      forma.submit();
    }
  }

}
function mouseEnter(){
  let b = document.getElementById("grad");
  b.style.color= "orange";
}
document.getElementById("grad").onmouseenter = function() {mouseEnter()};
function mouseLeave(){
  let b = document.getElementById("grad");
  b.style.color= "red";
}
document.getElementById("grad").onmouseleave = function() {mouseLeave()};