//前提宣言(複数のファンクションで使ったりするから)

function time(x){
    //宣言
    let now=new Date();
    let year=now.getFullYear();
    let month=now.getMonth()+1;
    let date=now.getDate();
    let day=now.getDay();
    let hh=now.getHours();
    let mm=("0"+now.getMinutes()).slice(-2);
    let ss=("0"+now.getSeconds()).slice(-2);
    let youbi=["日","月","火","水","木","金","土"][day];
    let zikan=document.getElementById('zikan');
    let apam=(hh<12)?"午前"+hh:"午後"+(hh-12);

    zikan.innerHTML=year+"年"+month+"月"+date+"日 "+youbi+"曜日\n"+apam+"時"+"("+hh+":"+mm+":"+ss+")";

    let wareki=["睦月","如月","弥生","卯月","皐月","水無月","文月","葉月","長月","神無月","霜月","師走"][month];
    let sekki=["立春","雨水","啓蟄","春分","清明","穀雨","立夏","小満","芒種","夏至","小暑","大暑","立秋","処暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至","小寒","大寒"];
    let=i;
    if(month==1){
        if(date<5){i=21}//冬至
        else if(4<date<21){i=22}//小寒
        else if(20<date){i=23}//大寒
    }
    if(month==2){
        if(date<4){i=23}//大寒
        else if(3<date<19){i=0}//立春
        else if(18<date){i=1}//雨水
    }
    if(month==3){
        if(date<5){i=1}//雨水
        else if(4<date<21){i=2}//啓蟄
        else if(20<date){i=3}//春分
    }
    if(month==4){
        if(date<5){i=3}//春分
        else if(4<date<20){i=4}//清明
        else if(19<date){i=5}//穀雨
    }
    if(month==5){
        if(date<5){i=5}//穀雨
        else if(4<date<21){i=6}//立夏
        else if(20<date){i=7}//小満
    }
    if(month==6){
        if(date<6){i=7}//小満
        else if(5<date<21){i=8}//芒種
        else if(20<date){i=9}//夏至
    }
    if(month==7){
        if(date<7){i=9}//夏至
        else if(6<date<23){i=10}//小暑
        else if(22<date){i=11}//大暑
    }
    if(month==8){
        if(date<8){i=11}//大暑
        else if(7<date<23){i=12}//立秋
        else if(22<date){i=13}//処暑
    }
    if(month==9){
        if(date<8){i=13}//処暑
        else if(7<date<23){i=14}//白露
        else if(22<date){i=15}//秋分
    }
    if(month==10){
        if(date<8){i=15}//秋分
        else if(7<date<24){i=16}//寒露
        else if(23<date){i=17}//霜降
    }
    if(month==11){
        if(date<7){i=17}//霜降
        else if(6<date<22){i=18}//立冬
        else if(21<date){i=19}//小雪
    }
    if(month==12){
        if(date<7){i=19}//小雪
        else if(6<date<21){i=20}//大雪
        else if(20<date){i=21}//冬至
    }
    kisetu.innerHTML="月和暦："+wareki+" 二十四節気："+sekki[i]



    /*
    2月4日頃
雨水（うすい）	1月中	2月19日頃
啓蟄（けいちつ）	2月節	3月5日頃
春分（しゅんぶん）	2月中	3月21日頃
清明（せいめい）	3月節	4月5日頃
穀雨（こくう）	3月中	4月20日頃*/

}

function calendar(){
 
};

