import React, { useContext } from 'react';
import { BookContext } from '../../context/BookProvider';
import BookCard from '../ui/BookCard/BookCard';
import ReadListCard from '../ui/ListCard/ReadListCard';

const ListedReadList = () => {
    const { storedBooks } = useContext(BookContext);

    if (storedBooks.length === 0) {
        return <div className='h-[50vh] bg-gray-100 flex items-center justify-center rounded-3xl'>
            <h2 className='font-bold text-3xl'>No Data Found in Read List.</h2>
        </div>
    }

    return (
        <div>

            {
                storedBooks.map((book, ind) => (
                    <ReadListCard key={ind} book={book} />
                ))
            }
        </div>
    );
};

export default ListedReadList;