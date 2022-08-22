type InputProps = {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  handleChange: (
    id: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

const Input = ({ id, label, placeholder, value, handleChange }: InputProps) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        placeholder={placeholder ? placeholder : ''}
        value={value}
        onChange={(event) => handleChange(id, event)}
      />
    </div>
  );
};

export default Input;
