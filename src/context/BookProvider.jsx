import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

const BookContext = createContext()

const BookProvider = ({ children }) => {
    const [storedBooks, setStoredBooks] = useState([]);

    const handleMarkAsRead = (currentBook) => {
        const isExists = storedBooks.find(book => book.bookId == currentBook.bookId);
        if (isExists) {
            toast.error('This Book is Already Exists');
        }
        else {
            setStoredBooks([...storedBook, currentBook]);
            toast.success(`${currentBook.bookName} is Marked As Read.`)
        }
    }

    const data={
        storedBooks,setStoredBooks,handleMarkAsRead
    }

    return (
        <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;