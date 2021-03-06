function mapsSelector() {
  var latlang=document.getElementById("latlng").value;
  if /* if we're on iOS, open in Apple Maps */
    ((navigator.platform.indexOf("iPhone") != -1) || 
     (navigator.platform.indexOf("iPod") != -1) || 
     (navigator.platform.indexOf("iPad") != -1))
    window.open('maps://maps.google.com/maps?daddr='+latlang+'&amp;ll=');

  else /* else use Google */
    window.open('https://maps.google.com/maps?daddr='+latlang+'&amp;ll=');
}
