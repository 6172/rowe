// 实时搜索
$(document).ready(function() {
    // TOTO realtime search tips
    var searchBtn = $('#search-btn');
    var searchClose = $('#search-close');
    var searchPanel = searchBtn.next();
    var onSearch = false;
    var form = $('#search-form');
    var formResult = $('#search-form-result');

    function createItemHtml(text, link) {
        return '<li><a href="' + link + '" class="ellipsis">' + text + '</a></li>';
    }

    searchBtn.on('click', function(evt) {
        evt.stopPropagation();
        onSearch = true;
        searchPanel.height(80);
        searchPanel.find('input').focus();
    });

    searchClose.on('click', function() {
        onSearch = false;
        searchPanel.height(0);
    });

    $(document).on('click', function(evt) {
        if(onSearch && !searchPanel[0].contains(evt.target)) {
            searchPanel.height(0);
        }
    });

    form.on('submit', function(e) {
        e.preventDefault();

    });
});

// 首页
$(document).ready(function() {
    var figures = $('#rw-header-bg-wrap');
    var btns = $('.rw-header-btn');
    var sliderCtrl = $('#rw-slider');
    var thumbs = sliderCtrl.find('.rw-slider-thumb');
    var current = 0;

    $('#rw-slider').on('click', '.rw-slider-thumb', function() {
        current = $(this).data('index');
        $(this).addClass('on').siblings().removeClass('on');
        btns.hide().eq(current).show();
        figures.stop().animate({
            left : -current * 1 + '00%'
        }, 500);
    }).on('click', '.rw-slider-prev', function() {
        current = (current === 0) ? 2 : (current - 1);
        thumbs.removeClass('on').eq(current).addClass('on');
        btns.hide().eq(current).show();
        figures.stop().animate({
            left : -current * 1 + '00%'
        }, 500);
    }).on('click', '.rw-slider-next', function() {
        current = (current + 1) % 3;
        thumbs.removeClass('on').eq(current).addClass('on');
        btns.hide().eq(current).show();
        figures.stop().animate({
            left : -current * 1 + '00%'
        }, 500);
    });
});

// 首页视频
$(document).ready(function() {
    var videoList = $('#rw-view-video-list');
    var playerPanel = $('#video-player');
    var frame = playerPanel.find('iframe');
    var playerCloser = $('#video-close');

    videoList.on('click', '.rw-view-video-item-link', function(evt) {
        evt.preventDefault();
        frame.attr('src', this.href);
        playerPanel.fadeIn();
    });

    playerCloser.on('click', function() {
        playerPanel.fadeOut();
        frame.attr('src', '');
    });
});

// 可展开侧边导航（只允许一个展开）
$(document).ready(function() {
    var lastItem = null;
    $('.toggle-nav').on('click', '.toggle-trigger', function(e) {
        e.preventDefault();
        if(this === lastItem) {
            $(this)
                .next('.toggle-sub-nav')
                .slideToggle();
        }else {
            $(this)
                .next('.toggle-sub-nav')
                .slideDown()
                .end()
                .parent()
                .siblings()
                .find('.toggle-sub-nav')
                .slideUp();
        }
        lastItem = this;
    });

    $('.toggle-nav').children('.on').find('.toggle-trigger').trigger('click');
});

// 普通 tab 页切换，适合一页只有一个 tab
$(document).ready(function() {
    var nav = $('.tab-nav').children();
    var content = $('.tab-content').children();
    nav.on('click', function() {
        var index = $(this).index();
        nav.removeClass('on').eq(index).addClass('on');
        content.removeClass('on').eq(index).addClass('on');
    });
});

// ajax 表单
$(document).ready(function() {
    var autoValidate = false;
    if(document.body.style.transition !== undefined ||
        document.body.style.WebkitTransition !== undefined ||
        document.body.style.MozTransition !== undefined ||
        document.body.style.msTransition !== undefined) {
        autoValidate = true;
    };

    function submitForm(form) {
        var data = form.serializeArray(),
            url = form.data('action');
        $.ajax({
            method : 'POST',
            data : data,
            url : url,
            timeout : 5000
        }).done(function() {
            alert('提交成功，感谢反馈');
            form
                .find('input')
                .val('')
                .end()
                .find('textarea')
                .val('');
        }).fail(function() {
            alert('提交失败，请重试');
        });
    }

    function validateForm(form) {
        var requiredField = form.find('[required]'),
            validate = true;
        requiredField.each(function() {
            var field = $(this);
            if(field.val().replace(/\s/g, '') === '') {
                field.val('').focus();
                validate = false;
                alert('这行您还没填写哟');
            }
        });
        return validate;
    }

    $('.ajax-form').on('submit', function(e) {
        e.preventDefault();
        var form = $(this);
        if(autoValidate) {
            submitForm(form);
        }else {
            if(validateForm(form)) {
                submitForm(form);
            }
        }
    });
});

// 自由展开的栏目
$(document).ready(function() {
    $('.toogle-item').on('click', function() {
        $(this).toggleClass('on').next().slideToggle();
    });
});