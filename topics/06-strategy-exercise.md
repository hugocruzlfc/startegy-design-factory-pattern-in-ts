# **Strategy-Exercise.md**

## **Exercise 1**

Refactor the `Sorter.java` class to implement the **Strategy Pattern**.

### Instructions

1. Create a package named **`exercise_one`**.
2. Inside the package, implement the **Strategy Pattern**:
    - Define a `SortingStrategy` interface with a `sort(int[] data)` method.
    - Create individual classes for each sorting algorithm (`BubbleSortStrategy`, `QuickSortStrategy`, and `MergeSortStrategy`) implementing the `SortingStrategy` interface.
3. Refactor the `Sorter.java` class to use the `SortingStrategy` interface.
4. Create a **main class** to demonstrate sorting using the refactored `Sorter` class.

### Resources

For more information about the **Strategy Design Pattern**, you can refer to [Strategy Pattern Wiki](https://en.wikipedia.org/wiki/Strategy_pattern).

---

## **Extra Exercise 1**

Extend the implementation from Exercise 1.

### Instructions

1. Create a package named **`exercise_extra_one`**.
2. Using the classes created in Exercise 1, implement a **Factory Pattern** to select the appropriate strategy based on the sorting algorithm's name.
3. Ensure the factory returns the correct `SortingStrategy` implementation (`BubbleSortStrategy`, `QuickSortStrategy`, `MergeSortStrategy`).
4. Refactor the `Sorter` class to use the factory to determine the strategy.
5. Create a **main class** to demonstrate sorting using the factory-based `Sorter`.

---

## **Extra Exercise 2**

Refactor the factory implementation from Extra Exercise 1.

### Instructions

1. Create a package named **`exercise_extra_two`**.
2. Replace the **switch-case statement** in the factory with a **HashMap** for mapping algorithm names to `SortingStrategy` instances.
3. Update the factory to retrieve the sorting strategies using the `HashMap`.
4. Create a **main class** to demonstrate sorting with the refactored factory.

---

### Notes
- For all exercises, ensure your code is clean, adheres to object-oriented design principles, and is well-tested.
- Use appropriate exception handling to manage invalid inputs or unsupported algorithms.
