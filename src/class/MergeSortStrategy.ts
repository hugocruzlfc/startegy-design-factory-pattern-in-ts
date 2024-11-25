import { SortingStrategy } from "../interface/sorting-strategy";

export class MergeSortStrategy implements SortingStrategy {
  sort(data: number[]): number[] {
    if (data.length <= 1) return data;
    const middle = Math.floor(data.length / 2);
    const left = data.slice(0, middle);
    const right = data.slice(middle);

    const merge = (left: any[], right: any[]): any[] => {
      const result = [];
      while (left.length && right.length) {
        if (left[0] < right[0]) {
          result.push(left.shift());
        } else {
          result.push(right.shift());
        }
      }
      return result.concat(left, right);
    };

    const mergeSort = (arr: any[]): any[] => {
      if (arr.length <= 1) return arr;
      const mid = Math.floor(arr.length / 2);
      return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
    };

    return mergeSort(data);
  }
}
