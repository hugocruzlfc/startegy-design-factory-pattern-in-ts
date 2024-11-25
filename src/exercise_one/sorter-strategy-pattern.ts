import { BubbleSortStrategy } from "../class/BubbleSortStrategy";
import { MergeSortStrategy } from "../class/MergeSortStrategy";
import { QuickSortStrategy } from "../class/QuickSortStrategy";
import { SortingStrategy } from "../interface/sorting-strategy";

export class Sorter {
  static sort(algorithm: string, data: any[]): any[] {
    let instanceClass: SortingStrategy;

    switch (algorithm) {
      case "mergeSort":
        instanceClass = new MergeSortStrategy();

        break;

      case "quickSort":
        instanceClass = new QuickSortStrategy();

        break;

      case "bubbleSort":
        instanceClass = new BubbleSortStrategy();

        break;

      default:
        throw new Error(`Unknown algorithm: ${algorithm}`);
    }

    return instanceClass.sort(data);
  }
}

// Example Usage
const numbers = [34, 7, 23, 32, 5, 62];

console.log("MergeSort:", Sorter.sort("mergeSort", numbers)); // MergeSort: [5, 7, 23, 32, 34, 62]
console.log("QuickSort:", Sorter.sort("quickSort", numbers)); // QuickSort: [5, 7, 23, 32, 34, 62]
console.log("BubbleSort:", Sorter.sort("bubbleSort", numbers)); // BubbleSort: [5, 7, 23, 32, 34, 62]
