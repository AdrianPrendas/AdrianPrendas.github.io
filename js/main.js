$(document).ready( function() {

	// Logo
	var $logo 	= $('#logo');
	 if (location.href.indexOf("#") != -1) {
        if(location.href.substr(location.href.indexOf("#"))!='#about'){
        	$logo.show();
        }
    }
    
	// Show logo 
	$('#tab-container .tab a').click(function() {
	  $logo.slideDown('slow');
	});
	// Hide logo
	$('#tab-about').click(function() {
	  $logo.slideUp('slow');
	});	
function animMeter(){
    $(".meter > span").each(function() {
                $(this)
                    .data("origWidth", $(this).width())
                    .width(0)
                    .animate({
                        width: $(this).data("origWidth")
                    }, 1200);
            });
}
animMeter();

      $('#tab-container').easytabs({
        animate			: true,
        updateHash		: true,
        transitionIn	: 'slideDown',
        transitionOut	: 'slideUp',
        animationSpeed	: 600,
        tabActiveClass	: 'active'}).bind('easytabs:midTransition', function(event, $clicked, $targetPanel){
            if($targetPanel.selector=='#resume'){
                    animMeter();
            }
        });

        $('#content-transactions').css("display","none");
        $('#content-mining').css("display","none");


        $("#transactions").on("click",function(){

            console.log("transactions tracer")
            
            if($("#content-transactions").css("display") == 'block')
                $("#content-transactions").hide(1000)
            else
                $("#content-transactions").show(1000)

        })

        $("#mining").on("click",function(){

            console.log("Text Mining")
            
            if($("#content-mining").css("display") == 'block')
                $("#content-mining").hide(1000)
            else
                $("#content-mining").show(1000)

        })

});



