import {
  TextField,
  FormControl,
  Box,
  Checkbox,
  FormControlLabel,
  Button,
} from '@mui/material';
import { JSX } from 'react';
import { DevTool } from '@hookform/devtools';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import type { FormGoal, Goal } from '../../types/goal';
import ControlledTextField from './ControlledTextField';
import { styled } from '@mui/material/styles';
import { useMutation } from '@tanstack/react-query';
import { postNewGoal } from '../../api/goalsApi';
function AddGoalForm(): JSX.Element {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormGoal>({
    defaultValues: {
      title: '',
      description: '',
      category: '',
      isDone: false,
    },
  });

  const { mutate } = useMutation<Goal, Error, FormGoal, unknown>({
    mutationFn: (data: FormGoal): Promise<Goal> => {
      return postNewGoal(data);
    },
    onSuccess: (newGoal: Goal) => {
      console.log('created a new Goal', newGoal);
    },
    onError: (error: Error) => {
      console.log(error);
    },
  });

  //     {
  //   mutationFn: (data: FormGoal): Goal => {
  //     postNewGoal(data);
  //   },
  //   onError: (err: Error) => {
  //     console.log(err);
  //   },
  //   onSuccess: (newGoal: Goal) => {
  //     console.log('created a new object', newGoal);
  //   },
  // }

  // );

  const onSubmit: SubmitHandler<FormGoal> = (data: FormGoal) => mutate(data);

  const StyledButton = styled(Button)({
    justifyContent: 'flex-start',
  });
  return (
    <div>
      <Box marginBlock={2}>hello form!</Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" flexDirection="column">
          <FormControl disabled={isSubmitting} margin={'normal'}>
            <ControlledTextField
              control={control}
              name={'title'}
              rules={{ required: true }}
              label={'Title'}
              helperText={'Enter title'}
            />
            <ControlledTextField
              control={control}
              name={'description'}
              rules={{ required: true }}
              label={'Description'}
              helperText={'Describe your goal'}
            />
            <ControlledTextField
              control={control}
              name={'category'}
              rules={{ required: true }}
              label={'Category'}
              helperText={'choose goal category'}
            />
            <Box marginBottom={2}>
              <FormControlLabel
                required
                control={
                  <Controller
                    control={control}
                    name={'isDone'}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Checkbox
                        checked={value}
                        onChange={onChange}
                        onBlur={onBlur}
                      />
                    )}
                  />
                }
                label="Is Done"
              />
            </Box>
          </FormControl>
          <StyledButton type={'submit'}>Create a new goal</StyledButton>
        </Box>
      </form>
      <DevTool control={control} />
    </div>
  );
}

export default AddGoalForm;
