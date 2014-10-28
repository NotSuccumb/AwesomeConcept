$(function(){
    $(".tabs-area .tabs li").each(function(){
        $(this).click(function(){
            if(!$(this).hasClass('selected')){
                $(this).parent().find("li").removeClass("selected");
                var selectedClass = $(this).attr('class');
                $(this).addClass("selected");
                var tabArea = $(this).closest('.tabs-area');
                tabArea.find(".box-wrap > div").hide();
                tabArea.find(".box-wrap ."+ selectedClass).show();
            }
        });
    });
});
