import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';

const ArtistContext = createContext();

const ArtistProvider = ({children}) => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getArtist = async () => {
    const options = {
      method: 'GET',
      url: 'https://spotify23.p.rapidapi.com/search/',
      params: {
        q: 'Türkiye de popüler olanlar',
        type: 'artists',
        offset: '0',
        limit: '10',
        numberOfTopResults: '5',
      },
      headers: {
        'x-rapidapi-key': '7951ad4613msh3fb171e320948e2p165213jsn76faf5a2a96d',
        'x-rapidapi-host': 'spotify23.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      const data = response.data.artists.items;
      setArtists(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getArtist();
  }, []);

  return (
    <ArtistContext.Provider value={{artists, loading, error}}>
      {children}
    </ArtistContext.Provider>
  );
};

export {ArtistContext, ArtistProvider};
