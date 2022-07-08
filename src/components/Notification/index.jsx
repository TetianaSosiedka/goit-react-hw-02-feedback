import PropTypes from 'prop-types';

import { Message } from './styled';

export const Notification = ({ message }) => {
  return <Message>{message}</Message>;
};
Notification.prototype = {
  message: PropTypes.string.isRequired,
};
