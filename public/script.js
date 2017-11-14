$(function() {
  console.log('load')


  // Toggle-on-click behaviour.
  $(document).on('click.fabClickToggle', '.fixed-action-btn.click-to-toggle > a', function (e) {
    var $this = $(this);
    var $menu = $this.parent();
    if ($menu.hasClass('active')) {
      closeFABMenu($menu);
    } else {
      openFABMenu($menu);
    }
  });


})

// $('.fixed-action-btn').openFAB();
// $('.fixed-action-btn').closeFAB();
// $('.fixed-action-btn.toolbar').openToolbar();
// $('.fixed-action-btn.toolbar').closeToolbar();
