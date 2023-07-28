import PropTypes from 'prop-types'
import { BookButton } from '../../components'
import { bookShape } from '../../shapes';
import { styled } from 'styled-components';

export const ReadingBooks = ({ selectedBookData }) => (
    <ReadingBooksContainer>
        <h2>Lista de Lectura</h2>
        <div>
            {selectedBookData.map( book => (
                <BookButton
                    key={ book.ISBN }
                    book={ book }
                />
            ))}
        </div>
    </ReadingBooksContainer>
);
ReadingBooks.propTypes = {
    'selectedBookData': PropTypes.arrayOf(bookShape),
};

const ReadingBooksContainer = styled.section`
    div {
        min-width: 350px;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        margin-top: 20px;
        background-color: #3e3c3c;
        padding: 20px;
        border-radius: 15px;
    };
`