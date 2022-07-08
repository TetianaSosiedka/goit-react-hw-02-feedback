import PropTypes from 'prop-types';

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
  buttonsName: PropTypes.arrayOf.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
