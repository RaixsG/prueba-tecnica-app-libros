import { library } from '../../assets/books.json'
import './books.css'

export const Books = ({ setSelectedBookData }) => {

    const updateBook = (newBook) => {
        setSelectedBookData(previousData => [ ...previousData, newBook]);
        console.log(newBook)
        alert(`Empezaste a leer ${newBook.title}!🙌`);
    };

    return (
        <div>
            <h1>
                { `${library.length} libros disponibles` }
            </h1>
            <div className='container'>
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
        </div>
    )
}