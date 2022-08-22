type CheckboxProps = {
  id: string;
  label: string;
  value: boolean;
  handleChange: (
    id: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

const Checkbox = ({ id, label, value, handleChange }: CheckboxProps) => {
  return (
    <div>
      <input
        type="checkbox"
        id={id}
        checked={value}
        onChange={(event) => handleChange(id, event)}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Checkbox;
