import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import { GoSearch } from 'react-icons/go';
import css from '../../styles/Styles.module.css';

export const Searchbar = ({ onSubmit, isSubmitting }) => {
  const handleSubmit = (value, _) => {
    onSubmit(value.search.trim());
    // actions.resetForm();
  };

  return (
    <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
      <header className={css.searchbar}>
        <Form className={css.form}>
          <button
            type="submit"
            className={css.search__button}
            disabled={isSubmitting}
          >
            <GoSearch size={22} />
          </button>

          <Field
            className={css.search__input}
            type="text"
            placeholder="Search images and photos"
            name="search"
            autoComplete="off"
          />
        </Form>
      </header>
    </Formik>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
};
