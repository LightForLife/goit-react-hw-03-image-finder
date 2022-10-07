import PropTypes from 'prop-types';
import css from '../../styles/Styles.module.css';

export const ImageGalleryItem = ({
  webformatURL,
  onClickImg,
  largeImageURL,
  tags,
}) => {
  return (
    <li className={css.gallery__item}>
      <img
        src={webformatURL}
        alt={tags}
        className={css.gallery__item_image}
        onClick={() => {
          onClickImg(largeImageURL, tags);
        }}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  onClickImg: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
