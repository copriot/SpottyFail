import {createContext, useState} from 'react';

export const AlbumContext = createContext();

export const AlbumsProvider = ({children}) => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return <AlbumContext.Provider value={{}}>{children}</AlbumContext.Provider>;
};
