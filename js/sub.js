$(document).ready(function(){      
         var currentwidth=document.getElementsByTagName('body')[0].offsetWidth;
     if(matchMedia("screen and (max-width: 599px)").matches){
           $('.m_btn').click(function(){
             $(this).stop().hide();
             $('header p').css({color:"#fff"})
             $('#logo img').css({opacity:0})
             $('.c_btn').stop().show();
             $('header').stop().fadeIn();
             $('#menu').stop().fadeIn('slow',function(){
             $(".menu_wrap").slideDown(1000)
           });
         });
         $('.c_btn').click(function(){
             $(this).hide();
             $('header p').css({color:"#333333"})
             $('#logo img').css({opacity:1})
             $('.m_btn').show();
             $('#menu').stop().fadeOut('slow',function(){
             $(".menu_wrap").slideUp(function(){
             })
           });
         })
         };


      if(matchMedia("screen and (min-width: 600px) and (max-width: 1099px)").matches){
           $('.m_btn').click(function(){
             $(this).stop().hide();
             $('header p').css({color:"#fff"})
             $('#logo_img').attr("src","img/logo5.png")
             $('.c_btn').stop().show();
             $('header').stop().fadeIn();
             $('#menu').stop().fadeIn('slow',function(){
             $(".menu_wrap").slideDown(1000)
           });
         });
         $('.c_btn').click(function(){
             $(this).hide();
             $('#logo_img').attr("src","img/logo4.png")
             $('header p').css({color:"#333333"})
             $('.m_btn').show();
             $('#menu').stop().fadeOut('slow',function(){
             $(".menu_wrap").slideUp(function(){
             })
           });
         })
         document.getElementsByClassName('cha_li')[0].addEventListener("mouseover",cha);
         function cha(){
       document.getElementById('img_box').style.backgroundImage="url('img/enlvl.png')";
     }
       document.getElementsByClassName('cha_li')[1].addEventListener("mouseover",cha1);
         function cha1(){
       document.getElementById('img_box').style.backgroundImage="url('img/poul.png')";
     }
     document.getElementsByClassName('cha_li')[2].addEventListener("mouseover",cha2);
         function cha2(){
       document.getElementById('img_box').style.backgroundImage="url('img/chagall4.png')";
     }
       document.getElementsByClassName('cha_li')[3].addEventListener("mouseover",cha3);
         function cha3(){
       document.getElementById('img_box').style.backgroundImage="url('img/climt2.png')";
     }
   
       document.getElementsByClassName('cha_li')[4].addEventListener("mouseover",cha4);
         function cha4(){
       document.getElementById('img_box').style.backgroundImage="url('img/renu3.png')";
     }
       document.getElementsByClassName('cha_li')[5].addEventListener("mouseover",cha5);
         function cha5(){
       document.getElementById('img_box').style.backgroundImage="url('img/monet2.jpg')";
     }
       document.getElementsByClassName('cha_li')[6].addEventListener("mouseover",cha6);
         function cha6(){
       document.getElementById('img_box').style.backgroundImage="url('img/van2.png')";
     }
       document.querySelector('.cha_li').mouseout=function(){
         document.getElementById('img_box').style.backgroundImage=none
     };
     $('.cha_li').mouseout(function(){
       $('#img_box').css({backgroundImage:"none"})
     });
    };

    if(matchMedia("screen and (min-width: 1100px)").matches){
      $('.m_btn').click(function(){
        $(this).stop().hide();
        $('header p').css({color:"#fff"})
        $('#logo').css({opacity:0});
        $('.c_btn').stop().show();
        $('header').stop().fadeIn();
        $('#menu').stop().fadeIn('slow',function(){
        $(".menu_wrap").slideDown(1000)
      });
    });
    $('.c_btn').click(function(){
        $(this).hide();
        $('header p').css({color:"#333333"})
        $('#logo').css({opacity:1})
        $('.m_btn').show();
        $('#menu').stop().fadeOut('slow',function(){
        $(".menu_wrap").slideUp(function(){
        })
      });
    })
    $('.cha_li').hover(function(){
      $(this).find('.li_img').stop().animate({width:"200px"},500)
     },function(){
       $('.li_img').stop().animate({width:0},500)
    });
    
    document.getElementsByClassName('cha_li')[0].addEventListener("mouseover",cha);
      function cha(){
    document.getElementById('img_box').style.backgroundImage="url('img/enlvl.png')";
  }
    document.getElementsByClassName('cha_li')[1].addEventListener("mouseover",cha1);
      function cha1(){
    document.getElementById('img_box').style.backgroundImage="url('img/poul.png')";
  }
  document.getElementsByClassName('cha_li')[2].addEventListener("mouseover",cha2);
      function cha2(){
    document.getElementById('img_box').style.backgroundImage="url('img/chagall4.png')";
  }
    document.getElementsByClassName('cha_li')[3].addEventListener("mouseover",cha3);
      function cha3(){
    document.getElementById('img_box').style.backgroundImage="url('img/climt2.png')";
  }

    document.getElementsByClassName('cha_li')[4].addEventListener("mouseover",cha4);
      function cha4(){
    document.getElementById('img_box').style.backgroundImage="url('img/renu3.png')";
  }
    document.getElementsByClassName('cha_li')[5].addEventListener("mouseover",cha5);
      function cha5(){
    document.getElementById('img_box').style.backgroundImage="url('img/monet2.jpg')";
  }
    document.getElementsByClassName('cha_li')[6].addEventListener("mouseover",cha6);
      function cha6(){
    document.getElementById('img_box').style.backgroundImage="url('img/van2.png')";
  }
    document.querySelector('.cha_li').mouseout=function(){
      document.getElementById('img_box').style.backgroundImage=none
  };
  $('.cha_li').mouseout(function(){
    $('#img_box').css({backgroundImage:"none"})
  });
}


       $(window).ready(function(){
         $('.cha_li').animate({opacity:"1",height:"14.285%"},2000)
         $('#img_box').delay(1500).show();
       });
        
  });