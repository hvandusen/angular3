app.directive('borderOnHover', function() {
  return {
    restrict: 'A',
    link: function(scope, el, attr) {
      el.on('mouseenter',function(a){
        el.addClass('thick')
        console.dir(el)
      });
      el.on('mouseleave',function(a){
        el.removeClass('thick')
      });
    }

  }
})
