import { styled } from 'styled-components';
import { bookShape } from '../../shapes';
import { FunctionType } from '../../types';

//? COMPONENT
export const BookButton = ({ book, onPress }) => {
    return (
        <StyledBookButton
            key={ book.ISBN }
            onClick={ onPress }
        >
            <img
                src={ book.cover }
                alt={ book.title }
            />
        </StyledBookButton>
    )
};

//? PROPS
BookButton.propTypes = {
    'book': bookShape.isRequired,
    'onPress': FunctionType,
};

//? STYLES
const StyledBookButton = styled.button`
    margin: 0;
    padding: 0;
    border-width: 0;
    img {
        margin: 0;
        padding: 0;
        width: 100%;
        height: auto;
    };
`