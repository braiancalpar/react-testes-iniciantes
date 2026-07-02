describe("./mergeClass.js", () => {
  test("deveria retornar a classe base do todo-item quando o item não estiver completo", () => {
    // Arrange
    const isItemCompleted = false;

    // Act
    const styles = mergeClass(isItemCompleted);

    // Assert
    expect(styles).toBe("todo-item");
  });

  test("deveria retornar a classe base do todo-item e a classe completed quando o item estiver completo", () => {
    // Arrange
    const isItemCompleted = true;

    // Act
    const styles = mergeClass(isItemCompleted);

    // Assert
    expect(styles).toBe("todo-item completed");
  });
});
