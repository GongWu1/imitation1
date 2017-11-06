// JavaScript Document
$(document).ready(function(){
    //搜索框点击隐藏
    $('.search').click(function(event){
        $(this).find('div').hide();//隐藏输入框中的标签
        $(this).find('.search-list').show();//隐藏输入框中的标签
        $(this).find('input, button, .search-list').css({outline:'none', border:'1px solid #ff6700'});
    }).mouseover(function(){
        $('input[name=search]').next().css({'background':'#ff6700', 'color':'#fff'});
    }).mouseout(function(){
    	$('input[name=search]').next().css({'background':'#fff', 'color':'#151515'});
    });

    //丧失光标焦点时,隐藏
    $('input[name=search]').blur(function(){
        $(this).parent().find('.search-list').hide();
    });


 //轮播图的菜单导航
    $('.aside ul li').mouseover(function(){
    	var aside = $('.aside');

        $('.aside-list').css('left', aside.offset().left + aside.width()+15).show().mouseover(function(){
            $(this).show();
        }).mouseout(function(){
            $(this).hide();
        });
        //获取索引, 显示对应的ul列表
        $('.aside-list>ul').eq($(this).index()).show().siblings().hide();

    }).mouseout(function(){
        $('.asides-list').hide();
    });
	
	//轮播图下方三个图
    $('.fourtx').mouseover(function(){
        $(this).css('box-shadow', '5px 5px 30px 10px rgba(217,217,217,0.6)');
    }).mouseout(function(){
        $(this).css('box-shadow', '');
    });
	
	//小米明星单品
    //设定单击次数索引变量
    var superNum = 0;
    //获取ul的个数
    var uls = $('.superPjs .superP-l .superP-lun ul');
    var ulN = uls.length;
    //自动轮播
    var timeC = setInterval(timecRun, 3000);
    // 索引为1时, 向右走
    $('.superPjs .superP-t a:eq(0)').click(function(event){
        event.preventDefault();//阻止a链接的默认行为
        console.log($(this).index());

        superNum++;

        if(superNum >= ulN){
            superNum = 0;
            $('.ac').prev().css('color', '#E3E3E3');//不可用
        }
        $('.superP-lun').animate({left:-(superNum)*1226+'px'}, 1000);

    });
    //索引值为2 ,向左走,
    $('.superPjs .superP-t a:eq(1)').click(function(event){
        // 索引为2时, 向左走,  索引为1时, 向右走
        event.preventDefault();//阻止a链接的默认行为

        console.log($(this).index()+'ssss');

        superNum--;

        if(superNum < 0){
            superNum = ulN-1;
        }
        $('.superP-lun').animate({left:-superNum*1226+'px'}, 1000);
    });
    //鼠标放上去时, 取消自动轮播
    $('.superPjs').mouseover(function(){
        clearInterval(timeC);
    }).mouseout(function(){
        timeC = setInterval(timecRun, 3000);
    });

    function timecRun(){
        superNum++;
        if(superNum >= ulN){
            superNum = 0;
        }
        $('.superP-lun').animate({left:-(superNum)*1226+'px'}, 1000);
    }

 //配件, 周边, 搭配多个tab切换页
    $('.many-tab li').mouseover(function(){
        var tabNum = $(this).index();
        console.log($(this).index());
        $(this).parents('.match').find('.match-l-right').children('ul').eq(tabNum).show().siblings().hide();
    });



  
	
	
    });