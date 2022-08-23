type Props = {
  setFormType: (type: string) => void;
};

const FormTypeDispatcher = ({ setFormType }: Props) => {
  return (
    <div className="dispatcher">
      <p>タイプを選ぶ</p>
      <button type="button" onClick={() => setFormType('text')}>
        Text
      </button>
      <button type="button" onClick={() => setFormType('checkbox')}>
        Checkbox
      </button>
      <button type="button" onClick={() => setFormType('select')}>
        Select
      </button>
    </div>
  );
};

export default FormTypeDispatcher;
