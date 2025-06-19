'use client';

import React, { useState, useEffect, useCallback } from 'react';
import AlgorithmSelector from './AlgorithmSelector';
import SearchControls from './Controls/SearchControls';
import ArrayDisplay from './ArrayDisplay';
import { linearSearch, binarySearch, jumpSearch, interpolationSearch } from '../algorithms';

const SearchVisualizer = () => {
    const [array, setArray] = useState([1, 5, 12, 18, 23, 31, 45, 67, 78, 89]);
    const [target, setTarget] = useState('');
    const [selectedAlgorithm, setSelectedAlgorithm] = useState('linear');
    const [isSearching, setIsSearching] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [searchResult, setSearchResult] = useState(null);
    const [steps, setSteps] = useState([]);
    const [animationSpeed, setAnimationSpeed] = useState(1000);

    // Visualization states
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [highlightedIndices, setHighlightedIndices] = useState([]);
    const [searchRange, setSearchRange] = useState(null);
    const [foundIndex, setFoundIndex] = useState(-1);

    const algorithms = {
        linear: linearSearch,
        binary: binarySearch,
        jump: jumpSearch,
        interpolation: interpolationSearch
    };

    const runAlgorithm = () => {
        if (!target || array.length === 0) return;

        const targetNum = parseInt(target);
        const algorithm = algorithms[selectedAlgorithm];
        
        if (!algorithm) {
            console.error('Algorithm not found:', selectedAlgorithm);
            return;
        }

        const result = algorithm([...array], targetNum);
        setSearchResult(result);
        setSteps(result.steps || []);
        setCurrentStep(0);
        setIsSearching(true);
        setIsPlaying(true);
        
        // Reset visualization states
        setCurrentIndex(-1);
        setHighlightedIndices([]);
        setSearchRange(null);
        setFoundIndex(-1);
    };

    const resetSearch = () => {
        setIsSearching(false);
        setIsPlaying(false);
        setCurrentStep(0);
        setSearchResult(null);
        setSteps([]);
        setCurrentIndex(-1);
        setHighlightedIndices([]);
        setSearchRange(null);
        setFoundIndex(-1);
    };

    const updateVisualization = useCallback((step) => {
        if (!step) return;

        // Reset previous states
        setHighlightedIndices([]);
        setSearchRange(null);
        setCurrentIndex(-1);

        switch (selectedAlgorithm) {
            case 'linear':
                setCurrentIndex(step.index);
                break;
                
            case 'binary':
                setCurrentIndex(step.mid);
                setSearchRange({ left: step.left, right: step.right });
                break;
                
            case 'jump':
                if (step.type === 'jump') {
                    setHighlightedIndices([step.checking]);
                } else if (step.type === 'linear') {
                    setCurrentIndex(step.index);
                } else if (step.type === 'found') {
                    setFoundIndex(step.index);
                }
                break;
                
            case 'interpolation':
                setCurrentIndex(step.pos);
                setSearchRange({ left: step.left, right: step.right });
                break;
        }
    }, [selectedAlgorithm]);
    useEffect(() => {
        if (!isSearching || !isPlaying || currentStep >= steps.length) {
            if (currentStep >= steps.length && searchResult) {
                // Animation finished
                setIsPlaying(false);
                if (searchResult.found) {
                    setFoundIndex(searchResult.index);
                }
            }
            return;
        }

        const timer = setTimeout(() => {
            const step = steps[currentStep];
            updateVisualization(step);
            setCurrentStep(prev => prev + 1);
        }, animationSpeed);

        return () => clearTimeout(timer);
    }, [currentStep, isSearching, isPlaying, steps, animationSpeed, searchResult, updateVisualization]);

    return (
        <div className="search-visualizer">
            <div className="visualizer-header">
                <h1>Search Algorithm Visualizer</h1>
                <p>Explore different search algorithms and see how they work step by step</p>
            </div>

            <AlgorithmSelector 
                selected={selectedAlgorithm}
                onSelect={setSelectedAlgorithm}
            />

            <SearchControls
                target={target}
                setTarget={setTarget}
                array={array}
                setArray={setArray}
                onSearch={runAlgorithm}
                onReset={resetSearch}
                isSearching={isSearching}
                isPlaying={isPlaying}
            />

            <ArrayDisplay
                array={array}
                currentIndex={currentIndex}
                highlightedIndices={highlightedIndices}
                searchRange={searchRange}
                foundIndex={foundIndex}
            />

            {isSearching && (
                <div className="search-info">
                    <div className="progress-info">
                        <h3>Search Progress</h3>
                        <p>Step {currentStep} of {steps.length}</p>
                        <div className="progress-bar">
                            <div 
                                className="progress-fill"
                                style={{ width: `${(currentStep / steps.length) * 100}%` }}
                            />
                        </div>
                    </div>
                    
                    <div className="speed-control">
                        <label>Animation Speed:</label>
                        <input
                            type="range"
                            min="100"
                            max="2000"
                            value={animationSpeed}
                            onChange={(e) => setAnimationSpeed(parseInt(e.target.value))}
                        />
                        <span>{(2100 - animationSpeed) / 1000}x</span>
                    </div>
                </div>
            )}

            {searchResult && !isPlaying && (
                <div className="search-result">
                    <h3>Search Result</h3>
                    <p>
                        {searchResult.found 
                            ? `Target ${target} found at index ${searchResult.index}!`
                            : `Target ${target} not found in the array.`
                        }
                    </p>
                    <p>Total steps: {steps.length}</p>
                </div>
            )}
        </div>
    );
};

export default SearchVisualizer;