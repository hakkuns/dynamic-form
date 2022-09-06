import React from 'react';
import Checkbox from '../elements/Checkbox';
import Input from '../elements/Input';
import Select from '../elements/Select';

type ElementProps = {
  question: {
    id: string;
    type: string;
    label: string;
    placeholder: string;
    value: boolean & string & number;
    options: [
      {
        label: string;
      }
    ];
  };

  handleChange: (
    id: string,
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
};

const Element = ({
  question: { type, id, label, placeholder, value, options },
  handleChange,
}: ElementProps) => {
  const content =
    {
      text: (
        <Input
          id={id}
          label={label}
          placeholder={placeholder}
          value={value}
          handleChange={handleChange}
        />
      ),
      checkbox: (
        <Checkbox
          id={id}
          label={label}
          value={value}
          handleChange={handleChange}
        />
      ),
      select: (
        <Select
          id={id}
          label={label}
          placeholder={placeholder}
          value={value}
          options={options}
          handleChange={handleChange}
        />
      ),
    }[type] ?? null;

  return <>{content}</>;
};

export default Element;
