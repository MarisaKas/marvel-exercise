import React from 'react';

const Card = ({ id, name, description, thumbnail, extension, comics, series, stories, events }) => {
	  let flagComics;
	  let flagSeries;
	  let flagStories;
	  let flagEvents;
	  if (comics > 0) { flagComics = <p className='f5 pa1 b bg-yellow ba br3 w4 tl'>Comics: {comics}</p>;} else { flagComics = null }
	  if (series > 0) { flagSeries = <p className='f5 pa1 b bg-light-pink ba br3 w4 tl'>Series: {series}</p>;} else { flagSeries = null }
	  if (stories > 0) { flagStories = <p className='f5 pa1 b bg-light-blue ba br3 w4 tl'>Stories: {stories}</p>;} else { flagStories = null }
	  if (events > 0) { flagEvents = <p className='f5 pa1 b bg-light-green ba br3 w4 tl'>Events: {events}</p>;} else { flagEvents = null }
	  return (
	    <div style={{ width: '300px' }} className='tc grow bg-light-purple br3 pa3 ma2 dib bw2 shadow-5'>
	      <img style={{ width: '200px', height: 'auto' }} alt='characters' src={thumbnail + '.' + extension} />
	      <div>
	        <h2>{name}</h2>
	        <p>{description}</p>
	        {flagComics}
	        {flagSeries}
	        {flagStories}
	        {flagEvents}
	      </div>
	    </div>
	  );
}

export default Card;