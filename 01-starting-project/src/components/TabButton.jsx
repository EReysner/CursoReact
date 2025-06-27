export default function TabButton({ children, onSelect, isSelected }) {
    console.log("TAB BUTTON RENDERING");
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>{children}</button>
    </li>
  );
}
// This component is used to create a button for each tab in the examples section.
// It receives a label prop to display the button text.
