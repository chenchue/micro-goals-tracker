import { JSX } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import { Box, TextField } from '@mui/material';
import type { FormGoal } from '../../types/goal';

interface TextFieldProps extends UseControllerProps<FormGoal> {
  label: string;
  helperText: string;
}

function ControlledTextField(props: TextFieldProps): JSX.Element {
  const { field, fieldState } = useController(props);
  const { label, helperText } = props;
  return (
    <Box marginBottom={2}>
      <TextField
        {...field}
        error={!!fieldState.error}
        label={label}
        helperText={helperText}
      />
    </Box>
  );
}

export default ControlledTextField;
