import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [query, setQuery] = useState("");
  const [URL, setURL] = useState(
    `https://api.seatgeek.com/2/venues?city=${query}&client_id=MzUxMzQ3NDV8MTY5MDIxMDg3Ni4wMzM0NDY2&client_secret=54ff34499e1de30d55b12348090f73527deafbb637cc69edf831681d1df80b56`
  );
  const [eventsData, setEventsData] = useState({});
  const [queryType, setQueryType] = useState("");

  const [recommendedURL, setRecommendedURL] = useState(`https://api.seatgeek.com/2/recommendations?client_id=MzUxMzQ3NDV8MTY5MDIxMDg3Ni4wMzM0NDY2`);
  const [recommendedEventsData, setRecommendedData] = useState({});

  const getURL = async () => {
    switch (queryType) {
      case "city":
        setURL(
          `https://api.seatgeek.com/2/events?venue.city=${query}&client_id=MzUxMzQ3NDV8MTY5MDIxMDg3Ni4wMzM0NDY2&client_secret=54ff34499e1de30d55b12348090f73527deafbb637cc69edf831681d1df80b56`
        );
        break;
      case "performer":
        setURL(
          `https://api.seatgeek.com/2/events?performers.slug=${query}&client_id=MzUxMzQ3NDV8MTY5MDIxMDg3Ni4wMzM0NDY2&client_secret=54ff34499e1de30d55b12348090f73527deafbb637cc69edf831681d1df80b56`
        );
        break;
      default:
        setURL(
          `https://api.seatgeek.com/2/events?q=${query}&client_id=MzUxMzQ3NDV8MTY5MDIxMDg3Ni4wMzM0NDY2&client_secret=54ff34499e1de30d55b12348090f73527deafbb637cc69edf831681d1df80b56`
        );
    }
  };

  const getQueryData = async () => {
    try {
      const response = await axios.get(URL);
      const data = await response.data;
      setEventsData(data);
    } catch (e) {
      console.error("Cant' get events API data", e);
    }
  };

  const getRecommendedData = async () => {
    try {
        const response = await axios.get(recommendedURL);
        const data = await response.data;
        setRecommendedData(data);
      } catch (e) {
        console.error("Couldn't get recommended API data", e);
      }
  }

  useEffect(() => {
    getURL();
  }, [query, queryType]);

  useEffect(() => {
    getQueryData();
  }, [URL]);

  useEffect(() => {
    console.log('RED',recommendedURL)
    getRecommendedData()
  },[recommendedURL])

  return (
    <AppContext.Provider
      value={{
        query,
        setQuery,
        URL,
        setURL,
        eventsData,
        setEventsData,
        queryType,
        setQueryType,
        recommendedURL,
        setRecommendedURL,
        recommendedEventsData,
        setRecommendedData,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

// 5. export our context provider
export default AppContextProvider;
