function myFunction1() {
    var element = document.body;
    element.classList.toggle("dark");
 }
 function myFunction2() {
    var element = document.body;
    element.classList.toggle("light");
 }
 function myFunction3() {
    var element = document.body;
    element.classList.toggle("rreedd");
 }
 function myFunction4() {
    var element = document.body;
    element.classList.toggle("puurple");
 }
 
 




 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventlistener("click" , function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });
    });
});
 






$(document).ready(function(){
    $('.qat1').hide();
    $('.qab1').click(function(){
        $('.qat1').show();
        $('.qat2').hide();
        $('.qat3').hide();
        $('.qat4').hide();
        $('.qat5').hide();
        $('.qat6').hide();
    })

    $('.qat2').hide();
    $('.qab2').click(function(){
        $('.qat2').show();
        $('.qat1').hide();
        $('.qat3').hide();
        $('.qat4').hide();
        $('.qat5').hide();
        $('.qat6').hide();
    })

    $('.qat3').hide();
    $('.qab3').click(function(){
        $('.qat3').show();
        $('.qat1').hide();
        $('.qat2').hide();
        $('.qat4').hide();
        $('.qat5').hide();
        $('.qat6').hide();
    })

    $('.qat4').hide();
    $('.qab4').click(function(){
        $('.qat4').show();
        $('.qat1').hide();
        $('.qat3').hide();
        $('.qat2').hide();
        $('.qat5').hide();
        $('.qat6').hide();
    })

    $('.qat5').hide();
    $('.qab5').click(function(){
        $('.qat5').show();
        $('.qat1').hide();
        $('.qat3').hide();
        $('.qat4').hide();
        $('.qat2').hide();
        $('.qat6').hide();
    })

    $('.qat6').hide();
    $('.qab6').click(function(){
        $('.qat6').show();
        $('.qat1').hide();
        $('.qat3').hide();
        $('.qat4').hide();
        $('.qat5').hide();
        $('.qat2').hide();
    })

    
  

})
