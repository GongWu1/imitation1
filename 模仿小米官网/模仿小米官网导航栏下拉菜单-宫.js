// JavaScript Document

 //���Ƶ�����
 $(document).ready(function{
    $('.header-nav ul li').mouseover(function(){
        //��ȡ������������ֵ
        var navNum = $(this).index();
        console.log(navNum);
        if(navNum < 7){
            $('.header-nav-accordion').show().mouseover(function(){
                //��ȡ������������ֵ
                if(navNum < 7){
                    $('.header-nav-accordion').show();//��ʾ
                }else{
                    $('.header-nav-accordion').hide();//����
                }

                //Ȼ��,����Ӧ����ֵ��Ӧ�����ݸ��Ƶ��ɼ�������
                $('.header-nav-accordion ul').eq(navNum).show().siblings().hide();

            }).mouseout(function(){
                $('.header-nav-accordion').hide();
            });//��ʾ
        }else{
            $('.header-nav-accordion').hide();//����
        }

        //Ȼ��,����Ӧ����ֵ��Ӧ�����ݸ��Ƶ��ɼ�������
        $('.header-nav-accordion ul').eq(navNum).show().siblings().hide();

    }).mouseout(function(event){
        //�жϹ������
        if($(this).offset().top <= event.pageY){
            $('.header-nav-accordion').show();//��ʾ
        }else{
            $('.header-nav-accordion').hide();//����
        }
        console.log($(this).offset().top+'+++++'+event.pageY);
    });

 
