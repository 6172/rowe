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

// 普通tab页切换
$(document).ready(function() {
    var nav = $('.tab-nav').children();
    var content = $('.tab-content').children();
    nav.on('click', function() {
        var index = $(this).index();
        nav.removeClass('on').eq(index).addClass('on');
        content.removeClass('on').eq(index).addClass('on');
    });
});

$(document).ready(function() {});
$(document).ready(function() {});
$(document).ready(function() {});
$(document).ready(function() {});
$(document).ready(function() {});
$(document).ready(function() {});