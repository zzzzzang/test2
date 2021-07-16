$(document).ready(function(){
    $(window).ready(function(){
        var currentwidth=document.getElementsByTagName('body')[0].offsetWidth;
        if(currentwidth>=1100){
        $('#slogan p').slideDown(1500);
        $('#slogan p').delay(1000).fadeOut()
        $('#main').delay(2000).animate({width:"100%",height:"100%"},2000,function(){
            $('#slogan').css({top:"25%"})
            $('#slogan span').css({display:"inline"})    
            $('#mom').css({height:"200vh"})
            $('#slogan p').css({fontSize:"10vw"}).slideDown(1500)
            $('#intro').show();
            $('#section2').show();
            $('#section3').show()
            $('#section4').show();
            $('#section5').css({display:"flex"})
            $('#section5').show();
            $('#section6').css({display:"flex"})
            $('#section6').show();
            $('footer').css({display:"flex"})
            $('footer').show(); 
        });
    }
    });

    $(window).ready(function(){
        var currentwidth=document.getElementsByTagName('body')[0].offsetWidth;
        if(currentwidth>=600 && currentwidth<1100){
        $('#slogan p').slideDown(1500);
        $('#slogan p').delay(1000).fadeOut()
        $('#main').delay(2000).animate({width:"100%",height:"100%"},2000,function(){
            $('#slogan').css({top:"25%",height:"100px"})
            $('#slogan span').css({display:"inline"})    
            $('#mom').css({height:"200vh"})
            $('#slogan p').css({fontSize:"10vw"}).slideDown(1500)
            $('#intro').show();
            $('#section2').show();
            $('#section3').show();
            $('#section4').show();
            $('#section5').css({display:"flex"})
            $('#section5').show();
            $('#section6').css({display:"flex"})
            $('#section6').show();
            $('footer').css({display:"flex"})
            $('footer').show(); 
        });
    }
    });

    $(window).ready(function(){
        var currentwidth=document.getElementsByTagName('body')[0].offsetWidth;
        if(currentwidth<600){
        $('#slogan p').slideDown(1500);
        $('#slogan p').delay(1000).fadeOut()
        $('#main').delay(2000).animate({width:"100%",height:"100%"},2000,function(){
            $('#slogan').css({top:"30%",height:"200px"})
            $('#slogan span').css({display:"inline"})    
            $('#mom').css({height:"200vh"})
            $('#slogan p').css({fontSize:"10vw"}).slideDown(1500)
            $('#intro').show();
            $('#section2').show();
            $('#section3').show();
            $('#section4').show();
            $('#section5').css({display:"flex"})
            $('#section5').show();
            $('#section6').css({display:"flex"})
            $('#section6').show();
            $('footer').css({display:"flex"})
            $('footer').show(); 
        });
    }
    });


    $(window).scroll(function(){
        var currentwidth=document.getElementsByTagName('body')[0].offsetWidth;
        var ws=$(this).scrollTop();
        var this_scroll=document.getElementById('section2').offsetTop;
        if(ws>10 && currentwidth>1100){
            $('#slogan').stop().fadeOut();
        }else{
            $('#slogan').stop().fadeIn();
        };
        if(ws>1200 && currentwidth>1100){
            $('.ani_text li:first').css({"transform":"translate(-15rem)"})
        }else{
            $('.ani_text li:first').css({"transform":"translate(-5rem)"})
        }
        if(ws>1200 && currentwidth>1100){
            $('.li2').css({"transform":"translate(0rem)"})
        }else{
            $('.li2').css({"transform":"translate(-5rem)"})
        }
        if(ws>1200 && currentwidth>1100){
            $('.ani_text li:last').css({"transform":"translate(20rem)"})
        }else{
            $('.ani_text li:last').css({"transform":"translate(-5rem)"})
        }
        if(ws>2200 && currentwidth>1100){
            $('#section2').css({backgroundColor:"black"})
            $('#section3').css({backgroundColor:"black"})
            $('#section4').css({backgroundColor:"black"})
        }else{
            $('#section3').css({backgroundColor:"#fff"})
            $('#section2').css({backgroundColor:"#fff"})
            $('.slide3').css({backgroundColor:"#fff"})
        }
        if(ws>3400 && currentwidth>1100){
            $('#section3,#section4').css({backgroundColor:"#fff"})
            $('.sec4_text h3').slideDown(1000);
            $('.sec4_text p').slideDown(1000);
            $('.sec4_text button').slideDown(1000);
            $('.slide1').prependTo('.slide');
        };
        if(ws>1000 && currentwidth>1100){
            $('#up_btn').show();
        }else{
            $('#up_btn').hide();
        };
    });
    $(window).scroll(function(){
        var currentwidth=document.getElementsByTagName('body')[0].offsetWidth;
        var ws=$(this).scrollTop();
        var this_scroll=document.getElementById('section2').offsetTop;
        if(currentwidth<600){
            if(ws>10){
            $('#slogan').stop().fadeOut();
        }else{
            $('#slogan').stop().fadeIn();
        };
        if(ws>= this_scroll-400){
            $('.ani_text li:first').stop().css({"transform":"translate(-5rem)"})
        }else{
            $('.ani_text li:first').stop().css({"transform":"translate(-7rem)"})
        }
        if(ws>= this_scroll-400){
            $('.li2').stop().css({"transform":"translate(-5rem)"})
        }else{
            $('.li2').stop().css({"transform":"translate(-3rem)"})
        }
        if(ws>= this_scroll-400){
            $('.ani_text li:last').stop().css({"transform":"translate(-3rem)"})
        }else{
            $('.ani_text li:last').stop().css({"transform":"translate(0rem)"})
        }
        if(ws>1700){
            $('#section2').css({backgroundColor:"black"})
            $('#section3').css({backgroundColor:"black"})
            $('#section4').css({backgroundColor:"black"})
        }else{
            $('#section3').css({backgroundColor:"#fff"})
            $('#section2').css({backgroundColor:"#fff"})
            $('.slide3').css({backgroundColor:"#fff"})
        }
        if(ws>3300){
            $('#section3,#section4').css({backgroundColor:"#fff"})
            $('.sec4_text h3').slideDown(1000);
            $('.sec4_text p').slideDown(1000);
            $('.sec4_text button').slideDown(1000);
            $('.slide1').prependTo('.slide');
        };
        if(ws>1000){
            $('#up_btn').show();
        }else{
            $('#up_btn').hide();
        };
        }
    });

    $(window).scroll(function(){
        var currentwidth=document.getElementsByTagName('body')[0].offsetWidth;
        var ws=$(this).scrollTop();
        if(currentwidth>=600 && currentwidth<1100){
            if(ws>10){
            $('#slogan').stop().fadeOut();
        }else{
            $('#slogan').stop().fadeIn();
        };
        if(ws>1500){
            $('.ani_text li:first').css({"transform":"translate(-5rem)"})
        }else{
            $('.ani_text li:first').css({"transform":"translate(-8rem)"})
        }
        if(ws>1500){
            $('.li2').css({"transform":"translate(-5rem)"})
        }else{
            $('.li2').css({"transform":"translate(-4rem)"})
        }
        if(ws>1500){
            $('.ani_text li:last').css({"transform":"translate(-2rem)"})
        }else{
            $('.ani_text li:last').css({"transform":"translate(2rem)"})
        }
        if(ws>2100){
            $('#section2').css({backgroundColor:"black"})
            $('#section3').css({backgroundColor:"black"})
            $('#section4').css({backgroundColor:"black"})
        }else{
            $('#section3').css({backgroundColor:"#fff"})
            $('#section2').css({backgroundColor:"#fff"})
            $('.slide3').css({backgroundColor:"#fff"})
        }
        if(ws>4400){
            $('#section3,#section4').css({backgroundColor:"#fff"})
            $('.sec4_text h3').slideDown(1000);
            $('.sec4_text p').slideDown(1000);
            $('.sec4_text button').slideDown(1000);
            $('.slide1').prependTo('.slide');
        };
        if(ws>1000){
            $('#up_btn').show();
        }else{
            $('#up_btn').hide();
        };
        }
    });

    $('.next').click(function(){
        $('.slide').stop().animate({marginLeft:"-100%"},800,function(){
            $('.slide li:first').appendTo('.slide');
            $('.slide').css({marginLeft:0})
            
        });

    });
    $('.m_btn').click(function(){
                $(this).stop().hide();
                $('.c_btn').stop().show();
                $('#menu').stop().fadeIn('slow',function(){
                $(".menu_wrap").slideDown(1000)
        });
    });
    $('.c_btn').click(function(){
        $(this).hide();
        $('.m_btn').show();
        $('#menu').stop().fadeOut('slow',function(){
        $(".menu_wrap").slideUp(function(){
        })
    });
})
    $('#up_btn').click(function(){
        $('html').stop().animate({scrollTop:0},'slow')
    })



});
