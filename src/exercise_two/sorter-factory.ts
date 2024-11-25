import { BubbleSortStrategy } from "../class/BubbleSortStrategy";
import { MergeSortStrategy } from "../class/MergeSortStrategy";
import { QuickSortStrategy } from "../class/QuickSortStrategy";
import { SortingStrategy } from "../interface/sorting-strategy";

export class SortingStrategyFactory {
  static createStrategy(algorithm: string): SortingStrategy {
    switch (algorithm) {
      case "mergeSort":
        return new MergeSortStrategy();
      case "quickSort":
        return new QuickSortStrategy();
      case "bubbleSort":
        return new BubbleSortStrategy();
      default:
        throw new Error(`Unknown algorithm: ${algorithm}`);
    }
  }
}
