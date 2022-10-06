import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import * as Api from '../api/Api';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    searchQuery: '',
    currentPage: 1,
  };

  async componentDidMount() {
    try {
      // const searchImages = await Api.searchImages('react');
      // console.log(searchImages);
      // this.setState({ articles });
    } catch (error) {}
  }

  searchImages = async searchText => {
    console.log(searchText);
    this.setState({ isLoading: true });
    const searchImages = await Api.searchImages(searchText);

    this.setState(() => ({
      images: [...searchImages],
      isLoading: false,
    }));
  };

  render() {
    const { isLoading } = this.state;

    return (
      <div>
        {<Searchbar onSubmit={this.searchImages} />}
        {isLoading && <h1>Загружаю ...</h1>}

        {/* <Api /> */}
      </div>
    );
  }
}
