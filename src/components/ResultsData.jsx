import React, { useContext } from "react";
import { AppContext } from "../contexts/context";
import ResultCard from "./ResultCard";

function ResultsData() {
  const { eventsData, query, queryType } = useContext(AppContext);

  if (
    eventsData == {} ||
    eventsData == undefined ||
    query == "" ||
    (eventsData.events == undefined && queryType == "city") ||
    (eventsData.events == undefined && queryType == "performer")
  ) {
    return <div className="results-data"> Search for an event </div>;
  }

  return (
    <div className="results-data">
      <h3>
        {eventsData.events.length} results for {query} in {queryType ? queryType : "general"} results 
      </h3>
      <div className="results-grid">
        {eventsData.events.map((event, index) => {
            return <ResultCard event={event} key={index} />;
        })}
      </div>

    </div>
  );
}

export default ResultsData;
