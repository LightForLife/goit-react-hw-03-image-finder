import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FiPlusCircle } from 'react-icons/fi';
import css from '../../styles/Styles.module.css';

export const Searchbar = ({ onSubmit, isSubmitting }) => {
  const handleSubmit = (value, actions) => {
    onSubmit(value.search.trim());
    actions.resetForm();
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
            <FiPlusCircle size={22} />
          </button>

          <Field
            className={css.search__input}
            type="text"
            placeholder="Search images and photos"
            name="search"
          />
        </Form>
      </header>
    </Formik>
  );
};
