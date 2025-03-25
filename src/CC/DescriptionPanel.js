import React from 'react';

const DescriptionPanel = ({ isExpanded, setIsExpanded, selectedOption, selectedOptions, node }) => {
  return (
    <div
      className={`flex flex-col bg-brown-700 rounded-lg shadow-md p-4 transition-all duration-300 ${
        isExpanded ? 'w-1/3' : 'w-1/4'
      }`}
    >
      <h3 className="text-lg font-semibold mb-4 text-white">Description</h3>
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

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4 py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200"
      >
        {isExpanded ? 'Collapse Description' : 'Expand Description'}
      </button>
    </div>
  );
};

export default DescriptionPanel;
