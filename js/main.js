// 导航特效
$(document).ready(function() {
    var nav = $('#nav');
    var panel = $('#rw-nav-panel');
    var subMenu, treeItem;

    nav.on('mouseover', '.has-sub-tree', function() {
        var subMenuItem, itemHeight;
        treeItem = $(this);
        subMenu = treeItem.find('.rw-sub-nav');
        subMenuItem = subMenu.find('ul');
        itemHeight = subMenuItem.height();
        subMenu.height(itemHeight);
        nav.addClass('nav-on');
        treeItem.addClass('on').siblings().removeClass('on');
        panel.height(itemHeight + 140);
    });

    panel.on('mouseout', function(evt) {
        var relatedTarget = $(evt.relatedTarget);
        if(!relatedTarget.hasClass('has-sub-tree') && !relatedTarget.parent().hasClass('has-sub-tree')) {
            nav.removeClass('nav-on');
            panel.height(0);
        }
        subMenu && subMenu.height(0);
        treeItem.removeClass('on'); 
    });

    var searchBtn = $('#search-btn');
    var searchClose = $('#search-close');
    var searchPanel = searchBtn.next();
    var onSearch = false;

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

// 可展开侧边导航
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

$(document).ready(function() {});
$(document).ready(function() {});
$(document).ready(function() {});
$(document).ready(function() {});
$(document).ready(function() {});