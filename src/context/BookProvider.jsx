import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import { addReadListToLocalDB, addWishListToLocalDB, getAllReadListFromLocalDB, getAllWishListFromLocalDB } from '../utils/localDB';

// eslint-disable-next-line react-refresh/only-export-components
export const BookContext = createContext()

const BookProvider = ({ children }) => {
    const [readList, setReadList] = useState(() => getAllReadListFromLocalDB());
    const [wishList, setWishList] = useState(() => getAllWishListFromLocalDB());

    // useEffect(() => {
    //     const getReadListFromLocalDB = getAllReadListFromLocalDB();
    //     // console.log(getReadListFromLocalDB, "getReadListFromLocalDB");
    //     setReadList(getReadListFromLocalDB);
    // }, [])

    const handleMarkAsRead = (currentBook) => {
        addReadListToLocalDB(currentBook);

        const isExists = readList.find(
            book => book.bookId == currentBook.bookId
        );
        if (isExists) {
            toast.error('This Book is Already Exists');
        }
        else {
            setReadList([...readList, currentBook]);
            toast.success(`${currentBook.bookName} is Marked As Read.`)
        }
    }

    const handleWishList = (currentBook) => {
        addWishListToLocalDB(currentBook);
        const isExistInReadList = readList.find(
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
        readList, setReadList, handleMarkAsRead, wishList, setWishList, handleWishList
    }

    return (
        <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;