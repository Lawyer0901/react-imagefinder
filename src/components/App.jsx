import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import LargeImage from './LargeImage/LargeImage';

import ImageGallery from './ImageGallery/ImageGallery';
import { searchImage } from './api/api';

class App extends Component {
  state = {
    search: '',
    images: [],
    isLoading: false,
    error: null,
    page: 1,
    showModal: false,
    largeImage: null,
  };
  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      this.fetchImages();
    }
  }
  showLargeImage = largeImageURL => {};
  async fetchImages() {
    try {
      const { search, page } = this.state;
      this.setState({ isLoading: true });
      const data = await searchImage(search, page);
      this.setState(({ images }) => ({ images: [...images, ...data.hits] }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  }
  handleSubmit = ({ search }) => {
    this.setState({ search, images: [], page: 1 });
  };

  loadMore = () =>
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  render() {
    const { isLoading, error, images } = this.state;
    const { loadMore } = this;

    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} />;
        {isLoading && <p>...images is Loading</p>}
        {error && <p>{error}</p>}
        {images.length > 0 && <Button onClick={loadMore} />}
        <Modal>
          <LargeImage />
        </Modal>
      </>
    );
  }
}

export default App;
