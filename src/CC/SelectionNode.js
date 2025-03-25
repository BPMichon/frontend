import React from 'react';

const SelectionNode = ({ node, activeIndex, handleSelectionNodeClick }) => {
  return (
    <button
      key={node.label}
      onClick={() => handleSelectionNodeClick()}
      className={`w-full flex items-center justify-between px-4 py-2 rounded-lg transition-all duration-200 border ${
        activeIndex === node.index 
          ? 'bg-indigo-600 border-indigo-400 shadow-md' 
          : 'bg-white border-gray-300 hover:border-indigo-500 hover:shadow-sm'
      } text-gray-900 hover:text-indigo-700 text-sm font-medium`}
    >
      <span>{node.label}</span>
      {node.requiredPicks && (
        <span className="text-xs text-gray-500">Choose {node.requiredPicks}</span>
      )}
    </button>
  );
};

export default SelectionNode;
