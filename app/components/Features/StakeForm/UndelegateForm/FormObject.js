import React from 'react';

import ToolForm from 'components/Tool/ToolForm';
import ToolInput from 'components/Tool/ToolInput';

const FormData = [
  {
    id: 'name',
    label: 'Stake Holder',
    placeholder: 'Account that holds the stake',
  },
  {
    id: 'owner',
    label: 'Stake Owner',
    placeholder: 'Account that controls the stake',
  },
  {
    id: 'cpu',
    label: 'CPU Stake (in WBI)',
    placeholder: 'How much WBI to unstake',
  },
  {
    id: 'net',
    label: 'Net Stake (in WBI)',
    placeholder: 'How much WBI to unstake',
  },
];

const FormObject = props => {
  const { handleSubmit } = props;
  const formProps = {
    handleSubmit,
    submitColor: 'rose',
    submitText: 'Undelegate',
  };
  return (
    <ToolForm {...formProps}>
      {FormData.map(form => {
        return <ToolInput key={form.id} {...form} {...props} />;
      })}
    </ToolForm>
  );
};

export default FormObject;
