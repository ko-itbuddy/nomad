import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';

export default function Movie({
  id, coverImg, title, summary, genres,
}) {
  return (
    <div key={id}>
      <img src={coverImg} alt="thumbnail" />
      <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
