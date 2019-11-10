import React, { Component } from 'react';
import './movies.css'

class Movies extends Component {
  constructor(){
    super()
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    fetch('/api/movies')
      .then(res => res.json())
      .then(movies => this.setState({movies}, () => console.log("movies fetched:", movies)))
  }

  render() {
    return (
      <div>
          <h2>Movies</h2>
      </div>
    )
  }

}

export default Movies
