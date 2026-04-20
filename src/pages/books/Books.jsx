import React, { useContext } from 'react';
import BookProvider from '../../context/BookProvider';

const Books = () => {

    const { storedBooks } = useContext(BookProvider);

    return (
        <div>
            Books
        </div>
    );
};

export default Books;