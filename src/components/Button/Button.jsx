import PropTypes from 'prop-types';
import css from '../../styles/Styles.module.css';

export const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <button type="button" onClick={onLoadMore} className={css.button}>
      Load more
    </button>
  );
};

LoadMoreBtn.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
