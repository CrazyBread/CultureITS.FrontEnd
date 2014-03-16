$(document).ready(function(){
    $(".fancybox").click(function(){
        $($(this).attr("href")).show();
        $(".popup").show();
    });
    $(".popup_close, .popup").click(function(){
        $(".popup").hide();
        $(".popup_window").hide();
    });
    $(".popup_window").click(function(e){
        e.stopPropagation();
    });
});