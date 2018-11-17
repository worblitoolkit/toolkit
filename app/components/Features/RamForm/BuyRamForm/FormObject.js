import React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import GridItem from 'components/Grid/GridItem';

import ToolForm from 'components/Tool/ToolForm';
import ToolInput from 'components/Tool/ToolInput';

import buyRamFormStyle from './buyRamFormStyle';
import { units } from './constants';

const FormData = [
  {
    id: 'name',
    label: 'Receiver',
    placeholder: 'Account that receives the RAM',
  },
  {
    id: 'owner',
    label: 'Payer',
    placeholder: 'Account that pays for the RAM',
  },
];

const eosInput = {
  id: 'eosQuantity',
  label: `Ram purchase (in ${units.WBI})`,
  placeholder: 'How much RAM to puchase',
};

const byteInput = {
  id: 'byteQuantity',
  label: `Ram purchase (in ${units.BYTE})`,
  placeholder: 'How much RAM to puchase',
};

const FormObject = props => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit, ...toggleProps } = props;
  const {
    unit: { isWBI, handleByteUnitChange, handleWBIUnitChange },
    classes,
  } = toggleProps;

  const formProps = {
    handleSubmit,
    submitColor: 'rose',
    submitText: 'Purchase',
  };
  return (
    <ToolForm {...formProps}>
      {FormData.map(form => {
        return <ToolInput key={form.id} {...form} {...props} />;
      })}
      <GridItem className={classes.radioContainer} xs={12} sm={12} md={6}>
        <span className={classes.radioLabel}>Purchase unit:</span>
        <FormControlLabel
          control={<Radio checked={isWBI} color="primary" onChange={handleWBIUnitChange} />}
          label="WBI"
        />
        <FormControlLabel
          control={<Radio checked={!isWBI} color="primary" onChange={handleByteUnitChange} />}
          label="bytes"
        />
      </GridItem>
      {isWBI ? <ToolInput {...eosInput} {...props} /> : <ToolInput {...byteInput} {...props} />}
    </ToolForm>
  );
};

export default withStyles(buyRamFormStyle)(FormObject);
