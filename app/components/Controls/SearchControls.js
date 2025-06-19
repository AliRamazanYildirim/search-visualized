'use client';

import React, { useState } from 'react';

const SearchControls = ({ 
    target, 
    setTarget, 
    array, 
    setArray, 
    onSearch, 
    onReset, 
    isSearching,
    isPlaying 
}) => {
    const [inputArray, setInputArray] = useState(array.join(', '));

    const handleArrayChange = (value) => {
        setInputArray(value);
        try {
            const newArray = value
                .split(',')
                .map(item => parseInt(item.trim()))
                .filter(item => !isNaN(item));
            setArray(newArray);
        } catch (error) {
            console.log('Invalid array input');
        }
    };

    const generateRandomArray = () => {
        const size = 10;
        const newArray = [];
        for (let i = 0; i < size; i++) {
            newArray.push(Math.floor(Math.random() * 100) + 1);
        }
        newArray.sort((a, b) => a - b); // Binary search için sıralı olmalı
        setArray(newArray);
        setInputArray(newArray.join(', '));
    };

    const generateSortedArray = () => {
        const newArray = [1, 5, 12, 18, 23, 31, 45, 67, 78, 89];
        setArray(newArray);
        setInputArray(newArray.join(', '));
    };

    return (
        <div className="search-controls">
            <div className="controls-section">
                <h3>Array Configuration</h3>
                <div className="array-input-group">
                    <label>Array Elements (comma separated):</label>
                    <textarea
                        value={inputArray}
                        onChange={(e) => handleArrayChange(e.target.value)}
                        placeholder="Enter numbers separated by commas (e.g., 1, 5, 12, 18, 23)"
                        rows="2"
                        disabled={isSearching}
                    />
                </div>
                <div className="array-buttons">
                    <button 
                        onClick={generateSortedArray}
                        disabled={isSearching}
                        className="secondary-btn"
                    >
                        Generate Sorted Array
                    </button>
                    <button 
                        onClick={generateRandomArray}
                        disabled={isSearching}
                        className="secondary-btn"
                    >
                        Generate Random Array
                    </button>
                </div>
            </div>

            <div className="controls-section">
                <h3>Search Configuration</h3>
                <div className="search-input-group">
                    <label>Target Value:</label>
                    <input
                        type="number"
                        value={target}
                        onChange={(e) => setTarget(e.target.value)}
                        placeholder="Enter target number"
                        disabled={isSearching}
                    />
                </div>
                <div className="search-buttons">
                    <button 
                        onClick={onSearch}
                        disabled={isSearching || !target || array.length === 0}
                        className="primary-btn"
                    >
                        {isSearching ? (isPlaying ? 'Searching...' : 'Paused') : 'Start Search'}
                    </button>
                    <button 
                        onClick={onReset}
                        disabled={!isSearching && !target}
                        className="secondary-btn"
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchControls;