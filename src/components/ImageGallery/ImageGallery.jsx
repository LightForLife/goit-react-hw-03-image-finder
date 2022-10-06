import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from '../../styles/Styles.module.css';

export const ImageGallery = ({ images, onClickImg }) => {
  return (
    <ul className={css.gallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          webformatURL={image.webformatURL}
          largeImageURL={image.largeImageURL}
          onClickImg={onClickImg}
        />
      ))}
    </ul>
  );
};
