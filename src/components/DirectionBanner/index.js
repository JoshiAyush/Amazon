import React from "react";

import { amazon_urls } from "../../data.js";
import { DirectionBannerContainer } from "./style/DirectionBanner.js";

function ipLookUp() {
    fetch('https://extreme-ip-lookup.com/json/')
        .then(res => res.json())
        .then(response => {
            return response.country;
        })
        .catch((data, status) => {
            console.log("Failed to locate country using IP");
        })
}

function geoFindMe() {
    function success(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        reverseGeocodingWithGoogle(longitude, latitude)
    }
    function error() {
        console.log("Unable to retrieve your location");
    }
    navigator.geolocation.getCurrentPosition(success, error);
}

function reverseGeocodingWithGoogle(latitude, longitude) {
    let GOOGLE_MAP_KEY = "AIzaSyDSHCVlFsVPT1d77681owEDEuVCCf0bi34";
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAP_KEY}`)
        .then(res => res.json())
        .then(response => {
            console.log("User's Location Info: ", response)
        })
        .catch(status => {
            console.log("Request failed.  Returned status of", status)
        })
}

function geolocation() {
    return ipLookUp();
}

function getCountryDialingCode(country) {
    const codes = {
        "United States": "+1",
        "India": "+91",
        "Afghanistan": "+93",
        "Aland Islands": "+358",
        "Albania": "+355",
        "Algeria": "+213",
        "American Samoa": "+1",
        "Andorra": "+376",
        "Angola": "+244",
        "Anguilla": "+1",
        "Antigua and Barbuda": "+1",
        "Argentina": "+54",
        "Armenia": "+374",
        "Aruba": "+297",
        "Ascension Island": "+247"
    }

    return codes[country];
}

function getCountryLocation() {
    let country = geolocation();
    if (country in amazon_urls && country !== "United States") {
        return {
            country_name: country,
            country_url: amazon_urls[country],
            dialing_code: getCountryDialingCode(country)
        }
    } else {
        return {
            country_name: "United States",
            country_url: amazon_urls["United States"],
            dialing_code: getCountryDialingCode("United States"),
        }
    }
}

export function getCountryName() {
    return getCountryLocation().country_name;
}

export function getCountryMobileCode() {
    return getCountryLocation().dialing_code;
}

function DirectionBanner() {
    let country = getCountryName();

    const getCountryUrl = () => {
        ;
    }

    const getCountryDomain = () => {
        ;
    }

    if (country === "United States")
        return (
            <React.Fragment></React.Fragment>
        );
    else
        return (
            <DirectionBannerContainer>

                You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery.&nbsp;
                
                <DirectionBannerContainer.Link href={getCountryUrl}>
                
                    Click here to go to {getCountryDomain}
                
                </DirectionBannerContainer.Link>
            
            </DirectionBannerContainer>
        );
}

export default DirectionBanner;