import { useState } from 'react';
import questions from '../../data/question.json';

const useElement = () => {
  const [elements, setElements] = useState(questions);

  const handleChange = (elementId: string, event: any) => {
    const newElements = { ...elements };
    newElements.questions.forEach((question) => {
      const { type, id } = question;
      if (elementId === id) {
        switch (type) {
          case 'checkbox':
            question['value'] = event.target.checked;
            break;
          default:
            question['value'] = event.target.value;
            break;
        }
      }
      setElements(newElements);
    });
    console.log(elements);
  };

  return { handleChange, elements };
};

export default useElement;
