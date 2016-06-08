$(document).ready(function() {
    // $('.esoe-search').on('click', function() {
    //     $('.esoe-search').css('padding', '10px 50px');
    // });
var paper_dict={'arr':[
{'url':'https://www.youtube.com','article':'有限誤差1','writer':'張瑞益'},
{'url':'https://www.youtube.com','article':'有限誤差1','writer':'張瑞益'},
{'url':'https://www.youtube.com','article':'有限誤差2','writer':'張瑞益'},
{'url':'https://www.youtube.com','article':'有限誤差3','writer':'張瑞益'},
{'url':'https://www.youtube.com','article':'有限誤差4','writer':'張瑞益'},
{'url':'https://www.youtube.com','article':'有限誤差5','writer':'張瑞益'},
{'url':'https://www.youtube.com','article':'影像處理0','writer':'丁肇榮'},
{'url':'https://www.youtube.com','article':'影像處理1','writer':'丁肇榮'},
{'url':'https://www.youtube.com','article':'影像處理2','writer':'丁肇榮'},
{'url':'https://www.youtube.com','article':'影像處理3','writer':'丁肇榮'},
{'url':'https://www.youtube.com','article':'影像處理4','writer':'丁肇榮'},
{'url':'https://www.youtube.com','article':'影像處理5','writer':'丁肇榮'},
]};
var dictionary={'arr':[
{'degree':'碩士','agent':'陳志昇','major':'數位學習','Grade':'碩1','picture':'url(../image/avatar02.jpg)'},
{'degree':'碩士','agent':'張哲瑜','major':'資料視覺化','Grade':'碩1','picture':'url(../image/avatar03.jpg)'},
{'degree':'碩士','agent':'陳延祥','major':'有限誤差','Grade':'碩1','picture':'url(../image/avatar04.jpg)'},
{'degree':'碩士','agent':'何怡','major':'偕同過濾','Grade':'碩1','picture':'url(../image/avatar05.jpg)'},
{'degree':'碩士','agent':'李育瑋','major':'有限誤差','Grade':'碩1','picture':'url(../image/avatar07.jpg)'},
{'degree':'碩士','agent':'莊昀諺','major':'機器學習','Grade':'碩1','picture':'url(../image/avatar08.jpg)'},
{'degree':'碩士','agent':'鄭力文','major':'前端工程','Grade':'碩1','picture':'url(../image/avatar09.jpg)'},
{'degree':'碩士','agent':'李佳謙','major':'股票投資','Grade':'碩1','picture':'url(../image/avatar10.jpg)'},
{'degree':'碩士','agent':'丁凡','major':'影像處理','Grade':'碩1','picture':'url(../image/avatar11.jpg)'}
]};
var dictionary_tea={'arr':[
{'degree':'博士','agent':'張瑞益','major':'多媒體網路','Grade':'教授','picture':'url(../image/avatar12.jpg)'},
{'degree':'博士','agent':'丁肇榮','major':'影像辨識','Grade':'教授','picture':'url(../image/avatar13.jpg)'},
]};
var ouput="";
var target="";

 
//dict=dictionary;
//append(dict);

    $('.esoe-search').focus(function() {
        $('.esoe-search').css('padding', '10px 50px');
    });
    $('.esoe-search').blur(function() {
        $('.esoe-search').css('padding', '10px 10px 10px 40px');
    });

$('.right-panel-rwd').on('click', function() {
   $('.dropdown-rwd').slideToggle();});

$( "#search").keyup(function() {
  target=$("#search").val();
      target_str=target.toString();
console.log(target_str);
var searchbar="";
          for(var i=0;i<paper_dict.arr.length;i++)
          {
             output=target_str.search(paper_dict.arr[i].writer.toString());
             console.log(output);  
             if(output!=-1)
  
             {
               searchbar+='<a href="'+paper_dict.arr[i].url.toString()+'">'+paper_dict.arr[i].article.toString()+'</a>';

             } 
          }//searchbar+="</ul>";
       $( "#search").after(searchbar);
          });






dict=dictionary;
   append(dict);

$('#teacher').on('click', function() {
   dict=dictionary_tea;
   append(dict);
   $(".title").html("成員介紹 / 老師");
});

$('#student').on('click', function() {
   dict=dictionary;
   append(dict);
    $(".title").html("成員介紹 / 碩士生");
});

//$(".card-list").append("<b>123123123</b>");




});

function append(dict)
{
var degree="";
var picture="";
var name="";
var major="";
var Grade="";
var other="";
var x='';
for(i=0;i<dict.arr.length;i++)
{
degree='<div class="card"><div class="card-content"><div class="card-degree">';//博士班
name='</div><div class="card-name">';//陳志昇
picture='</div><div class="card-image" style=" background-image: '+dict.arr[i].picture+';"></div><div class="card-email"><div class="email-name">email</div>';
major='<div class="email">shan@gmail.com</div></div><div class="card-domain"><div class="domain-name">領域</div><div class="domain">';//網路與數位教育
Grade='</div></div></div><div class="card-meta"><div class="card-meta-block"><i class="fa fa-graduation-cap" aria-hidden="true"></i><span>';//博七
other='</span></div><div class="card-meta-block md"><i class="fa fa-files-o" aria-hidden="true"></i><span>論文</span></div><div class="card-meta-block"><i class="fa fa-book red" aria-hidden="true"></i><span>研究</span></div></div></div>';
x+=degree+dict.arr[i].degree+name+dict.arr[i].agent+picture+major+dict.arr[i].major+Grade+dict.arr[i].Grade+other;
}
$("#list_append").html(x);




}   