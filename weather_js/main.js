    $("document").ready(function () {
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=New York&units=imperial&appid=ef3e268cbe387a39c451c064de7ff0c1",
            success: function (data) {
                console.log(data);
                handleData(data)
            }
        });

        function handleData(data) {
            let temp = data.main.temp
            $("#temp-text").html(temp)
            
            if (temp>50){
                console.log('hot temperature')
                $("#temp-gif").html("<img src = 'img/hotTemp.gif'>")
            }else{
                console.log('cold temperature')
                $("#temp-gif").html("<img src = 'img/coldTemp.gif'>")
            }
            
            
            
            let weather = data.weather[0].main;
//            let weather = "Mist";
            console.log(weather)
            
            $("#weather-text").html("Today's Weather = "+weather)

            if (weather = "Rain"){
                $("#weather-gif").html("<img src = 'img/rainy.gif'>")
            }
            
            if (weather = "Snow"){
                $("#weather-gif").html("<img src = 'img/snowy.gif'>")
                
            if (weather = "Mist"){
                $("#weather-gif").html("<img src = 'img/misty.gif'>")
            }
//             if (weather = "Clear"){
//                 $("#weather-gif").html("<img src =
//                 'img/clear.gif>")
//             }
                
                
            }
        }
    })
