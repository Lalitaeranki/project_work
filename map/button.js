var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        document.write( "Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    let lat=position.coords.latitude ;
    let longi=position.coords.longitude;
}
let pos=[lat,longi];