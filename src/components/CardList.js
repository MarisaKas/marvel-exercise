import React from 'react';
import Card from './Card';

const CardList = ({ characters }) => {
  return (
    <div>
      {
        characters.map((character, i) => {
          return (
            <Card
              key={i}
              id={characters[i].id}
              name={characters[i].name}
              description={characters[i].description}
              thumbnail = {characters[i].thumbnail.path}
              extension = {characters[i].thumbnail.extension}
              comics = {characters[i].comics.available}
              series = {characters[i].series.available}
              stories = {characters[i].stories.available}
              events = {characters[i].events.available}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;