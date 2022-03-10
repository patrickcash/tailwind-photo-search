import React, {useEffect, useState} from 'react';

import PhotoCard from "./components/PhotoCard";
import SearchBox from './components/SearchBox';


function App() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${searchTerm}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setPhotos(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [searchTerm]);

  return (
    <div className="container mx-auto">
      <SearchBox searchText={text => setSearchTerm(text)} />

      {!isLoading && photos.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No photos found.</h1> }

      {isLoading ? <h1 className="text-5xl text-center mx-auto mt-32">Loading...</h1>  : <div className="grid grid-cols-4 gap-4">
        {photos.map(photo => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
      }
    </div>
  );
}

export default App;
