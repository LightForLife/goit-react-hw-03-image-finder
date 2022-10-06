import css from '../../styles/Styles.module.css';

export const ImageGalleryItem = ({
  addLargeImage,
  webformatURL,
  onClickImg,
  largeImageURL,
}) => {
  return (
    <li className={css.gallery__item}>
      <img
        src={webformatURL}
        alt=""
        className={css.gallery__item_image}
        onClick={() => {
          onClickImg(largeImageURL);
        }}
      />
    </li>
  );
};
