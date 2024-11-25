import { BubbleSortStrategy } from "../class/BubbleSortStrategy";
import { MergeSortStrategy } from "../class/MergeSortStrategy";
import { QuickSortStrategy } from "../class/QuickSortStrategy";
import { SortingStrategy } from "../interface/sorting-strategy";

export class SortingStrategyFactory {
  private static strategies: Map<string, SortingStrategy> = new Map();

  // Inicializar el mapa con estrategias
  static {
    SortingStrategyFactory.strategies.set("mergeSort", new MergeSortStrategy());
    SortingStrategyFactory.strategies.set("quickSort", new QuickSortStrategy());
    SortingStrategyFactory.strategies.set(
      "bubbleSort",
      new BubbleSortStrategy()
    );
  }

  static getStrategy(algorithm: string): SortingStrategy {
    const strategy = SortingStrategyFactory.strategies.get(algorithm);
    if (!strategy) {
      throw new Error(`Unknown algorithm: ${algorithm}`);
    }
    return strategy;
  }
}
