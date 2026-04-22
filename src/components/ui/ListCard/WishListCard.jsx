import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { HiUsers } from 'react-icons/hi';
import { LuFileChartColumnIncreasing } from 'react-icons/lu';

const WishListCard = ({ book }) => {
    return (
        <div className='flex mt-5 p-5 border border-gray-200 rounded-2xl gap-6 '>
            <div className='bg-gray-200 h-70 w-57.5 items-center flex justify-center rounded-2xl'  >
                <img src={book.image} alt={book.bookName} className='h-55 rounded-xl' />
            </div>
            <div className='space-y-4 flex flex-col justify-center'>
                <h2 className='text-3xl font-bold'>{book.bookName}</h2>
                <h4 className='font-semibold text-gray-600'>By: {book.author}</h4>
                <div className='flex flex-col '>
                    <div className='flex flex-col gap-2 font-semibold  space-y-3  '>
                        <div className='flex'>
                            <div className='flex justify-center items-center'>
                                <p className='font-bold'>Tag:</p>
                                {

                                    book.tags.map((tag, index) => {
                                        return <div className="badge badge-soft badge-success text-[#23BE0A]" key={index}>
                                            #{tag}
                                        </div>
                                    })
                                }
                            </div>
                            <div className='flex justify-center items-center gap-2 text-gray-600'>
                                <CiLocationOn />
                                <p> Year of Publishing: {book.yearOfPublishing}</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4 text-gray-600'>
                            <div className='flex items-center gap-2'>
                                <HiUsers />
                                <p>Publisher: {book.publisher}</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <LuFileChartColumnIncreasing />
                                <p>Pages {book.totalPages}</p>
                            </div>
                        </div>
                        <hr className='border border-gray-200 ' />
                        <div className='flex gap-4'>
                            <button className="btn btn-soft btn-info rounded-3xl">
                                Category: {book.category}
                            </button>
                            <button className="btn btn-soft btn-warning rounded-3xl">
                                Rating: {book.rating}
                            </button>
                            <button className="btn bg-green-500 text-white text-md rounded-3xl hover:bg-green-300 hover:text-black">
                                View Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishListCard;