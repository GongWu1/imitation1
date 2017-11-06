// JavaScript Document
$(document).ready(function(){
    //������������
    $('.search').click(function(event){
        $(this).find('div').hide();//����������еı�ǩ
        $(this).find('.search-list').show();//����������еı�ǩ
        $(this).find('input, button, .search-list').css({outline:'none', border:'1px solid #ff6700'});
    }).mouseover(function(){
        $('input[name=search]').next().css({'background':'#ff6700', 'color':'#fff'});
    }).mouseout(function(){
    	$('input[name=search]').next().css({'background':'#fff', 'color':'#151515'});
    });

    //ɥʧ��꽹��ʱ,����
    $('input[name=search]').blur(function(){
        $(this).parent().find('.search-list').hide();
    });


 //�ֲ�ͼ�Ĳ˵�����
    $('.aside ul li').mouseover(function(){
    	var aside = $('.aside');

        $('.aside-list').css('left', aside.offset().left + aside.width()+15).show().mouseover(function(){
            $(this).show();
        }).mouseout(function(){
            $(this).hide();
        });
        //��ȡ����, ��ʾ��Ӧ��ul�б�
        $('.aside-list>ul').eq($(this).index()).show().siblings().hide();

    }).mouseout(function(){
        $('.asides-list').hide();
    });
	
	//�ֲ�ͼ�·�����ͼ
    $('.fourtx').mouseover(function(){
        $(this).css('box-shadow', '5px 5px 30px 10px rgba(217,217,217,0.6)');
    }).mouseout(function(){
        $(this).css('box-shadow', '');
    });
	
	//С�����ǵ�Ʒ
    //�趨����������������
    var superNum = 0;
    //��ȡul�ĸ���
    var uls = $('.superPjs .superP-l .superP-lun ul');
    var ulN = uls.length;
    //�Զ��ֲ�
    var timeC = setInterval(timecRun, 3000);
    // ����Ϊ1ʱ, ������
    $('.superPjs .superP-t a:eq(0)').click(function(event){
        event.preventDefault();//��ֹa���ӵ�Ĭ����Ϊ
        console.log($(this).index());

        superNum++;

        if(superNum >= ulN){
            superNum = 0;
            $('.ac').prev().css('color', '#E3E3E3');//������
        }
        $('.superP-lun').animate({left:-(superNum)*1226+'px'}, 1000);

    });
    //����ֵΪ2 ,������,
    $('.superPjs .superP-t a:eq(1)').click(function(event){
        // ����Ϊ2ʱ, ������,  ����Ϊ1ʱ, ������
        event.preventDefault();//��ֹa���ӵ�Ĭ����Ϊ

        console.log($(this).index()+'ssss');

        superNum--;

        if(superNum < 0){
            superNum = ulN-1;
        }
        $('.superP-lun').animate({left:-superNum*1226+'px'}, 1000);
    });
    //������ȥʱ, ȡ���Զ��ֲ�
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

 //���, �ܱ�, ������tab�л�ҳ
    $('.many-tab li').mouseover(function(){
        var tabNum = $(this).index();
        console.log($(this).index());
        $(this).parents('.match').find('.match-l-right').children('ul').eq(tabNum).show().siblings().hide();
    });



  
	
	
    });