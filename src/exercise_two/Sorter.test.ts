// Import the Sorter class

import { Sorter } from "./sorter-factory-pattern";

// Correct for ES module
type SorterType = InstanceType<typeof Sorter>;

describe("Sorter Exercise 2", () => {
  let sorter: SorterType;

  test("should sort data using bubbleSort", () => {
    const data = [5, 2, 9, 1, 5, 6];
    const sortedData = Sorter.sort("bubbleSort", data);
    expect(sortedData).toEqual([1, 2, 5, 5, 6, 9]);
  });

  test("should sort data using mergeSort", () => {
    const data = [38, 27, 43, 3, 9, 82, 10];
    const sortedData = Sorter.sort("mergeSort", data);
    expect(sortedData).toEqual([3, 9, 10, 27, 38, 43, 82]);
  });

  test("should sort data using quickSort", () => {
    const data = [10, 7, 8, 9, 1, 5];
    const sortedData = Sorter.sort("quickSort", data);
    expect(sortedData).toEqual([1, 5, 7, 8, 9, 10]);
  });

  test("should throw an error for an unsupported sorting algorithm", () => {
    const data = [3, 1, 2];
    expect(() => Sorter.sort("unknownSort", data)).toThrow(
      "Unknown algorithm: unknownSort"
    );
  });
});
