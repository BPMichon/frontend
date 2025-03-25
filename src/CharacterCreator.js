import React, { useState } from 'react';



// Sample default data with a multi-selection node.
const defaultData = {
  label: "Class",
  choices: [
    {
      name: "Fighter",
      description: "A master of martial combat.",
      selectableFeature: {
        label: "Weapon Master",
        requiredPicks: 2, // Must choose 2 weapon masteries.
        choices: [
          { name: "Longsword", description: "Expertise with longswords." },
          { name: "Battleaxe", description: "Skilled in using battleaxes." },
          { name: "Rapier", description: "Swift and precise with a rapier." },
          { name: "Spear", description: "Versatile in spear combat." }
        ]
      }
    },
    {
      name: "Mage",
      description: "A master of arcane magic.",
      selectableFeature: {
        label: "Spell Specialization",
        choices: [
          { name: "Evocation", description: "Focus on destructive spells." },
          { name: "Illusion", description: "Mastery over deceptive magic." }
        ]
      }
    }
  ]
};

const CharacterCreator = () => {
    
  const [isExpanded, setIsExpanded] = useState(false); // Define the isExpanded state
  // selectionStack holds the chain of selection nodes.
  const [selectionStack, setSelectionStack] = useState([defaultData]);
  // activeIndex indicates which node's choices are shown in Z2.
  const [activeIndex, setActiveIndex] = useState(0);
  const activeNode = selectionStack[activeIndex];
  // For single-selection nodes.
  const [selectedOption, setSelectedOption] = useState(null);
  // For multi-selection nodes (when requiredPicks > 1).
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Handle a choice selection in Z2.
  const handleChoiceSelect = (choice) => {
    if (activeNode.requiredPicks && activeNode.requiredPicks > 1) {
      const alreadySelected = selectedOptions.some(sel => sel.name === choice.name);
      if (alreadySelected) {
        // Toggle off the selected choice.
        setSelectedOptions(selectedOptions.filter(sel => sel.name !== choice.name));
      } else {
        // Only add if below the allowed number.
        if (selectedOptions.length < activeNode.requiredPicks) {
          setSelectedOptions([...selectedOptions, choice]);
        }
      }
    } else {
      setSelectedOption(choice);
    }
    // If the selected choice has a nested selectable feature, push it onto the selection stack.
    if (choice.selectableFeature) {
      const newStack = selectionStack.slice(0, activeIndex + 1);
      newStack.push(choice.selectableFeature);
      setSelectionStack(newStack);
      // Reset selection(s) for the new node.
      setSelectedOption(null);
      setSelectedOptions([]);
    }
  };

  // When a breadcrumb in Z1 is clicked, update activeIndex.
  const handleSelectionNodeClick = (index) => {
    setActiveIndex(index);
    setSelectedOption(null);
    setSelectedOptions([]);
  };

  return (
    <div className="flex h-screen w-full max-w-screen-xl mx-auto">
      {/* Z1: Left Column - Selection Breadcrumbs */}
      <div
        className="w-1/4 p-6 overflow-y-auto bg-teal-800 rounded-lg shadow-md"
        style={{ minWidth: '300px' }}
      >
        <h3 className="text-lg font-semibold mb-4 text-white">Selection Nodes</h3>
        {selectionStack.map((node, index) => (
          <button
            key={index}
            onClick={() => handleSelectionNodeClick(index)}
            className={`block w-full py-3 px-4 mb-3 rounded-lg transition-colors duration-200 text-left ${
              index === activeIndex ? 'bg-indigo-700' : 'bg-indigo-500'
            } hover:bg-indigo-600 text-white font-medium`}
          >
            {node.label}
            {node.requiredPicks && ` (Choose ${node.requiredPicks})`}
          </button>
        ))}
      </div>
  
      {/* Z2 & Z3: Right Column (with 2 sections, expandable Z3) */}
      <div className="flex w-3/4 gap-6">
        {/* Z2: Choices */}
        <div className="flex-1 bg-green-700 rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold mb-4 text-white">{activeNode.label} Options</h3>
          {activeNode.choices.map((choice, idx) => {
            const isMultiSelect = activeNode.requiredPicks && activeNode.requiredPicks > 1;
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
  
        {/* Z3: Description (Expandable Column) */}
        <div
          className={`flex flex-col bg-brown-700 rounded-lg shadow-md p-4 transition-all duration-300 ${
            isExpanded ? 'w-1/3' : 'w-1/4'
          }`}
        >
          <h3 className="text-lg font-semibold mb-4 text-white">Description</h3>
          {activeNode.requiredPicks && activeNode.requiredPicks > 1 ? (
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
                <p>Select up to {activeNode.requiredPicks} options.</p>
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
  
          {/* Toggle for expanding the description */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200"
          >
            {isExpanded ? 'Collapse Description' : 'Expand Description'}
          </button>
        </div>
      </div>
    </div>
  );
  
};

export default CharacterCreator;
