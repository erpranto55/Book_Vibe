import React from 'react';

const WishList = ({ wishList }) => {
    return (
        <div>
            Wish List : {wishList.length}
        </div>
    );
};

export default WishList;