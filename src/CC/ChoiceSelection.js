import React from 'react';

const ChoiceSelection = ({ node, handleChoiceSelect, selectedOptions }) => {
  return (
    <div className="flex-1 bg-green-700 rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-4 text-white">{node.label} Options</h3>
      {node.choices.map((choice, idx) => {
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
      })}
    </div>
  );
};

export default ChoiceSelection;
