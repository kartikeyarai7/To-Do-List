$("ul").on("click", "li", function (completed) {
    if ($(this).css("color") == "rgb(128, 128, 128)") {
        $(this).removeClass("done");
    }
    else {
        $(this).addClass("done");
    }
}); 

$("ul").on("click", "span",function (clear) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
});

$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        var todotext = $(this).val();
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todotext + "</li>");
    }
});
$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});