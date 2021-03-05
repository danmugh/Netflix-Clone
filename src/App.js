import React, { Component } from 'react';
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Navbar"

import './App.css'

class App extends Component {
  render() {
    return (
      <div className='app'>
          <Nav/>
          <Banner/>
          <br/>
        <Row
            isLargeRow
            title="NETFLIX ORIGINALS"
            fetchUrl={requests.fetchNetflixOriginals} />
        <Row title="Trending now" fetchUrl={requests.fetchTrending} />
        <Row title="Actions Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

      </div>
    );
  }
}


export default App;
