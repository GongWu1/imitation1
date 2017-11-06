// JavaScript Document


$(document).ready(function(){
var num = 0;
var ulWidth = 1226;//�ֲ�ͼƬ�Ŀ��
var imgNum = $('#ul-img li').length-1;//�ֲ�ͼƬ��������

function autoPlay(){
    if(num > imgNum){
        num = 0;
    }
    $('#ul-img').animate({left: -num * ulWidth+'px'}, 1000);
    //���ֲ�ͼƬ��Ӧ��С����ɫ�ı�
    $('#dian-list div').eq(num).css('background', 'rgba(0,0,0,.5)').siblings().css('background', 'rgba(0,123,255,.6)');
    console.log(num+'�Զ��ֲ�');
    num++;
}

//��һ��: �Զ����ֲ�
var timer = setInterval(autoPlay, 2000);//�����Զ���һ�ź���


//�ڶ���: ���С���л�
$('#dian-list div').click(function(){
      clearInterval(timer);
    //��ȡ������ǵڼ���ͼƬ
    num = $(this).index();//�ѵ��ѡ�е�ͼƬ����ֵ����ȫ���ֲ�num����
    $('#ul-img').animate({left: -num * ulWidth+'px'}, 1000);
    //���ֲ�ͼƬ��Ӧ��С����ɫ�ı�
    $('#dian-list div').eq(num).css('background', 'rgba(0,0,0,.5)').siblings().css('background', 'rgba(0,123,255,.6)');
    console.log(num+'С���л�');//���0,
});
//������: �����һ��
$('.left').click(function(){
    num--;
    if(num < 0){
        num = imgNum;
        console.log(imgNum);
    }
    console.log(num+'��һ������');
//        $('#ulLabel').css('left', -num * ulWidth+'px');
    $('#ul-img').animate({left: -num * ulWidth+'px'}, 1000);
    //���ֲ�ͼƬ��Ӧ��С����ɫ�ı�
    $('#dian-ist div').eq(num).css('background', 'rgba(0,0,0,.5)').siblings().css('background', 'rgba(0,123,255,.6)');
});

//���Ĳ�: �����һ��
$('.right').click(function(){
    num++;
    if(num > imgNum){
        num = 0;
    }
    console.log(num+'��һ������');
    $('#ul-img').animate({left: -num * ulWidth+'px'}, 1000);
    //���ֲ�ͼƬ��Ӧ��С����ɫ�ı�
    $('#dian-list div').eq(num).css('background', 'rgba(0,0,0,.5)').siblings().css('background', 'rgba(0,123,255,.6)');
});

//���岽: ������Ƶ��ֲ�ͼʱ, ֹͣ�Զ��ֲ�
$('#ul-img').mouseover(function(){
    clearInterval(timer);//ֹͣ��ʱ��
    console.log(num+'�ر��ֲ�����');

    //����һ��, ��һ����ʾ����
    $('.left ').css('display', 'block');
    $('.right ').css('display', 'block');
});

//������: ������Ƴ��ֲ�ͼʱ, �����Զ��ֲ�
$('#ul-img').mouseout(function(){
    timer = setInterval(function(){
        num++;

        if(num > imgNum){
            num = 0;
        }
        $('#ul-img').animate({left: -num * ulWidth+'px'}, 1000);
        $('#dian-list div').eq(num).css('background', 'rgba(0,0,0,.5)').siblings().css('background', 'rgba(0,123,255,.6)');

        console.log(num+'�����ֲ�����');
    }, 2000);

    //����һ��, ��һ������
    $('.left').css('display', 'none');
    $('.right').css('display', 'none');
});

});
