export const apiCall = (link) => fetch(link)
  .then(response => response.json())
  .then((resObj) => {
      try {
        if (resObj.code === 200) {
            return {
              characters: resObj.data.results
            };
        } else {
          throw new Error(`Marvel API bad response. Status code ${resObj.code}.`);
        }
      } catch (e) {
        console.error(e);
        return {
          characters: [],
        };
      }
    });
