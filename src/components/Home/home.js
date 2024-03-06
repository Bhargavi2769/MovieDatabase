import React, {Component} from 'react'

import './index.css'

class GetDataComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataList: [],
      topMovie: [],
      upcomingMovie: [],
      singleMovie: [],
      searchedMovie: [],
      searchText: '',
    }
  }

  componentDidMount() {
    this.getPopularMoviesURL()
    // this.getTopRatedMovies()
    // this.getUpcomingMovies()
    // this.getSingleMovie()
    // this.getSearcheddMovie()
  }

  getPopularMoviesURL = async () => {
    const apiUrl =
      'https://api.themoviedb.org/3/movie/popular?api_key=24aec2338a8f5262121a9bf8e1dc3d91&language=en-US&page=1'

    const options = {
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      // console.log(response)
      const data = await response.json()
      const format = data.results

      console.log('data : ', format)
      this.setState({dataList: format})
    }

    /*
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=24aec2338a8f5262121a9bf8e1dc3d91&language=en-US&page=1`,
    )
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({dataList: data.results})
      })
      .catch(error => {
        console.log(error)
      })
      */
  }

  /*

  getTopRatedMovies = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=24aec2338a8f5262121a9bf8e1dc3d91&language=en-US&page=1`,
    )
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({topMovie: data.results})
      })
      .catch(error => {
        console.log(error)
      })
  }

  getUpcomingMovies = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=24aec2338a8f5262121a9bf8e1dc3d91&language=en-US&page=1`,
    )
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({upcomingMovie: data.results})
      })
      .catch(error => {
        console.log(error)
      })
  }

  getSingleMovie = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=24aec2338a8f5262121a9bf8e1dc3d91&language=en-US&page=1`,
    )
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({singleMovie: data.results})
      })
      .catch(error => {
        console.log(error)
      })
  }

  getSearchedMovie = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie/?api_key=24aec2338a8f5262121a9bf8e1dc3d91&language=en-US&page=1`,
    )
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({searchedMovie: data.results})
      })
      .catch(error => {
        console.log(error)
      })
  }

  

  getSearchedMovie = () => {
    console.log(this.state.searchText)
    fetch(
      `https://api.themoviedb.org/3/search/movie/?api_key=24aec2338a8f5262121a9bf8e1dc3d91&language=en-US&query=${this.state.searchText}&page=1`,
    )
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({searchedMovie: data.results})
      })
      .catch(error => {
        console.log(error)
      })
  }

  */

  searchStarted = event => {
    this.setState({
      searchText: event.target.value,
    })
  }

  render() {
    const {dataList, searchText} = this.state
    return (
      <div>
        <h1>movieDB</h1>
        <div className="search-container">
          <input
            type="text"
            value={searchText}
            placeholder="Search"
            className="search-bar"
            onChange={this.searchStarted}
          />
          <button type="button">Search</button>
        </div>

        <h1>Popular Movies</h1>
        {dataList.map(movie => (
          <div key={movie.id}>
            <img src={movie.poster_path} alt={movie.title} />
            <p>{movie.title}</p>
            <p>Rating: {movie.vote_average}</p>
            <button type="button">View Details</button>
          </div>
        ))}
        <h1>Top Rated</h1>
        <h1>Upcoming</h1>
      </div>
    )
  }
}

export default GetDataComponent
