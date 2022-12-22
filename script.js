
$('#burger').click(function(){
    $('#burger-menu').animate({
        width: "toggle"
      });
    $('body').css('overflow', 'hidden'); 
});

$('#close').click(function(){
    $('#burger-menu').animate({
        width: "toggle"
      });
    $('body').css('overflow', 'auto'); 
})