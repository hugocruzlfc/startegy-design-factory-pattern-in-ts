import { SortingStrategyFactory } from "./strategy-factory";

export class Sorter {
  static sort(algorithm: string, data: any[]): any[] {
    const strategy = SortingStrategyFactory.getStrategy(algorithm);
    return strategy.sort(data);
  }
}
