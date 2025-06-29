export default function Section({ title, children, ...props }) {
  //...props is used to pass any additional props to the section element
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
