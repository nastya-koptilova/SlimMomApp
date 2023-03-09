import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { PersistFormikValues } from 'formik-persist-values';
import { Btn } from 'components/Btn/Btn';

import styles from './DailyCaloriesForm.module.scss';
import {
  dailyCaloriesAuth,
  dailyCaloriesRequest,
} from 'redux/dailyCalories/caloriesSlice';

import { Link, Navigate, useNavigate } from 'react-router-dom';
import { selectUserId } from 'redux/authorization/authSelectors';

export function DailyCaloriesForm({ handleModalOpen }) {
  const navigate = useNavigate();
  const userId = useSelector(selectUserId);
  const dispatch = useDispatch();

  const handleSubmit = values => {
    if (userId) {
      dispatch(dailyCaloriesAuth({ ...values, userId }));
      <Navigate to="/dairy" />;
      // navigate('/dairy');
    } else {
      dispatch(dailyCaloriesRequest(values));
      handleModalOpen();
    }
  };

  const validationsSchema = yup.object().shape({
    height: yup
      .number()
      .typeError('Повинно бути число')
      .min(100, 'Мінімальне значення 100 см')
      .max(220, 'Максимальне значення 220 см')
      .required("Обов'язкове поле"),
    age: yup
      .number()
      .typeError('Повинно бути число')
      .min(18, 'Мінімальне значення 18 років')
      .max(90, 'Максимальне значення 90 років')
      .required("Обов'язкове поле"),
    weight: yup
      .number()
      .typeError('Повинно бути число')
      .min(45, 'Мінімальне значення 45 кг')
      .max(200, 'Максимальне значення 200 кг')
      .required("Обов'язкове поле"),
    desiredWeight: yup
      .number()
      .typeError('Повинно бути число')
      .min(40, 'Мінімальне значення 40 кг')
      .max(200, 'Максимальне значення 200 кг')
      .required("Обов'язкове поле"),
    bloodType: yup.number().required('Обовязкове поле'),
  });

  return (
    <>
      <div>
        <Formik
          initialValues={{
            height: '',
            age: '',
            weight: '',
            desiredWeight: '',
            bloodType: '',
          }}
          validateOnBlur
          onSubmit={handleSubmit}
          validationSchema={validationsSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <Form className={styles.caloriesForm} onSubmit={handleSubmit}>
              <h1>Розрахуйте свою денну норму калорій прямо зараз</h1>
              <div className={styles.formContainerMain}>
                <div className={styles.formContainerLeft}>
                  <div className={styles.labelContainer}>
                    <InputField
                      label="Зріст *"
                      type="number"
                      name={'height'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.height}
                    />
                    <div className={styles.caloriesFormErrorContainer}>
                      {touched.height && errors.height && (
                        <p className={styles.caloriesFormError}>
                          {errors.height}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className={styles.labelContainer}>
                    <InputField
                      label="Вік *"
                      type="number"
                      name={'age'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.age}
                    />
                    <div className={styles.caloriesFormErrorContainer}>
                      {touched.age && errors.age && (
                        <p className={styles.caloriesFormError}>{errors.age}</p>
                      )}
                    </div>
                  </div>
                  <div className={styles.labelContainer}>
                    <InputField
                      label="Поточна вага *"
                      type="number"
                      name={'weight'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.weight}
                    />
                    <div className={styles.caloriesFormErrorContainer}>
                      {touched.weight && errors.weight && (
                        <p className={styles.caloriesFormError}>
                          {errors.weight}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className={styles.formContainerRight}>
                  <div className={styles.labelContainer}>
                    <InputField
                      label="Бажана вага *"
                      type="number"
                      name={'desiredWeight'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.desiredWeight}
                    />
                    <div className={styles.caloriesFormErrorContainer}>
                      {touched.desiredWeight && errors.desiredWeight && (
                        <p className={styles.caloriesFormError}>
                          {errors.desiredWeight}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className={styles.radioButtonContainer}>
                    <h3>Група крові *</h3>

                    <ul className={styles.radioButtonList}>
                      <RadioButton
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="bloodType"
                        value="1"
                        id="1-radio-button"
                      />
                      <RadioButton
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="bloodType"
                        value="2"
                        id="2-radio-button"
                      />
                      <RadioButton
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="bloodType"
                        value="3"
                        id="3-radio-button"
                      />
                      <RadioButton
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="bloodType"
                        value="4"
                        id="4-radio-button"
                      />
                    </ul>
                    <div className={styles.caloriesFormErrorContainer}>
                      {touched.bloodType && errors.bloodType && (
                        <p className={styles.caloriesFormError}>
                          {errors.bloodType}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* 
             {isLoggedIn ?  <div className={styles.form_button}><Link to='/dairy'>
             <Btn type="submit">Почати худнути</Btn>
              </Link></div> 
              :  
             <div className={styles.form_button}>
                <Btn type="submit">Почати худнути</Btn>
              </div>} */}
              <div className={styles.form_button}>
                <Btn type="submit">Почати худнути</Btn>
              </div>

              <PersistFormikValues name="calc-form" ignoreValues="bloodType" />
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
const InputField = ({ label, type, value, name, onChange, onBlur }) => (
  <label>
    <Field
      required
      type={type}
      value={value}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
    />
    <div className={styles.labelText}>{label}</div>
  </label>
);

const RadioButton = ({ name, value, id, onChange, onBlur }) => (
  <li>
    <Field
      type="radio"
      value={value}
      name={name}
      id={id}
      onChange={onChange}
      onBlur={onBlur}
    />
    <label htmlFor={id}>{value}</label>
    <div className={styles.check}>
      <div className={styles.inside}></div>
    </div>
  </li>
);
