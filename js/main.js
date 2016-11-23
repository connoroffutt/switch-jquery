$(document).ready(function(){
  $('.switch').on('click', function() {
    if ($('body').attr('class') === 'light') {
    $('h1.status').text('GOOD NIGHT!');
    $('body').attr('class', 'dark');
    $('button').attr('class', 'off');
    } else {
    $('h1.status').text("ITS BEDTIME! TURN OUT THAT LIGHT!")
    $('body').attr('class', 'light');
    $('button').attr('class', 'on');
    }
  });
});
