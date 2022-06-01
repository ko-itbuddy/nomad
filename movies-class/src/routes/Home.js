import { render } from '@testing-library/react';
import { useState, useEffect, Component } from 'react';
import { v4 as uuid } from 'uuid';
import Movie from '../components/Movie';
import styles from './Home.module.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movies: [],
    };
  }

  async componentDidMount() {
    await this.getMovies();
  }

  getMovies = async () => {
    const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year');
    const json = await response.json();
    this.setState({ movies: json.data.movies });
    this.setState({ loading: false });
  };

  render() {
    const { loading, movies } = this.state;
    return (
      <div className={styles.container}>
        {loading ? (
          <div className={styles.loader}>
            <span>Loading...</span>
          </div>
        ) : (
          <div className={styles.movies}>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}
export default Home;
