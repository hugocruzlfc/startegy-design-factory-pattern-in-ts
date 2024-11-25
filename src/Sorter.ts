export class Sorter {
  static sort(algorithm: string, data: any[]): any[] {
    switch (algorithm) {
      case "mergeSort":
        // MergeSort Inline Implementation
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

      case "quickSort":
        // QuickSort Inline Implementation
        if (data.length <= 1) return data;

        const quickSortPivot = data[data.length - 1];
        const quickSortLeft = data.filter((el) => el < quickSortPivot);
        const quickSortRight = data.filter((el) => el > quickSortPivot);
        const quickSortEqual = data.filter((el) => el === quickSortPivot);

        return [
          ...Sorter.sort("quickSort", quickSortLeft),
          ...quickSortEqual,
          ...Sorter.sort("quickSort", quickSortRight),
        ];

      case "bubbleSort":
        // BubbleSort Inline Implementation
        const arr = [...data]; // Avoid mutating the original array
        const n = arr.length;

        for (let i = 0; i < n - 1; i++) {
          for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
            }
          }
        }
        return arr;

      default:
        throw new Error(`Unknown algorithm: ${algorithm}`);
    }
  }
}

// Example Usage
const numbers = [34, 7, 23, 32, 5, 62];

console.log("MergeSort:", Sorter.sort("mergeSort", numbers)); // MergeSort: [5, 7, 23, 32, 34, 62]
console.log("QuickSort:", Sorter.sort("quickSort", numbers)); // QuickSort: [5, 7, 23, 32, 34, 62]
console.log("BubbleSort:", Sorter.sort("bubbleSort", numbers)); // BubbleSort: [5, 7, 23, 32, 34, 62]
