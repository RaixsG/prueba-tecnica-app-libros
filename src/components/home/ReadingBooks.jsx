import './books.css'

export const ReadingBooks = ({ selectedBookData }) => (
    <div>
        <h2>Lista de Lectura</h2>
        <div className='container reading-container' >
            {selectedBookData.map(book => (
                <img
                    className='book_cover'
                    src={book.cover}
                    alt='book-cover'
                />
            ))}
        </div>
    </div>
);
