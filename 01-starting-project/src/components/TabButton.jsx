export default function TabButton({ children, isSelected, ...props }) {
  console.log("TAB BUTTON RENDERING");
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
// This component is used to create a button for each tab in the examples section.
// It receives a label prop to display the button text.
