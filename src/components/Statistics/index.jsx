import PropTyprs from 'prop-types';

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
      <p>Total: {total()}</p>
      <p>Positive feedback: {positivePercentage()}%</p>
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
