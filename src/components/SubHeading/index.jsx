import "./sub-heading.style.css";

export function SubHeading({ children }) {
  if (!children) return <></>;
  
  return <h2 className="subheading">{children}</h2>;
}
