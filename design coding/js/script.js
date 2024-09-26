$(function() {
    // カルーセル
    $('.carousel').slick({
        fade: true,
        autoplay: true,
        dots: true,
        infinite: true,
        autoplaySpeed: 5000,
        arrows: false,
    });
    
    // セレクタ名（.pagetop）に一致する要素を取得
    const pagetop_btn = document.querySelector(".pagetop");

    // .pagetopをクリックしたら
    pagetop_btn.addEventListener("click", scroll_top);

    // ページ上部へスムーズに移動
    function scroll_top() {
        window.scroll({ top: 0, behavior: "smooth" });
    };

    // スクロールされたらTOPボタンを表示
    window.addEventListener("scroll", scroll_event);
    function scroll_event() {
    if (window.pageYOffset > 100) {
    pagetop_btn.style.opacity = "1";
    } else if (window.pageYOffset < 100) {
    pagetop_btn.style.opacity = "0";
    }
    };


    // コース画像モーダル表示イベント
    // $(".worksImg").click(function() {

    //     $("#grayDisplay").html($(this).prop("outerHTML"));
    //     $("#grayDisplay").fadeIn(100);
    //     return false;
    // });

    // コース画像モーダル非表示イベント
    // モーダル画像背景 または 拡大画像そのものをクリックで 
    // $("#grayDisplay").fadeOut(100);
    // return false;

    $(document).ready(function() {
        $('.worksImg').on('click', function() {
            var imgSrc = $(this).attr('src'); // クリックした画像のsrc属性を取得
            $('#modal-image').attr('src', imgSrc); // モーダルの画像部分にsrcを設定
            $('.modal').fadeIn(); // モーダルをフェードイン
        });
    
        $('.close-modal').on('click', function() {
            $('.modal').fadeOut(); // モーダルをフェードアウト
        });
    
        // 閉じるボタンをクリックしたときの処理
        $('.close-modal').on('click', function(e) {
            e.preventDefault(); // デフォルトのリンク動作を防ぐ
            $('.modal').fadeOut(); // モーダルをフェードアウト
        });

        // モーダルの外をクリックしたら閉じる
        $('.modal').on('click', function(e) {
            if (e.target === this) {
                $(this).fadeOut(); // モーダルをフェードアウト
            }
        });
    });
    



    // sectionフェードイン
    // スクロールイベントを設定
    $(window).on('scroll', function() {
        $('.section').each(function() {
            var sectionTop = $(this).offset().top; // セクションの上からの位置を取得
            var scrollTop = $(window).scrollTop(); // スクロール量を取得
            var windowHeight = $(window).height(); // ブラウザの表示領域の高さを取得

            // スクロール量がセクションの位置を超えた場合
            if (scrollTop + windowHeight > sectionTop) {
                $(this).addClass('visible'); // visibleクラスを追加
            }
        });
    });

    // 最初のロード時にフェードインさせるため
    $(window).trigger('scroll'); // スクロールイベントを手動でトリガー
    
});
