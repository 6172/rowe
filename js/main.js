$(document).ready(function() {
    var nav = $('#nav');
    var panel = $('#rw-nav-panel');
    var subMenu, treeItem;

    nav.on('mouseenter', '.has-sub-tree', function() {
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

    panel.on('mouseleave', function(evt) {
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