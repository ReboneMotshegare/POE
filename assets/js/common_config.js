function mobileNavButton() {
    let navLinks = document.getElementById("nav-links");
    if (navLinks.style.display === "block") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "block";
    }

}

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(51.508742, -0.120850),
        zoom: 5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}


function postToGoogle() {
    debugger;
    var emailField = $("#email").val();
    $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfIoUM8Nqk5wDmgcO6QhS6ry8qDZNIOZfW6objSmXXx4Hx1jw/formResponse?",

        data: {
            "entry.517626622": emailField
        },
        type: "POST",
        dataType: "xml",
        success: function (d) {
            $('#contact').trigger('reset');
        },
        error: function (x, y, z) {
            $('#contact').trigger('reset');
        }
    });
    return false;
}
