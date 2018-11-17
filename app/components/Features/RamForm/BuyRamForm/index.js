/**
 *
 * BuyRamForm
 *
 */

import React from 'react';
import { compose, withStateHandlers, mapProps } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import AddCircle from '@material-ui/icons/AddCircle';
import ToolBody from 'components/Tool/ToolBody';

import FormObject from './FormObject';

const makeTransaction = (values, isWBI) => {
  const type = isWBI
    ? {
      quant: `${Number(values.eosQuantity)
          .toFixed(4)
          .toString()} WBI`,
    }
    : { bytes: Number(values.byteQuantity) };

  const transaction = [
    {
      account: 'eosio',
      name: isWBI ? 'buyram' : 'buyrambytes',
      data: {
        payer: values.owner,
        receiver: values.name,
        ...type,
      },
    },
  ];
  return transaction;
};

const validationSchema = ({ unit: { isWBI } }) => {
  const eosQuantity = Yup.number().positive('You must pay a positive quantity');
  const byteQuantity = Yup.number()
    .positive('RAM must be a positive quantity')
    .integer('RAM cannot be fractional');

  return Yup.object().shape({
    owner: Yup.string().required('Payer name is required'),
    name: Yup.string().required('Account name is required'),
    byteQuantity: isWBI ? byteQuantity : byteQuantity.required('RAM purchase is required'),
    eosQuantity: !isWBI ? eosQuantity : eosQuantity.required('RAM purchase is required'),
  });
};

const BuyRamForm = props => {
  return (
      <ToolBody color="warning" icon={AddCircle} header="Buy RAM">
        <FormObject {...props} />
      </ToolBody>
  );
};

const enhance = compose(
  withStateHandlers(
    {
      isWBI: true,
    },
    {
      handleByteUnitChange: () => () => ({
        isWBI: false,
      }),
      handleWBIUnitChange: () => () => ({
        isWBI: true,
      }),
    }
  ),
  mapProps(({ isWBI, handleByteUnitChange, handleWBIUnitChange, ...otherProps }) => ({
    unit: {
      isWBI,
      handleByteUnitChange,
      handleWBIUnitChange,
    },
    ...otherProps,
  })),
  withFormik({
    handleSubmit: (values, { props, setSubmitting }) => {
      const {
        pushTransaction,
        unit: { isWBI },
      } = props;
      setSubmitting(false);
      const transaction = makeTransaction(values, isWBI);
      setSubmitting(false);
      pushTransaction(transaction,props.history);
    },
    mapPropsToValues: props => ({
      byteQuantity: 8192,
      owner: props.networkIdentity ? props.networkIdentity.name : '',
      eosQuantity: 1,
      isWBI: props.unit.isWBI,
      name: '',
    }),
    validationSchema,
  })
);

export default enhance(BuyRamForm);
