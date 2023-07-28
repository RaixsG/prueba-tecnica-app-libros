import PropTypes from 'prop-types'
import { library } from '../../assets/books.json'
import { styled } from 'styled-components';

export const Books = ({ setSelectedBookData }) => {

    const updateBook = (newBook) => {
        setSelectedBookData(previousData => [ ...previousData, newBook]);
        console.log(newBook)
        alert(`Empezaste a leer ${newBook.title}!🙌`);
    };

    return (
        <BooksContainer>
            <h1>
                { `${library.length} libros disponibles` }
            </h1>
            <div>
                { library.map((book) => (
                    <button
                        key={ book.book.ISBN }
                        className='book-button'
                        onClick={ () => updateBook(book.book) }
                    >
                        <img
                            className='book_cover'
                            src={ book.book.cover }
                            alt={ book.book.title }
                        />
                    </button>
                ))}
            </div>
        </BooksContainer>
    )
};
Books.propTypes = {
    'setSelectedBookData': PropTypes.func,
};

const BooksContainer = styled.section`
    div {
        min-width: 350px;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
    };
`