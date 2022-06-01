import { getDefaultNormalizer, render } from '@testing-library/react';
import { Component, useEffect } from 'react';
import { useParams } from 'react-router-dom';

class Detail extends Component {
  // { id } = useParams();
  async componentDidMount() {
    // const { id } = this.props.match.params.id;
  }

  render() {
    return <h1>Detail</h1>;
  }
}

export default Detail;
