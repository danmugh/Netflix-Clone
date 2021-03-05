import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';

const base_url = 'https://image.tmdb.org/t/p/original/'

const Row = (props) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');

    useEffect(() => {
        async function fetchData() {
                 const request = await axios.get(props.fetchUrl);
                 setMovies(request.data.results)
                 return request;
             }
        fetchData();
    }, [props.fetchUrl]);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        }

    }

    const handleClick = (movie) => {
        console.log('movie  : ', movie)
        console.log('movie title : ', movie.title)
        console.log('movie name : ', movie.name)

        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(movie.title || movie.name )
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search)
                    console.log('urlParams', urlParams)
                    setTrailerUrl(urlParams.get('v'));
                })
                .catch(error => console.log( error))
        }
    }

    return (
        <div className='row'>
            <h2>{props.title}</h2>

            <div className='row__posters'>
                { movies.map(movie => (
                    <img
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        className={`row__poster ${props.isLargeRow && 'row__posterLarge'}`}
                        src={`${base_url}${ props.isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name} />
                )) }
            </div>
            {trailerUrl ? <YouTube videoId={trailerUrl} opts={opts}/> : null}
        </div>
    )
}

export default Row;