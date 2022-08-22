type SelectProps = {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  options: [
    {
      label: string;
    }
  ];
  handleChange: (
    id: string,
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
};

const Select = ({ id, label, options, handleChange }: SelectProps) => {
  return (
    <div>
      <label>{label}</label>
      <select onChange={(event) => handleChange(id, event)}>
        <option>どちらかを選んでください</option>
        {options.length > 0 &&
          options.map((option, i) => (
            <option value={option.label} key={i}>
              {option.label}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Select;
