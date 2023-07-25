import React, { useContext } from "react";
import ResultCard from "./ResultCard";
import { AppContext } from "../contexts/context";

function RecommendedAside() {
  const { recommendedEventsData, } = useContext(AppContext);

  if (recommendedEventsData == {} || recommendedEventsData == undefined) {
    return <aside className="recommended-asid">Recommended</aside>;
  }
  return (
    <h1>Recommended</h1>
  );
}

export default RecommendedAside;
