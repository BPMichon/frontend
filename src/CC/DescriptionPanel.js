import React from 'react';

const DescriptionPanel = ({ isExpanded, setIsExpanded, selectedOption, selectedOptions, node }) => {
  return (
    <div
      className={`flex flex-col bg-brown-700 rounded-lg shadow-md p-4 transition-all duration-300 ${
        isExpanded ? 'w-1/3' : 'w-1/4'
      }`}
    >
      <h3 className="text-lg font-semibold mb-4 text-white">Description</h3>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4 py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200"
      >
        {isExpanded ? 'Collapse Description' : 'Expand Description'}
      </button>
      <button class="btn btn-secondary">Secondary</button>
      <button class="btn btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
      </button>
      {node.requiredPicks && node.requiredPicks > 1 ? (
        <div className="text-white">
          <h4 className="font-semibold mb-2">Selected Options:</h4>
          {selectedOptions.length > 0 ? (
            <ul className="list-disc pl-5 space-y-2">
              {selectedOptions.map((sel, index) => (
                <li key={index}>
                  <span className="font-semibold">{sel.name}:</span> {sel.description}
                </li>
              ))}
            </ul>
          ) : (
            <p>Select up to {node.requiredPicks} options.</p>
          )}
        </div>
      ) : selectedOption ? (
        <div className="text-white">
          <h4 className="font-semibold">{selectedOption.name}</h4>
          <p>{selectedOption.description}</p>
        </div>
      ) : (
        <p className="text-white">Select an option to see details.</p>
      )}

      
    </div>
  );
};

export default DescriptionPanel;
