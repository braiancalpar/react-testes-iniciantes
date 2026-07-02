export default function mergeClass(isItemCompleted = false) {
  const styles = ["todo-item"];

  if (isItemCompleted) {
    styles.push("completed");
  }

  return styles.join(" ");
}
