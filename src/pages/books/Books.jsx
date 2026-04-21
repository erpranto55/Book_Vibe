import React, { useContext } from 'react';
import { BookContext } from '../../context/BookProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from './ReadList';
import WishList from './WishList';


const Books = () => {

    const { storedBooks, wishList } = useContext(BookContext);

    return (
        <div className='container mx-auto'>
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
                    <ReadList storedBooks={storedBooks} />
                </TabPanel>
                <TabPanel>
                    <WishList wishList={wishList} />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Books;