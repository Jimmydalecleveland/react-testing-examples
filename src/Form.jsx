import React from 'react';
import { Formik } from 'formik';

const Basic = ({ subby }) => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ fullname: '' }}
      onSubmit={subby}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <label htmlFor="fullname">
          Full Name
          <input
            id="fullname"
            type="text"
            name="fullname"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.fullname}
            required
          />

          </label>
          {errors.fullname && touched.fullname}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Basic;