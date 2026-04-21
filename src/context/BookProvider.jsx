import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext()

const BookProvider = ({ children }) => {
    const [storedBooks, setStoredBooks] = useState([]);
    const [wishList, setWishList] = useState([]);

    const handleMarkAsRead = (currentBook) => {
        const isExists = storedBooks.find(book => book.bookId == currentBook.bookId);
        if (isExists) {
            toast.error('This Book is Already Exists');
        }
        else {
            setStoredBooks([...storedBooks, currentBook]);
            toast.success(`${currentBook.bookName} is Marked As Read.`)
        }
    }

    const handleWishList = (currentBook) => {

        const isExistInReadList = storedBooks.find(
            book => book.bookId == currentBook.bookId
        );

        if (isExistInReadList) {
            toast.error("This Book is already in Read List");
            return;
        }

        const isExists = wishList.find(book => book.bookId == currentBook.bookId);

        if (isExists) {
            toast.error('This Book is Already Exists');
        }
        else {
            setWishList([...wishList, currentBook]);
            toast.success(`${currentBook.bookName} is Added to Wishlist.`)
        }
    }

    const data = {
        storedBooks, setStoredBooks, handleMarkAsRead, wishList, setWishList, handleWishList
    }

    return (
        <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;