$(function(){
  $('#vider-element').each(function() {
    var videBg = $(this).attr('data-vide-bg');
    $(this).vide(videBg);
  });
});
