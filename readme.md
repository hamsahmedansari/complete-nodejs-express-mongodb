# All That Matters a Web App

ALL THAT MATTER CLI APP into a web app

## Requirement

1. Make a app that show

   - Country name, region

   - TOP 5 news and

   - current weather in celsius of user location

2. User location will be based on IP address if no location is provided by user on command prompt

## Important Note

Make sure you show only relevant part of response received from every API and don’t forget to handle errors

## Tips

- Use accuweather [city search api](http://dataservice.accuweather.com/locations/v1/cities/search?apikey=LCQRbJLFlAVF6bTBJYdhy8drquSRmcfs&q=karachi) to get city key that can then be use to get 1 day [forecast](http://dataservice.accuweather.com/forecasts/v1/daily/1day/261158?apikey=LCQRbJLFlAVF6bTBJYdhy8drquSRmcfs)
- Use process.argv to directly get the city name, expect user to write node app karachi
- Use request-ip npm module to get client side ip
