interface Step2Props {
  onNextStep: () => void;
  onPreviousStep: () => void;
}

export const Step2 = ({ onNextStep, onPreviousStep }: Step2Props) => {
  return (
    <div>
      <h2>Step2</h2>
      <button onClick={onPreviousStep}>Previous</button>
      <button onClick={onNextStep}>Next</button>
    </div>
  );
};
