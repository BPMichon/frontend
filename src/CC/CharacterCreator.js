import React, { useState } from 'react';
import SelectionNode from './SelectionNode';
import ChoiceSelection from './ChoiceSelection';
import DescriptionPanel from './DescriptionPanel';

// Sample default data with a multi-selection node.
const defaultData = {
  label: "Class",
  layout: "grid", // Specifies the layout for this selection
  choices: [
    {
      name: "Fighter",
      description: "A master of martial combat.",
      selectableFeature: {
        label: "Weapon Master",
        layout: "list", // This selection will use a list layout
        requiredPicks: 2,
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
        layout: "list",
        choices: [
          { name: "Evocation", description: "Focus on destructive spells." },
          { name: "Illusion", description: "Mastery over deceptive magic." }
        ]
      }
    }
  ]
};


const CharacterCreator = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectionStack, setSelectionStack] = useState([defaultData]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const activeNode = selectionStack[activeIndex];

  const handleChoiceSelect = (choice) => {
    if (activeNode.requiredPicks && activeNode.requiredPicks > 1) {
      const alreadySelected = selectedOptions.some(sel => sel.name === choice.name);
      if (alreadySelected) {
        setSelectedOptions(selectedOptions.filter(sel => sel.name !== choice.name));
      } else {
        if (selectedOptions.length < activeNode.requiredPicks) {
          setSelectedOptions([...selectedOptions, choice]);
        }
      }
    } else {
      setSelectedOption(choice);
    }
    if (choice.selectableFeature) {
      const newStack = selectionStack.slice(0, activeIndex + 1);
      newStack.push(choice.selectableFeature);
      setSelectionStack(newStack);
      setSelectedOption(null);
      setSelectedOptions([]);
    }
  };

  const handleSelectionNodeClick = (index) => {
    setActiveIndex(index);
    setSelectedOption(null);
    setSelectedOptions([]);
  };

  return (
    <div className="flex h-screen w-full max-w-screen-xl mx-auto gap-4 p-4">
      {/* Sidebar */}
      <div className="w-[20%] min-w-[260px] p-4 overflow-y-auto bg-teal-800 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4 text-white">Selection Nodes</h3>
        {selectionStack.map((node, index) => (
          <SelectionNode 
            key={index} 
            node={node} 
            activeIndex={activeIndex} 
            handleSelectionNodeClick={() => handleSelectionNodeClick(index)} 
          />
        ))}
      </div>
  
      {/* Main Content */}
      <div className="flex flex-1 gap-6">
        <ChoiceSelection 
          node={activeNode} 
          handleChoiceSelect={handleChoiceSelect} 
          selectedOptions={selectedOptions} 
        />
        <DescriptionPanel 
          isExpanded={isExpanded} 
          setIsExpanded={setIsExpanded} 
          selectedOption={selectedOption} 
          selectedOptions={selectedOptions} 
          node={activeNode} 
        />
      </div>
    </div>
  );
  
};

export default CharacterCreator;
