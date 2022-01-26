import { NoteCardContainer } from './styles/NoteCardContainer.styled';
import { CardTextContainer } from './styles/CardTextContainer.styled';
import { Button } from './styles/Button.styled';
import PropTypes from 'prop-types';

const NoteCard = ({ noteText, color }) => {
  return (
    <NoteCardContainer color={color}>
      <CardTextContainer>{noteText}</CardTextContainer>
      <div>
        <Button secondary="#bdbdbd">Archive</Button>
        <Button secondary="#bdbdbd">Edit</Button>
      </div>
    </NoteCardContainer>
  );
};

NoteCard.propTypes = {
  noteText: PropTypes.string,
  color: PropTypes.string,
};
export default NoteCard;
