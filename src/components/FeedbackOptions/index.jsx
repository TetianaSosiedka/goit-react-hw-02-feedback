import PropTyprs from 'prop-types';

import { Button } from './styled';

export const FeedbackOptions = ({ onLeaveFeedback, buttonsName }) => {
  return (
    <div>
      {buttonsName.map(buttonName => {
        return (
          <Button
            type="button"
            data-name={buttonName}
            key={buttonName}
            onClick={onLeaveFeedback}
          >
            {buttonName}
          </Button>
        );
      })}
    </div>
  );
};
FeedbackOptions.prototype = {
  buttonsName: PropTyprs.arrayOf.isRequired,
  onLeaveFeedback: PropTyprs.func.isRequired,
};
