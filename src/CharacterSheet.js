import { useLocation } from "react-router-dom";

function CharacterSheet() {
  const location = useLocation();
  const character = location.state || { name: "Unknown", race: "None", class: "None" };

  return (
    <div>
      <h2>Character Sheet</h2>
      <p><strong>Name:</strong> {character.name}</p>
      <p><strong>Race:</strong> {character.race}</p>
      <p><strong>Class:</strong> {character.class}</p>
    </div>
  );
}

export default CharacterSheet;
