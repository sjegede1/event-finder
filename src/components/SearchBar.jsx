import React, { useContext } from "react";
import { AppContext } from "../contexts/context";

function SearchBar() {
    const {setQuery , queryType, setQueryType } = useContext(AppContext)

    // Set radioValue using some state
    const findRadioValue = (radios) => {
        let selectedRadio = queryType;
        radios.forEach((radio) => {
            selectedRadio = radio.checked ? radio.value : selectedRadio;
        })
        return selectedRadio.split(" ").join("-")
    }
    const searchForEvents = (event) => {
        event.preventDefault()
        let textInput = event.target.querySelector("#search-input")
        setQuery(textInput.value)
        // textInput.value = ""
        let queryTypeRadios = event.target.querySelectorAll("input.query-type");
        console.log(findRadioValue(queryTypeRadios))
        setQueryType(findRadioValue(queryTypeRadios))
    }
  return (
    <form className="search-bar-form" onSubmit={searchForEvents}>
      <input
        type="text"
        placeholder="Find your next event..."
        name="search-input" id="search-input"
      />
      <input type="submit" value="Search" />
      <br />
      <input type="radio" name="query-type" id="city" value="city" className="query-type" />
      <label htmlFor="city">city</label>
      <input type="radio" name="query-type" id="performer" value="performer" className="query-type" />
      <label htmlFor="performer">performer</label>
    </form>
  );
}

export default SearchBar;
