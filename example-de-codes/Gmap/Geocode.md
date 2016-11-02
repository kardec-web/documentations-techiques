# Google map Geocode

*Limite des requête*
Free API limits are 2500 requests per 24 hour period, 5 requests per second

## Documentation
https://developers.google.com/maps/documentation/geocoding/start

# Depuis un code PHP
https://maps.googleapis.com/maps/api/geocode/json?key=YOUR_API_KEY&address=STREET_ADDRESS

``` PHP
curl = curl_init();

curl_setopt($curl, CURLOPT_URL, 'https://maps.googleapis.com/maps/api/geocode/json?address=' . rawurlencode($address));

curl_setopt ($curl, CURLOPT_RETURNTRANSFER, 1);

$json = curl_exec($curl);

curl_close ($curl);