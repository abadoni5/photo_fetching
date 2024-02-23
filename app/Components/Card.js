import React from 'react';

const Card = ({ imageUrl, altText, index }) => {
    return (
        <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-gray-200 mb-4 hover:bg-teal-500 hover:text-white transition duration-300">
            <img className="w-full" src={imageUrl} alt={altText} />
            <div className="px-4 py-4 text-center">
                <div className="text-3xl font-semibold font-mono text-gray-500 mb-2">Dr. Sample {index}</div>
                <div className="text-sm text-gray-600 mb-2 font-mono">Sample Specialization</div>
            </div>
        </div>
    );
};

export default Card;
