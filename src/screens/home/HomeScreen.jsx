import React from 'react'
import { useState } from 'react';
import { Books, ReadingBooks } from '../../components'
import './home.css'

export const HomeScreen = () => {
    const [selectedBookData, setSelectedBookData] = useState([]);
    return (
        <main className='container-general'>
            <Books setSelectedBookData={ setSelectedBookData } />
            {selectedBookData &&
                <ReadingBooks selectedBookData={ selectedBookData } />
            }
        </main>
    );
};
