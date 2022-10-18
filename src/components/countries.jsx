import React, { useEffect, useState } from "react";
import axios from "axios";
// import Cbtn from "./Cbtn";

function Countries(){

    const [countryList, setCountry] = useState()

    useEffect(() => {
        axios.get("https://countriesnow.space/api/v0.1/countries")
        .then((response) => {
            console.log(response.data.data)
            setCountry(response.data.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    return (
        <div>asdf</div>
        // countryList.map((country) => 
        //     <Cbtn key={country.id} name = {country.countyr} />
        // )
    )
}

export default Countries