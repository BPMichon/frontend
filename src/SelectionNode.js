import React from 'react';

const SelectionNode = ({ node, activeIndex, handleSelectionNodeClick }) => {
  return (
    <button
      key={node.label}
      onClick={() => handleSelectionNodeClick()}
      className={`block w-full py-3 px-4 mb-3 rounded-lg transition-colors duration-200 text-left ${
        activeIndex === node.index ? 'bg-indigo-700' : 'bg-indigo-500'
      } hover:bg-indigo-600 text-white font-medium`}
    >
      {node.label}
      {node.requiredPicks && ` (Choose ${node.requiredPicks})`}
    </button>
  );
};

export default SelectionNode;
