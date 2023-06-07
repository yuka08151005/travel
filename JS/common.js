'use strict';


// hamburger
const ham = $('#js-hamburger');
const nav = $('#js-nav');
ham.on('click', function () { //ハンバーガーメニューをクリックしたら・・
  ham.toggleClass('active'); // #js-hamburgerににactiveクラスを着脱
  nav.toggleClass('active'); // #js-navにactiveにクラスを着脱
});

// $('#js-hamburger').on('click', function () {
//   $('#js-hamburger').toggleClass('active');
// });


// slider

$('.slider').slick({
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  slidesToShow: 3,//スライドを画面に3枚見せる
  slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
  prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
  dots: true,//下部ドットナビゲーションの表示
  responsive: [
    {
    breakpoint: 769,//モニターの横幅が769px以下の見せ方
    settings: {
      slidesToShow: 2,//スライドを画面に2枚見せる
      slidesToScroll: 1,//1回のスクロールで2枚の写真を移動して見せる
    }
  },
  {
    breakpoint: 426,//モニターの横幅が426px以下の見せ方
    settings: {
      slidesToShow: 1,//スライドを画面に1枚見せる
      slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    }
  }
]
});

// faq

$(function () {
  /*タイトルをクリックすると*/
  $(".js-faq-title").on("click", function() {
 /*クリックした隣の要素を開閉する*/
    $(this).next().slideToggle(200);
/*タイトルにopenクラスの追加、削除を行って矢印の向きを変える*/
    $(this).toggleClass("open",200);
  });
});


// window
function disp(url){
 window.open(url, "window_name", "width=750,height=500,top=200,left=50,scrollbars=yes");
}
