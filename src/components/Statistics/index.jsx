import PropTyprs from 'prop-types';

import { Resalt } from './styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <Resalt>Total: {total()}</Resalt>
      <Resalt>Positive feedback: {positivePercentage()}%</Resalt>
    </div>
  );
};

Statistics.prototype = {
  good: PropTyprs.number.isRequired,
  neutral: PropTyprs.number.isRequired,
  bad: PropTyprs.number.isRequired,
  total: PropTyprs.func.isRequired,
  positivePercentage: PropTyprs.func.isRequired,
};
