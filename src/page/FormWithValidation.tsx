import {
  Checkbox,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Switch,
  TextField,
} from '@mui/material';
import React from 'react';
import { Controller, useForm, ValidationMode } from 'react-hook-form';
import { useParams } from 'react-router-dom';

let renderCount = 0;

const options = [
  { value: '犬', label: '犬' },
  { value: '猫', label: '猫' },
  { value: '牛', label: '牛' },
] as const;

const defaultValues = {
  Native: '',
  TextField: '',
  Select: '',
  Checkbox: false,
  switch: false,
  RadioGroup: '',
};

type Form = {
  Native: string;
  TextField: string;
  Select: string;
  Checkbox: boolean;
  switch: boolean;
  RadioGroup: string;
};

const FormWithValidation = () => {
  const { mode } = useParams();
  const methods = useForm<Form>({
    defaultValues,
    mode: mode as keyof ValidationMode,
  });
  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = methods;

  const [, setRerender] = React.useState(0);
  renderCount++;

  const rerender = () => setRerender(Math.random());

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  const onSubmit = (data: Form) => {
    console.log(data);
  };

  // Expression for validation
  const pattern1 = /^[a-zA-Z0-9]+$/;
  const pattern2 = /^[A-Za-z]+$/i;
  const pattern3 = /^[0-9]+$/;
  // Standard expression for email
  const pattern4 = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  // Standard expression for phone number
  const pattern5 = /^[0-9]{10}$/;
  // Standard expression for password
  const pattern6 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  // Standard expression for date
  const pattern7 =
    /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
  // Standard expression for time
  const pattern8 = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
  // Standard expression for length of string between 8 to 15
  const pattern9 = /^.{8,15}$/;
  // Standard expression for number between 1 to 100
  const pattern10 = /^([1-9]|[1-9][0-9]|100)$/;
  // Function to check if the array length is greater than 0
  const pattern11 = (value: string[], length: number) => value.length > length;
  // Function to check if the string length is between 2 to 5
  const pattern12 = (value: string, minLength: number, maxLength: number) =>
    value.length >= minLength && value.length <= maxLength;

  const patterns = {
    pattern1,
    pattern2,
    pattern3,
    pattern4,
    pattern5,
    pattern6,
    pattern7,
    pattern8,
    pattern9,
    pattern10,
    pattern11,
    pattern12,
  };

  type ValidationRules = {
    required: boolean;
    pattern?: {
      value:
        | 'date'
        | 'email'
        | 'password'
        | 'phone'
        | 'time'
        | 'url'
        | 'number'
        | 'string'
        | 'array'
        | RegExp;
      message: string;
    };
    minLength?: {
      value: number;
      message: string;
    };
    maxLength?: {
      value: number;
      message: string;
    };
    min?: {
      value: number;
      message: string;
    };
    max?: {
      value: number;
      message: string;
    };
    minNumberOfElements?: {
      value: number;
      message: string;
    };
    maxNumberOfElements?: {
      value: number;
      message: string;
    };
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container">
        <section id="input-checkbox">
          <label>MUI Checkbox</label>
          {['a', 'b', 'c', 'd'].map((name) => (
            <Controller
              name="Checkbox"
              control={control}
              rules={{ required: true }}
              render={({ field: props }) => (
                <Checkbox
                  {...props}
                  onChange={(e) => props.onChange(e.target.checked)}
                />
              )}
            />
          ))}
        </section>

        {errors.Checkbox && <p id="Checkbox">Checkbox Error</p>}
      </div>
      <section id="input-radio-group">
        <label>Radio Group</label>
        <Controller
          render={({ field }) => (
            <RadioGroup aria-label="gender" {...field} name="gender1">
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          )}
          rules={{ required: true }}
          name="RadioGroup"
          control={control}
        />
      </section>

      {errors.RadioGroup && <p id="RadioGroup">RadioGroup Error</p>}

      <section id="input-textField">
        <label>MUI TextField</label>
        <Controller
          render={({ field }) => <TextField {...field} />}
          name="TextField"
          control={control}
          rules={{ required: true, pattern: patterns.pattern1 }}
        />
      </section>

      {errors.TextField && <p id="TextField">TextField Error</p>}

      <section id="input-select">
        <label>MUI Select</label>
        <Controller
          render={({ field }) => (
            <Select {...field}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          )}
          rules={{ required: true }}
          name="Select"
          control={control}
        />
      </section>

      {errors.Select && <p id="Select">Select Error</p>}

      <section id="input-switch">
        <label>MUI Switch</label>
        <Controller
          name="switch"
          rules={{ required: true }}
          render={({ field: props }) => (
            <Switch
              {...props}
              onChange={(e) => props.onChange(e.target.checked)}
            />
          )}
          control={control}
        />
      </section>

      {errors.switch && <p id="switch">switch Error</p>}

      <span id="renderCount">{renderCount}</span>

      <button type="button" onClick={rerender}>
        Rerender
      </button>

      <button
        type="button"
        onClick={() => {
          reset({
            Native: '',
            TextField: '',
            Select: '',
            Checkbox: false,
            switch: false,
            RadioGroup: '',
          });
        }}
      >
        Reset Form
      </button>
      <button id="submit">submit</button>
    </form>
  );
};

export default FormWithValidation;
