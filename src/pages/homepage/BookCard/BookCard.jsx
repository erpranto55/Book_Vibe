import React from 'react';
import { CiStar } from 'react-icons/ci';

const BookCard = ({ book }) => {
    return (
        <div className="card bg-base-100  shadow-sm">
            <div className='p-6'>
                <figure className='bg-[#F3F3F3] w-full h-80 rounded-3xl flex items-center justify-center'>
                    <img
                        src={book.image}
                        alt="Shoes"
                        className='h-[80%]' />
                </figure>
                <div className="px-2 py-6 space-y-3">
                    <div className='flex flex-col '>
                        <div className='flex gap-2 font-semibold'>
                            {
                                book.tags.map((tag, index) => {
                                    return <div className="badge badge-soft badge-success text-[#23BE0A]" key={index}>
                                        {tag}
                                    </div>
                                })
                            }
                        </div>
                        <h2 className="card-title">
                            {book.bookName}
                        </h2>
                    </div>

                    <p>By: {book.author}</p>
                    <hr className="border-t-2 border-dotted border-gray-400 my-5 opacity-30" />
                    <div className="card-actions justify-between">
                        <div className="font-semibold ">
                            {book.category}
                        </div>
                        <div className="flex gap-2 items-center justify-center ">
                            {book.rating}<CiStar className='text-xl' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;