// $(function() {
//     var pressed = false;
//     var start = undefined;
//     var startX, startWidth;
    
//     $("table th, table td").mousedown(function(e) {
//         start = $(this);
//         pressed = true;
//         startX = e.pageX;
//         startWidth = $(this).width();
//         $(start).addClass("resizing");
//     });
    
//     $(document).mousemove(function(e) {
//         if(pressed) {
//             var widthChange = e.pageX - startX;
//             $(start).width(startWidth + widthChange);
//             if ($(start).is("th")) {
//                 $(start).next("td").width(startWidth + widthChange);
//             } else {
//                 $(start).prev("th").width(startWidth + widthChange);
//             }
//         }
//     });
    
//     $(document).mouseup(function() {
//         if(pressed) {
//             $("table th, table td").removeClass("resizing");
//             pressed = false;
//         }
//     });
// });
$(document).ready(function(){
    $(function(){
      $("table").colResizable();
    });   
  });