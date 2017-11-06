// JavaScript Document

 //控制导航条
 $(document).ready(function{
    $('.header-nav ul li').mouseover(function(){
        //获取导航条的索引值
        var navNum = $(this).index();
        console.log(navNum);
        if(navNum < 7){
            $('.header-nav-accordion').show().mouseover(function(){
                //获取导航条的索引值
                if(navNum < 7){
                    $('.header-nav-accordion').show();//显示
                }else{
                    $('.header-nav-accordion').hide();//隐藏
                }

                //然后,把相应索引值对应的数据给移到可见区域内
                $('.header-nav-accordion ul').eq(navNum).show().siblings().hide();

            }).mouseout(function(){
                $('.header-nav-accordion').hide();
            });//显示
        }else{
            $('.header-nav-accordion').hide();//隐藏
        }

        //然后,把相应索引值对应的数据给移到可见区域内
        $('.header-nav-accordion ul').eq(navNum).show().siblings().hide();

    }).mouseout(function(event){
        //判断光标走向
        if($(this).offset().top <= event.pageY){
            $('.header-nav-accordion').show();//显示
        }else{
            $('.header-nav-accordion').hide();//隐藏
        }
        console.log($(this).offset().top+'+++++'+event.pageY);
    });

 
