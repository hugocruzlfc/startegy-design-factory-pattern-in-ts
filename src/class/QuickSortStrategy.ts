import { SortingStrategy } from "../interface/sorting-strategy";

export class QuickSortStrategy implements SortingStrategy {
  sort(data: number[]): number[] {
    if (data.length <= 1) return data;

    const quickSortPivot = data[data.length - 1];
    const quickSortLeft = data.filter((el) => el < quickSortPivot);
    const quickSortRight = data.filter((el) => el > quickSortPivot);
    const quickSortEqual = data.filter((el) => el === quickSortPivot);

    return [
      ...this.sort(quickSortLeft),
      ...quickSortEqual,
      ...this.sort(quickSortRight),
    ];
  }
}
