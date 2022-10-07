import PropTypes from 'prop-types';
import BeatLoader from 'react-spinners/BeatLoader';

// Стили для isLoading
const override = {
  display: 'block',
  margin: '0 auto',
};

export const Loader = ({ isLoading }) => {
  return (
    <BeatLoader
      color="#36d7b7"
      cssOverride={override}
      loading={isLoading}
      size={20}
      aria-label="Loading Spinner"
    />
  );
};

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
