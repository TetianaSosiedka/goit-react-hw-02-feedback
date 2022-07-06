import { Button } from './styled';

export const Buttons = ({ onCountFedback, buttonsName }) => {
  return (
    <div>
      {buttonsName.map(buttonName => {
        return (
          <Button
            type="button"
            data-name={buttonName}
            key={buttonName}
            onClick={onCountFedback}
          >
            {buttonName}
          </Button>
        );
      })}
    </div>
  );
};
