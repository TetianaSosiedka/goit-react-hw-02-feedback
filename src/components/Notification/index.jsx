import PropTyprs from 'prop-types';

export const Notification = ({ message }) => {
  return <span>{message}</span>;
};
Notification.prototype = {
  message: PropTyprs.string.isRequired,
};
