# Search Algorithm Visualizer

Interactive visualization of different search algorithms built with Next.js.

## Features

- **4 Search Algorithms**: Linear, Binary, Jump, and Interpolation Search
- **Step-by-step Animation**: Watch algorithms work in real-time
- **Interactive Controls**: Customize array and search parameters
- **Responsive Design**: Works on desktop and mobile devices
- **Algorithm Comparison**: See complexity and performance differences

## Getting Started

1. Install dependencies:

```bash
bun install
```

1. Run the development server:

```bash
npm run dev
```

1. Open [http://localhost:3000](http://localhost:3000) in your browser

## How to Use

1. **Select Algorithm**: Choose from Linear, Binary, Jump, or Interpolation search
2. **Configure Array**: Use the provided array or create your own
3. **Set Target**: Enter the number you want to search for
4. **Start Search**: Click "Start Search" to begin visualization
5. **Watch Animation**: See how the algorithm searches step by step

## Search Algorithms

- **Linear Search**: O(n) - Checks each element sequentially
- **Binary Search**: O(log n) - Divides sorted array in half each step
- **Jump Search**: O(√n) - Jumps ahead by fixed steps, then linear search
- **Interpolation Search**: O(log log n) - Estimates position based on value distribution

## Technologies Used

- Next.js 14
- React 18
- CSS3 with animations
- Responsive design

## Project Structure

```code
app/
├── components/
│   ├── SearchVisualizer.js
│   ├── AlgorithmSelector.js
│   ├── SearchControls.js
│   └── ArrayDisplay.js
├── algorithms/
│   ├── linearSearch.js
│   ├── binarySearch.js
│   ├── jumpSearch.js
│   ├── interpolationSearch.js
│   └── index.js
├── globals.css
├── layout.js
└── page.js
```
