import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import * as Api from '../api/Api';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    currentPage: 1,
    isLoading: false,
  };

  async componentDidUpdate() {
    try {
      // const searchImages = await Api.searchImages('react');
      // console.log(searchImages);
      // this.setState({ articles });
    } catch (error) {}
  }

  searchImages = async searchText => {
    console.log(searchText);
    this.setState({ isLoading: true });

    try {
      const images = await Api.getImages(searchText, this.state.currentPage);

      this.setState(prevState => ({
        images: [...prevState.images, ...images],
      }));
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  openLargeImage(image) {
    console.log(image);
  }

  render() {
    const { isLoading, images } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.searchImages} isSubmitting={isLoading} />
        {isLoading && <h1>Загружаю ...</h1>}
        {images.length > 0 && (
          <ImageGallery images={images} onClickImg={this.openLargeImage} />
        )}

        {/* <Api /> */}
      </div>
    );
  }
}
