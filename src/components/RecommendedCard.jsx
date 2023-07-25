import React from 'react'

function RecommendedCard({event}) {
  return (
    <div className="result-card" onClick={clickResultCard}>
    <h3 className="result-title">{event.short_title}</h3>
    <a href={event.url}> <img src={event.performers[0].image} alt="" className="performer-img" /> </a>

    <p>
        <a href={event.venue.url}>{event.venue.name}, {event.venue.city}, {event.venue.state}</a> <br />
        {(new Date(event.datetime_local)).getFullYear()}-{months[(new Date(event.datetime_local)).getMonth()]}-{(new Date(event.datetime_local)).getDate()}
    </p>
</div>
  )
}

export default RecommendedCard