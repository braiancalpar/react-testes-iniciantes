import { render } from "@testing-library/react";
import { TodoContext } from "../components/TodoProvider/TodoContext";

export default function customRender(component, values = {}) {
  return render(<TodoContext.Provider value={values}>{component}</TodoContext.Provider>);
}
