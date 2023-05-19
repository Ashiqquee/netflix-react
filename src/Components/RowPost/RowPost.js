import React, { useEffect, useState } from 'react'
import './RowPost.css'
import Youtube from 'react-youtube';
import axios from '../../axios'
import { imageUrl, API_KEY } from '../../constants/constants'
function RowPost(props) {
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };
  const [urlId, setId] = useState('');
  const [movies, setMovies] = useState([]);
  const [showVideo, setShowVideo] = useState(false);
  useEffect(() => {
    axios.get(props.url).then((response) => {
      setMovies(response.data.results)
    }).catch((err) => {

    })
  }, [props.url]);
  const handleCloseVideo = () => {
    setId('');
    setShowVideo(false);
  };

  const handleMOvieTrailer = (id) => {
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
      if (response.data.results.length !== 0) {
        setShowVideo(true)
        setId(response.data.results[0].key)
      } else {
        console.log("trailer not available");
      }
    }).catch((err) => {
      console.log(err);
    })
  };

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((movie) =>
          <img onClick={() => handleMOvieTrailer(movie.id)} key={movie.id} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl + movie.backdrop_path}`} alt="poster" />
        )}
      </div>
      {showVideo && (
        <div>
          <Youtube opts={opts} videoId={urlId} />
          <p onClick={handleCloseVideo}><i class="fa-regular fa-circle-xmark"></i></p>
        </div>
      )}
    </div>
  )
}

export default RowPost