import { StyledNoNotesAlert } from './styles/StyledNoNotesAlert.styled';
import PropTypes from 'prop-types';

const NoNotesAlert = ({ alertMessage }) => {
  return <StyledNoNotesAlert>{alertMessage}</StyledNoNotesAlert>;
};

NoNotesAlert.propTypes = {
  alertMessage: PropTypes.string,
};

export default NoNotesAlert;
