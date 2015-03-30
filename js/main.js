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
        panel.stop().animate({
            height : itemHeight + 140
        }, 300);
    });

    panel.on('mouseleave', function(evt) {
        var relatedTarget = $(evt.relatedTarget);
        if(!relatedTarget.hasClass('has-sub-tree') && !relatedTarget.parent().hasClass('has-sub-tree')) {
            nav.removeClass('nav-on');
            panel.stop().animate({
                height : 0
            }, 300);
        }
        subMenu && subMenu.height(0);
        treeItem.removeClass('on'); 
    });
});