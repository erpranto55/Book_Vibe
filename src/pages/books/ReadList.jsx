import React from 'react';

const ReadList = ({storedBooks}) => {
    return (
        <div>
            Read List: {storedBooks.length};
        </div>
    );
};

export default ReadList;