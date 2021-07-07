$(document).ready(function(){
 $('.header').height($(window).height());
})

$("#dropdownMenuButton button").on("click", function(){
         var filtertag = $(this).attr('class').split(' ')[0];
       $('.samplecard').hide().filter('.' + filtertag).show(); 
})[0].click();