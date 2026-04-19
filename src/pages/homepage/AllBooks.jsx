import React, { use } from 'react';
import BookCard from './BookCard/BookCard';

const booksPromise = fetch('/booksData.json').then(res => res.json());

const AllBooks = () => {

    const books = use(booksPromise);


    return (
        <div className='my-16 container mx-auto px-4'>

            <h2 className=' text-[40px] md:text-[48px] font-bold text-center mb-12'>
                Books
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    books.map((book) => {
                        return <BookCard key={book.bookId} book={book} />
                    })
                }
            </div>

        </div>
    );
};

export default AllBooks;