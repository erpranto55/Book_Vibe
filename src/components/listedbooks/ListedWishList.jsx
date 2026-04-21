import React, { useContext } from 'react';
import { BookContext } from '../../context/BookProvider';
import BookCard from '../ui/BookCard/BookCard';

const ListedWishList = () => {
    const { wishList } = useContext(BookContext);

    if (wishList.length === 0) {
        return <div className='h-[50vh] bg-gray-100 flex items-center justify-center rounded-3xl'>
            <h2 className='font-bold text-3xl'>No Data Found in Wish List.</h2>
        </div>
    }

    return (
        <div>
            {/* WishList */}
            {
                wishList.map((book, ind) => (
                    <BookCard key={ind} book={book} />
                ))
            }
        </div>
    );
};

export default ListedWishList;