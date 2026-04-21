import React, { useContext } from 'react';
import { BookContext } from '../../context/BookProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../components/listedbooks/ListedReadList';
import ListedWishList from '../../components/listedbooks/ListedWishList';


const Books = () => {

    const { storedBooks, wishList } = useContext(BookContext);

    return (
        <div className='container mx-auto my-3'>
            <h2 className='text-3xl font-bold text-center bg-gray-200 h-25 items-center flex justify-center rounded-2xl'>Books</h2>

            <div>
                Short By
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <ListedReadList storedBooks={storedBooks} />
                </TabPanel>
                <TabPanel>
                    <ListedWishList wishList={wishList} />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Books;