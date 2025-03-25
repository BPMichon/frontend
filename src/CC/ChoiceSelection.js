import React from 'react';

const ChoiceSelection = ({ node, handleChoiceSelect, selectedOptions }) => {
  const isGridLayout = node.layout === "grid";

  return (
    <div className="flex-1 bg-green-700 rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-4 text-white">{node.label} Options</h3>

      {isGridLayout ? (
        // Grid layout for class selections
        <div className="grid grid-cols-4 gap-4">
          {node.choices.map((choice, idx) => (
            <div 
              key={idx} 
              className="card card-lg bg-green-600 hover:bg-green-500 rounded-lg shadow-lg text-white cursor-pointer transition"
              onClick={() => handleChoiceSelect(choice)}
            >
              
              <h4 className="text-lg font-semibold">{choice.name}</h4>
              {/* <p className="text-sm opacity-80">{choice.description}</p> */}
            </div>
          ))}
        </div>
      ) : (
        // List layout for features like weapon selections
        node.choices.map((choice, idx) => {
          const isMultiSelect = node.requiredPicks && node.requiredPicks > 1;
          const isSelected = isMultiSelect && selectedOptions.some(sel => sel.name === choice.name);
          const btnClass = isMultiSelect
            ? (isSelected ? 'bg-green-800 hover:bg-green-700' : 'bg-green-600 hover:bg-green-500')
            : 'bg-green-600 hover:bg-green-500';

          return (
            <button
              key={idx}
              className={`block w-full py-3 px-4 mb-3 rounded-lg transition-colors duration-200 text-left ${btnClass} text-white font-medium`}
              onClick={() => handleChoiceSelect(choice)}
            >
              {choice.name}
            </button>
          );
        })
      )}
    </div>
  );
};

export default ChoiceSelection;
