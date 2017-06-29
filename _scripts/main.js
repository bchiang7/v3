$(function() {

  const d = new Date();
  const hours = d.getHours();
  // after 7pm or before 7am
  const nighttime = ( hours >= 19 )  || ( hours <= 7 );

  if ( nighttime ) {
    $('#switch').prop( 'checked', true );
    $('body').addClass('night');
  }

  $('#toggle').click(function() {
    const isChecked = $('#switch').is(':checked');
    if ( isChecked ) {
      $('body').removeClass('night');
    } else {
      $('body').addClass('night');
    }
  });

});
