import {
  TextField,
  FormControl,
  Box,
  Checkbox,
  FormControlLabel,
  Button,
} from '@mui/material';
import {JSX, useEffect} from 'react';
import { DevTool } from '@hookform/devtools';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import type { FormGoal, Goal } from '@shared';
import ControlledTextField from './ControlledTextField';
import { styled } from '@mui/material/styles';
import { useMutation,useQueryClient } from '@tanstack/react-query';
import { postNewGoal } from '../../api/goalsApi';
function AddGoalForm(): JSX.Element {

  const {
    watch,
    control,
    handleSubmit,
      reset,
    formState: { errors, isSubmitting },
  } = useForm<FormGoal>({
    defaultValues: {
      title: '',
      description: '',
      category: '',
      isDone: false,
    },
  });

  const queryClient = useQueryClient();

  const { mutate } = useMutation<Goal, Error, FormGoal, unknown>({
    mutationFn: (data: FormGoal): Promise<Goal> => {
      return postNewGoal(data);
    },
    onSuccess: (newGoal: Goal) => {

      console.log('created a new Goal', newGoal);
      queryClient.invalidateQueries({'queryKey':['goals']})
      reset()// we provided default values to use form already

    },
    onError: (error: Error) => {
      console.log('we have an error',error);
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

  useEffect(() => {
    console.log('Tracked value for isDone:', watch('isDone'));
  }, [watch('isDone')]);

  return (
    <div>
      <Box marginBlock={2}>hello form!</Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" flexDirection="column">
          <FormControl disabled={isSubmitting} margin={'normal'}>
            <ControlledTextField
              control={control}
              name={'title'}
              rules={{ required: "title is required" }}
              label={'Title'}
              helperText={'Enter title'}
            />
            <ControlledTextField
              control={control}
              name={'description'}
              rules={{ required: "description is required" }}
              label={'Description'}
              helperText={'Describe your goal'}
            />
            <ControlledTextField
              control={control}
              name={'category'}
              rules={{ required: "category is required" }}
              label={'Category'}
              helperText={'choose goal category'}
            />
            <Box marginBottom={2}>

                  <Controller
                    control={control}
                    name={'isDone'}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <FormControlLabel
                            required
                            label="Is Done"
                            control={
                      <Checkbox
                        checked={value}
                        onChange={(e)=>{
                          onChange(e.target.checked);}}
                        onBlur={onBlur}
                      />}
                  />
                    )}
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
