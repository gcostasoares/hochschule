<?php

// Add your keys here
$apiKey = "";
$geolocationApiKey = "";

$uuid = $attributes["uuid"];

if (!isset($attributes["location"])) {
    $attributes["location"] = 'Hauptsitz';
}
$location = $attributes["location"];


if (!isset($attributes["street"])) {
    $attributes["street"] = 'Hauptstrasse';
}
$street = $attributes["street"];

if (!isset($attributes["number"])) {
    $attributes["number"] = '1';
}
$number = $attributes["number"];
if (!isset($attributes["zip"])) {
    $attributes["zip"] = '4001';
}
$zip = $attributes["zip"];

if (!isset($attributes["city"])) {
    $attributes["city"] = 'Basel';
}
$city = $attributes["city"];

if (!isset($attributes["email"])) {
    $attributes["email"] = '';
}
$email = $attributes["email"];

if (!isset($attributes["phone"])) {
    $attributes["phone"] = '';
}
$phone = $attributes["phone"];

if (!isset($attributes["colorLandscape"])) {
    $attributes["colorLandscape"] = '#FFFFFF';
}
$colorLandscape = $attributes["colorLandscape"];

if (!isset($attributes["colorRoad"])) {
    $attributes["colorRoad"] = '#808080';
}
$colorRoad = $attributes["colorRoad"];

if (!isset($attributes["colorWater"])) {
    $attributes["colorWater"] = '#0d3b66';
}
$colorWater = $attributes["colorWater"];

if (!isset($attributes["colorPoiPark"])) {
    $attributes["colorPoiPark"] = '#FFFFFF';
}
$colorPoiPark = $attributes["colorPoiPark"];

if (!isset($attributes["colorPoi"])) {
    $attributes["colorPoi"] = '#FFFFFF';
}
$colorPoi = $attributes["colorPoi"];

if (!isset($attributes["enableAdvancedMarker"])) {
    $attributes["enableAdvancedMarker"] = false;
}
$enableAdvancedMarker = $attributes["enableAdvancedMarker"];

?>
<div
    class="google-maps-color"
    data-map-colors
    data-map-colors-id="<?php echo $uuid; ?>"
    data-map-colors-landscape="<?php echo $colorLandscape; ?>"
    data-map-colors-road="<?php echo $colorRoad; ?>"
    data-map-colors-water="<?php echo $colorWater; ?>"
    data-map-colors-poi-park="<?php echo $colorPoiPark; ?>"
    data-map-colors-poi="<?php echo $colorPoi; ?>">
</div>
<div
    class="google-maps-wrapper"
    data-map
    data-map-id="<?php echo $uuid; ?>"
    data-api-key="<?php echo $apiKey; ?>"
    data-geolocation-api-key="<?php echo $geolocationApiKey; ?>"
    data-location="<?php echo $location; ?>"
    data-street="<?php echo $street; ?>"
    data-number="<?php echo $number; ?>"
    data-postal-code="<?php echo $zip; ?>"
    data-city="<?php echo $city; ?>"
    data-email="<?php echo $email; ?>"
    data-phone="<?php echo $phone; ?>">
</div>