import axios from 'axios';
import { Component } from 'react';

const params = {
  key: '29563076-116975c46708de5d99dfe50c3',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 12,
};

export class App extends Component {
  state = {
    searchQuery: '',
    currentPage: 1,
  };

  async componentDidMount() {
    try {
      const url = `https://pixabay.com/api/?q=${this.state.searchQuery}&page=${this.state.searchQuery}`;

      const responce = await axios.get(url, { params });
      console.log(responce.data.hits);
    } catch (error) {}
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        React homework template
      </div>
    );
  }
}
