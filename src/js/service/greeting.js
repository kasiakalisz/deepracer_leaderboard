var Time_of_The_Day = new Date()
var hours = Time_of_The_Day.getHours()

if (hours >= 5 && hours <= 11)
//GREETING MESSAGE FOR MORNING
    document.write('<h2 style="text-align:left; margin:34px;">Good morning. <br><br> Intrested in  machine learning? <br><br>Join in40group AWS DeepRacer League</h2>')
else if (hours == 12)
//GREETING MESSAGE FOR NOON
    document.write('<h2 style="text-align:left; margin:34px;">Hello. <br>Intrested in  machine learning? <br><br> Join in40group AWS DeepRacer League! </h2>')
else if (hours >= 13 && hours <= 17)
//GREETING MESSAGE FOR AFTERNOON
    document.write('<h2 style="text-align:left; margin:34px;">Good Afternoon <br><br> Intrested in  machine learning? <br><br> Join in40group AWS DeepRacer League! </h2>')
else if (hours >= 18 && hours <= 20)
//MESSAGE FOR EVENING (6pm-8pm)
    document.write('<h2 style="text-align:left; margin:34px;">Good Evening <br> <br> Intrested in  machine learning? <br><br>Join in40group AWS DeepRacer League!</h2>')
else if (hours >= 21 && hours <= 24)
//GREETING MESSAGE FOR NIGHT (9pm-11pm)
    document.write('<h2 style="text-align:left; margin:34px;">Good Evening. <br><br> Intrested in  machine learning? <br><br>Join in40group DeepRacer League!</h2>')
else
//GREETING MESSAGE FOR LATE NIGHT (12pm-4am)
    document.write('<h2 style="text-align:left; margin:34px;">Hello Night Owl.<br><br>  Intrested in  machine learning? <br><br>Join in40group DeepRacer League!</h2>')