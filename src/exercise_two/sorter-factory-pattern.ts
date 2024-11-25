import { SortingStrategyFactory } from "./sorter-factory";

export class Sorter {
  static sort(algorithm: string, data: any[]): any[] {
    const instanceClass = SortingStrategyFactory.createStrategy(algorithm);
    return instanceClass.sort(data);
  }
}

// Example Usage
const numbers = [34, 7, 23, 32, 5, 62];

console.log("MergeSort:", Sorter.sort("mergeSort", numbers)); // MergeSort: [5, 7, 23, 32, 34, 62]
console.log("QuickSort:", Sorter.sort("quickSort", numbers)); // QuickSort: [5, 7, 23, 32, 34, 62]
console.log("BubbleSort:", Sorter.sort("bubbleSort", numbers)); // BubbleSort: [5, 7, 23, 32, 34, 62]

// Ventajas

// Principio de responsabilidad única: La clase Sorter solo se encarga de coordinar la lógica de ordenamiento y no de la creación de las estrategias.

// Fácil de extender: Si agregas un nuevo algoritmo, solo necesitas actualizar la fábrica (SortingStrategyFactory) para incluirlo.

// Reusabilidad: La lógica de creación de estrategias está centralizada en la fábrica, lo que permite reutilizarla en otros contexto
