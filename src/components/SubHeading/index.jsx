import { useEffect, useState } from "react";
import "./sub-heading.style.css";

export function SubHeading({ children }) {
  const [description, setDescription] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setDescription("Só um exemplo de descrição ensinando sobre findBy para incentivar você!");
    }, 500);
  }, []);

  if (!children) return <></>;

  return (
    <div>
      <h2 className="subheading">
        {children}

        {!!description && <p>{description}</p>}
      </h2>
    </div>
  );
}
