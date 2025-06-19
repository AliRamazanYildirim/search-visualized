'use client';

import React from 'react';

const ArrayDisplay = ({ 
    array = [], 
    highlightedIndices = [], 
    currentIndex = -1,
    searchRange = null,
    foundIndex = -1
}) => {
    const getItemClass = (index) => {
        let classes = ['array-item'];
        
        if (foundIndex === index) {
            classes.push('found');
        } else if (currentIndex === index) {
            classes.push('current');
        } else if (highlightedIndices.includes(index)) {
            classes.push('highlighted');
        }
        
        if (searchRange && index >= searchRange.left && index <= searchRange.right) {
            classes.push('in-range');
        }
        
        return classes.join(' ');
    };

    return (
        <div className="array-container">
            <div className="array-display">
                {array.map((item, index) => (
                    <div 
                        key={index}
                        className={getItemClass(index)}
                    >
                        <div className="array-value">{item}</div>
                        <div className="array-index">{index}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArrayDisplay;