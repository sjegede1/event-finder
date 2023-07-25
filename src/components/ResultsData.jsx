import React, { useContext } from "react";
import { AppContext } from "../contexts/context";

function ResultsData() {
  const { eventsData, query, queryType } = useContext(AppContext);

  if (eventsData == {} || eventsData == undefined || query == "" || (eventsData.events == undefined && queryType == "city") || (eventsData.performers == undefined && queryType == "performer")) {
    console.log(eventsData)
    return <div className="results-data"> Search for an event </div>;
  }

  switch (queryType) {
    case "city":
      return (
        <div className="results-data">
          <h3>City Results</h3>
          {eventsData.events.map((venue, index) => {
            return (
              <p key={index}>
                {venue.title} <br /> {venue.type} <br />
                {venue.venue.city}: {venue.venue.name}
              </p>
            );
          })}
        </div>
      );
      break;
    case "performer":
      return (
        <div className="results-data">
          <h3>Performer Results: {eventsData.performers.length}</h3>
          {eventsData.performers.map((performer, index) => {
            return (
              <div key={index}>
                <p >{performer.name}</p>
                <img src={performer.image} alt="" />
              </div>
            );
          })}
        </div>
      );
    default:
      return (
        <div className="results-data">
          <h3>General Results</h3>
          {/* {eventsData.venues.map((venue, index) => {
                return <p key={index}>{venue.state}: {venue.name}</p>;
              })} */}
        </div>
      );
  }
}

export default ResultsData;
