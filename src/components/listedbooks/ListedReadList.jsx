import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../../context/BookProvider";
import BookCard from "../ui/BookCard/BookCard";
import ReadListCard from "../ui/ListCard/ReadListCard";

const ListedReadList = ({ sortingType }) => {
    const { storedBooks } = useContext(BookContext);

    const [filteredReadList, setFilteredReadList] = useState([]);

    useEffect(() => {
        let data = [...storedBooks];

        if (sortingType === "pages") {
            data.sort((a, b) => a.totalPages - b.totalPages);
        }
        else if (sortingType === "rating") {
            data.sort((a, b) => a.rating - b.rating);
        }
        else if (sortingType === "year") {
            data.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
        }

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setFilteredReadList(data);
    }, [sortingType, storedBooks]);

    if (filteredReadList.length === 0) {
        return (
            <div className="h-[50vh] bg-gray-100 flex items-center justify-center">
                <h2 className="font-bold text-3xl">No read list data found</h2>
            </div>
        );
    }

    return (
        <div className="gap-4">
            {filteredReadList.map((book, ind) => (
                <ReadListCard key={ind} book={book} />
            ))}
        </div>
    );
};

export default ListedReadList;