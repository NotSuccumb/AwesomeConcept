$(function(){
    $(".tab-area .tabs li").each(function(){
        $(this).click(function(){
            if(!$(this).hasClass('active')){
                $(this).parent().find("li").removeClass("active");
                var selectedClass = $(this).attr('class');
                $(this).addClass("active");
                var tabArea = $(this).closest('.tab-area');
                tabArea.find(".tab-content li").hide();
                tabArea.find(".tab-content ."+ selectedClass).show();
            }
        });
    });
});
