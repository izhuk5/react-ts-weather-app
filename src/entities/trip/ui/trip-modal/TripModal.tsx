import { FC } from 'react';
import { v4 } from 'uuid';
import { AModal } from '@/components/ui';
import { useFormik } from 'formik';
import { useAppDispatch } from '@/store';
import { addTrip } from '@/store/tripsSlice';
import styles from './trip-modal.module.scss';

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

export const TripModal: FC<TripModalProps> = ({ isOpen, onClose }) => {
  const dispatch = useAppDispatch();

  const onSubmit = () => {
    const { values } = formik;

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

  const formik = useFormik({
    initialValues,
    onSubmit: onSubmit,
  });

  return (
    <AModal isOpen={isOpen} title="Add City" onClose={onClose} onConfirm={() => onSubmit()}>
      <form onSubmit={formik.handleSubmit} className={styles.tripForm}>
        <label>
          City
          <input
            name="city"
            placeholder="Berlin"
            onChange={formik.handleChange}
            value={formik.values.city}
          />
        </label>
        <label>
          Date From
          <input
            name="dateFrom"
            placeholder="2021-08-01"
            onChange={formik.handleChange}
            value={formik.values.dateFrom}
          />
        </label>
        <label>
          Date To
          <input
            name="dateTo"
            placeholder="2021-08-07"
            onChange={formik.handleChange}
            value={formik.values.dateTo}
          />
        </label>
        <label>
          Image URL
          <input
            name="image"
            placeholder="https://..."
            onChange={formik.handleChange}
            value={formik.values.image}
          />
        </label>
      </form>
    </AModal>
  );
};
