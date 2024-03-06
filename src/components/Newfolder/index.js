import Component from 'react'

// const API_KEY = '6d6f95ec4ed55a708f3dfe1a3827c915'

class Home extends Component {
  state = {
    allMovies: [],
  }

  componentDidMount() {
    this.getMovieDetails()
  }

  getMovieDetails = async () => {
    const apiUrl =
      'https://api.themoviedb.org/3/movie/popular?api_key=24aec2338a8f5262121a9bf8e1dc3d91&language=en-US&page=1'

    const options = {
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      // console.log(response)
      const data = await response.json()
      this.setState({allMovies: data})

      // console.log(data)
    }
    // this.setState({allMovies: data})
  }

  render() {
    const {allMovies} = this.state
    console.log(allMovies)

    return (
      <>
        <h1>Welcome to movie page</h1>
      </>
    )
  }
}

export default Home

/*


import {useEffect, useState} from 'react'
import axios from 'axios'
import './index.css'

const GetDataComponnt = () => {
  const [dataLit, setDataList] = useState([])
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular`, {
        params: {
          api_key: '24aec2338a8f5262121a9bf8e1dc3d91',
          language: 'en-US',
          page: 1,
        },
      })
      .then(response => {
        const popularData = response.data.results
        // const details = popularData.map(each => ({
        //   id: each.id,
        //   originalLanguage: each.original_language,
        //   originalTitle: each.original_title,
        //   overview: each.overview,
        //   popularity: each.popularity,
        //   posterPath: each.poster_path,
        //   releaseDate: each.release_date,
        //   title: each.title,
        //   voteAverage: each.vote_average,
        //   voteCount: each.vote_count,
        // }))
        console.log(popularData[0]?.backdrop_path)
        setDataList(popularData)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const card = () => {
    return (
      <div>
        <h2>Top Rated Movies</h2>
        <img src="https://img.freepik.com/free-photo/view-3d-cinema-elements_23-2150720822.jpg" />
        <p>Title</p>
        <p>rating</p>
        <button>View</button>
      </div>
    )
  }

  return <div>{card()}</div>
}
export default GetDataComponnt

*/
