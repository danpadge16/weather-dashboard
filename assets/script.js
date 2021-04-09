$(document).ready(function(){
    $('#submit').click(function(){
        var city = $("#city").val();
        if(city != ''){
            $.ajax({
                url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + "APPID=2368c2726863bce51fad785625b8efbe",
                type: "GET",
                dataType: "jsonp"

            });

            }else{
                $("#error").html('Search function cannot be empty')
            }
    });

});