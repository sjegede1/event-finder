import React, { useContext } from "react";
import { AppContext } from "../contexts/context";

function ResultCard({event}) {
    let { setRecommendedURL } = useContext(AppContext)
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    const clickResultCard = () => {
        setRecommendedURL(`https://api.seatgeek.com/2/recommendations?events.id=${event.id}&postal_code=${event.venue.postal_code}&client_id=MzUxMzQ3NDV8MTY5MDIxMDg3Ni4wMzM0NDY2&client_secret=54ff34499e1de30d55b12348090f73527deafbb637cc69edf831681d1df80b56`);
        console.log(event.id, event.venue.postal_code)
    }
    
  return (
    <div className="result-card" onClick={clickResultCard}>
        <h3 className="result-title">{event.short_title}</h3>
        <a href={event.url}> <img src={event.performers[0].image} alt="" className="performer-img" /> </a>

        <p>
            <a href={event.venue.url}>{event.venue.name}, {event.venue.city}, {event.venue.state}</a> <br />
            {(new Date(event.datetime_local)).getFullYear()}-{months[(new Date(event.datetime_local)).getMonth()]}-{(new Date(event.datetime_local)).getDate()}
        </p>
        <p className="event-details">
            {event.performers.map((performer,index) => <a href={performer.url} key={index}>{`${performer.name},`}</a>)} <br />
            <i>{event.taxonomies.map(category => `${category.name} `)}</i>
        </p>

    </div>
  );
}

export default ResultCard;
