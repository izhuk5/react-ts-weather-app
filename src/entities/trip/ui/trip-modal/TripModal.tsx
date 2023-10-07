import { FC } from 'react';
import { v4 } from 'uuid';
import { AModal } from '@/components/ui';
import { Formik, Field, Form } from 'formik';
import { useAppDispatch } from '@/store';
import { addTrip } from '@/store/tripsSlice';

interface TripModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const initialValues = {
  city: '',
  dateFrom: '',
  dateTo: '',
  image: '',
};

type Values = typeof initialValues;

export const TripModal: FC<TripModalProps> = ({ isOpen, onClose }) => {
  const dispatch = useAppDispatch();

  const onSubmit = (values: Values) => {
    dispatch(
      addTrip({
        city: values.city,
        dateFrom: values.dateFrom,
        dateTo: values.dateTo,
        image: values.image,
        id: v4(),
      }),
    );
  };

  return (
    <AModal isOpen={isOpen} onClose={onClose}>
      <div>
        <h1>Signup</h1>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form>
            <label>
              City
              <Field name="city" placeholder="Berlin" />
            </label>
            <label>
              Date From
              <Field name="dateFrom" placeholder="2021-08-01" />
            </label>
            <label>
              Date To
              <Field name="dateTo" placeholder="2021-08-07" />
            </label>
            <label>
              Image URL
              <Field name="image" placeholder="https://..." />
            </label>
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </AModal>
  );
};
