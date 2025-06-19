'use client';

import React from 'react';

const AlgorithmSelector = ({ selected, onSelect }) => {
    const algorithms = [
        {
            value: 'linear',
            name: 'Linear Search',
            description: 'Searches through each element one by one',
            complexity: 'O(n)'
        },
        {
            value: 'binary',
            name: 'Binary Search',
            description: 'Divides sorted array in half each step',
            complexity: 'O(log n)'
        },
        {
            value: 'jump',
            name: 'Jump Search',
            description: 'Jumps ahead by fixed steps, then linear search',
            complexity: 'O(√n)'
        },
        {
            value: 'interpolation',
            name: 'Interpolation Search',
            description: 'Estimates position based on value distribution',
            complexity: 'O(log log n)'
        }
    ];

    return (
        <div className="algorithm-selector">
            <h3>Select Search Algorithm</h3>
            <div className="algorithm-cards">
                {algorithms.map((algorithm) => (
                    <div 
                        key={algorithm.value}
                        className={`algorithm-card ${selected === algorithm.value ? 'selected' : ''}`}
                        onClick={() => onSelect(algorithm.value)}
                    >
                        <div className="algorithm-header">
                            <h4>{algorithm.name}</h4>
                            <span className="complexity">{algorithm.complexity}</span>
                        </div>
                        <p className="algorithm-description">
                            {algorithm.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AlgorithmSelector;