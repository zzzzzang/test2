if(matchMedia("screen and (min-width: 600px) and (max-width: 1099px)").matches){
    $(document).ready(function(){
        $(window).scroll(function(){
            var ws=$(window).scrollTop();
            if(ws>100){
                $('#up_btn').show();
            }else{
                $('#up_btn').hide();
            };
            var wm=document.getElementById('section2').offsetTop;
            var wm2=document.getElementById('section4').offsetTop;
            var wm3=document.getElementById('section3').offsetTop;
            var wm4=document.getElementById('section5').offsetTop;
            if(ws>=wm3-500){
                $('.patch1').delay(2000).fadeIn('fast');
                $('.patch2').delay(1500).fadeIn('fast');
                $('.patch3').delay(150).fadeIn('fast');
                $('.patch4').delay(200).fadeIn('fast');
                $('.patch5').delay(250).fadeIn('fast');
                $('.patch6').delay(300).fadeIn('fast');
                $('.patch7').delay(350).fadeIn('fast');
                $('.patch8').delay(400).fadeIn('fast');
                $('.patch9').delay(450).fadeIn('fast');
                $('.patch10').delay(500).fadeIn('fast');
                $('.patch11').delay(550).fadeIn('fast');
                $('.patch12').delay(600).fadeIn('fast');
                $('.patch13').delay(650).fadeIn('fast');
                $('.patch14').delay(700).fadeIn('fast');
                $('.patch15').delay(750).fadeIn('fast');
                $('.patch16').delay(800).fadeIn('fast');
                $('.patch17').delay(850).fadeIn('fast');
                $('.patch18').delay(900).fadeIn('fast');
                $('.patch19').delay(950).fadeIn('fast');
                $('.patch20').delay(1000).fadeIn('fast');
                $('.patch21').delay(1050).fadeIn('fast');
                $('.patch22').delay(1100).fadeIn('fast');
                $('.patch23').delay(1150).fadeIn('fast');
                $('.patch24').delay(1200).fadeIn('fast');
                $('.patch25').delay(1700).fadeIn('fast');
            }
            if(ws>=wm){
               $('#logo img').attr("src","img/logo5.png")

            }else{
                $('#logo img').attr("src","img/logo44.png")

            }
            if(ws>=wm2){
                $('#logo img').attr("src","img/logo44.png")

            }
            if(ws>=wm4){
                $('#logo img').attr("src","img/logo5.png")
            }
        });

        $('#up_btn').click(function(){     
            $('html').stop().animate({scrollTop:0},'slow')
        });
       

        $('.fix_button').click(function(){
            $(this).hide();
            $('.fix').stop().css({display:"flex"})
            $('.fix').stop().show();
        });

        $('.fix h4').click(function(){
            $('.fix').stop().hide();
            $('.fix_button').stop().show();
        });
        
        $('.left').click(function(){
            $('#exhibition ul li:last').prependTo('#exhibition ul');
            $('#exhibition ul').css({marginLeft:-500});
            $('#exhibition ul').stop().animate({marginLeft:0})
        });
        $('.right').click(function(){
            $('#exhibition ul').stop().animate({marginLeft:-500},function(){
                $('#exhibition ul li:first').appendTo('#exhibition ul');
                $('#exhibition ul').css({marginLeft:0})
            });
        });

        $('.m_btn').click(function(){
                $(this).stop().hide();
                $('header p').css({color:"#fff"})
                $('#logo').css({opacity:0})
                $('.c_btn').stop().show();
                $('#menu').stop().fadeIn('slow',function(){
                $(".menu_wrap").slideDown(1000)
        });
    });
    $('.c_btn').click(function(){
        $(this).hide();
        $('header p').css({color:"#000"})
        $('#logo').css({opacity:1})
        $('.m_btn').show();
        $('#menu').stop().fadeOut('slow',function(){
        $(".menu_wrap").slideUp(function(){
        })
        });
    })
    
    });
}
    
    