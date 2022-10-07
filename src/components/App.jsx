import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Searchbar } from './Searchbar/Searchbar';
import { getImages, PER_PAGE } from '../api/Api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { LoadMoreBtn } from './Button/Button';
import css from '../styles/Styles.module.css';

export class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    currentPage: 1,
    isLoading: false,
    showModal: false,
    largeImageURL: '',
    tags: '',
    currentImgPerPage: null,
  };

  async componentDidUpdate(_, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    const prevCurrentPage = prevState.currentPage;
    const nextCurrentPage = this.state.currentPage;

    if (nextQuery === '') {
      toast.error(`Please enter text to search`);
      return;
    }

    if (prevQuery !== nextQuery || prevCurrentPage !== nextCurrentPage) {
      try {
        this.setState({ isLoading: true });

        const images = await getImages(nextQuery, this.state.currentPage);

        if (images.length === 0) {
          this.setState({ isLoading: false });
          toast.error(`Images ${this.state.searchQuery} not found`);
          return;
        }

        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          currentImgPerPage: images.length,
        }));
      } catch {
        toast.error('Failed to load images :(');
        // this.setState({ error: 'Failed to load images :(' });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  searchImages = searchText => {
    this.setState(() => ({
      images: [],
      currentPage: 1,
      searchQuery: searchText,
    }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  openModal = (largeImageURL, tags) => {
    this.toggleModal();

    this.setState(() => ({
      largeImageURL,
      tags,
    }));
  };

  loadMore = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  render() {
    const {
      isLoading,
      images,
      largeImageURL,
      tags,
      showModal,
      currentImgPerPage,
    } = this.state;

    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.searchImages} isSubmitting={isLoading} />

        {images.length > 0 && (
          <>
            <ImageGallery images={images} onClickImg={this.openModal} />
            {currentImgPerPage < PER_PAGE && (
              <h2 className={css.no__more}>No more pictures :(</h2>
            )}
          </>
        )}

        {showModal && (
          <Modal
            largeImageURL={largeImageURL}
            tags={tags}
            onClose={this.toggleModal}
          />
        )}

        <Loader isLoading={isLoading} />

        {currentImgPerPage === PER_PAGE && (
          <LoadMoreBtn onLoadMore={this.loadMore} />
        )}

        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 5000,
            style: {
              background: '#ff0000',
              color: '#fff',
            },
          }}
        />
      </div>
    );
  }
}
