import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';

import { BookContext } from '../../context/BookProvider';


const BookDetails = () => {
    const { bookId: bookParamsId } = useParams();

    const books = useLoaderData();
    const expectedBook = books.find(book => book.bookId == bookParamsId)

    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = expectedBook;

    const { handleMarkAsRead, handleWishList } = useContext(BookContext);


    return (
        <div className='container mx-auto mt-10'>
            <div className="card lg:card-side bg-base-100 shadow-sm rounded-2xl p-6 gap-10 flex flex-col items-center md:flex-row">
                <figure className="bg-[#F3F3F3] rounded-2xl p-10 flex items-center justify-center min-w-143.25 h-177.75 ">
                    <img
                        src={image}
                        className="h-141 object-contain"
                        alt={bookName} />
                </figure>
                <div className="card-body space-y-4">
                    <h2 className="card-title text-5xl font-bold" >{bookName}</h2>
                    <p className='text-gray-500 text-xl'>By: {author}</p>
                    <hr className='border-gray-200' />
                    <p className='font-medium'>{category}</p>
                    <hr className='border-gray-200' />
                    <p className="text-gray-600 leading-relaxed">
                        <span className="font-semibold text-black">Review:</span>{review}
                    </p>
                    <div className='flex gap-2 font-semibold flex-wrap'>
                        <h4 className='font-bold'>Tag:</h4>
                        {
                            tags.map((tag, index) => {
                                return <div className="badge badge-soft badge-success text-[#23BE0A]" key={index}>
                                    #{tag}
                                </div>
                            })
                        }
                    </div>
                    <hr className='border-gray-200' />
                    <div className='space-y-3 text-sm max-w-md'>
                        <div className="flex justify-between items-center">
                            <span className='text-gray-500'>Number of Pages:</span>
                            <span className='font-bold'>{totalPages}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className='text-gray-500'>Publisher:</span>
                            <span className='font-bold'>{publisher} </span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className='text-gray-500'>Year of Publishing:</span>
                            <span className='font-bold'>{yearOfPublishing} </span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className='text-gray-500'>Rating:</span>
                            <span className='font-bold'>{rating} </span>
                        </div>
                    </div>

                    <div className="card-actions justify-start pt-4 gap-4">
                        <button className="btn btn-outline px-6"
                            onClick={() => { handleMarkAsRead(expectedBook) }}>Mark as Read
                        </button>
                        <button className="btn btn-accent text-white"
                            onClick={() => handleWishList(expectedBook)}>
                            Add to Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;