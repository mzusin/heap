# Heap (Binary Heap, Priority Queue)

Typescript implementation of minimum and maximum heap (priority queue).

## Documentation

```ts
export const heap: (type: HeapType, values?: number[]) => IHeap;
export const maxHeap: (values?: number[]) => IHeap;
export const minHeap: (values?: number[]) => IHeap;
export const heapsort: (values: number[], isAsc?: boolean) => void;

// O(N log N)
export const findTopKLargestElementsNaive: (values: number[], k: number) => number[];
export const findTopKSmallestElementsNaive: (values: number[], k: number) => number[];

// O(K log N)
export const findTopKLargestElementsNaive1: (values: number[], k: number) => number[];
export const findTopKSmallestElementsNaive1: (values: number[], k: number) => number[];

// O(N log K)
export const findTopKLargestElements: (values: number[], k: number) => number[];
export const findTopKSmallestElements: (values: number[], k: number) => number[];

// O(N log N)
export const findKthLargestValueNaive: (values: number[], k: number) => number|null;
export const findKthSmallestValueNaive: (values: number[], k: number) => number|null;

// O(K log N)
export const findKthLargestValueNaive1: (values: number[], k: number) => number | null;
export const findKthSmallestValueNaive1: (values: number[], k: number) => number | null;

// O(N log K)
export const findKthLargestValue: (values: number[], k: number) => number | null;
export const findKthSmallestValue: (values: number[], k: number) => number | null;
```

| Method    | Description                                                                                                                                                                                                                            |                                 |
|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------|
| add()     | Adds a single element with the specified value to the heap while maintaining the appropriate heap property. It returns the new maximum element in a Max Heap or the new minimum element in a Min Heap, or `null` if the heap is empty. | add: (val: number) => number    |null          |
| addList() | Adds an array of elements to the heap and maintains the appropriate heap property after each addition.                                                                                                                                 | addList(values: number[]): void |
| poll ()   | Removes and returns the root element of the heap, which is either the maximum (in a Max Heap) or the minimum (in a Min Heap) element.                                                                                                  | poll(): number                  | null                      |
| peek()    | Returns the root element of the heap, which is either the maximum (in a Max Heap) or the minimum (in a Min Heap) element, without removing it from the heap.                                                                           | peek(): number                  | null                      |
| size()    | Returns the number of elements currently present in the heap.                                                                                                                                                                          | size(): number                  |
| isLeaf()  | Checks if the element at the specified index in the heap is a leaf node.                                                                                                                                                               | isLeaf(index: number): boolean  |
| values()  | It returns an array containing all the elements in the heap, but does not guarantee a specific order or structure within the array, as the heap's structure may not be preserved in the returned array.                                | values: () => number[];         |


## maxHeap

```ts
import { maxHeap } from 'mz-heap';

const heap = maxHeap();

heap.add(5);
heap.add(3);
heap.addList([7, 10, 2]);

console.log(heap.peek());
console.log(heap.size());
console.log(heap.isLeaf(1));

heap.poll();
heap.poll();
```

## minHeap

```ts
import { minHeap } from 'mz-heap';

const heap = minHeap();

heap.add(5);
heap.add(3);
heap.addList([7, 10, 2]);

console.log(heap.peek());
console.log(heap.size());
console.log(heap.isLeaf(1));

heap.poll();
heap.poll();
```

## Heap

- Heap is a type of **binary tree**.
- This is a **complete binary tree** i.e. it is filled strictly from left to right, it is impossible for there to be a branch on the right and not a branch on the left. Reverse case can be only at the very end of the tree.
- **Min heap** - the minimum value on top, and for each node its children >= parent node.
- **Max heap** - the maximum value on top, and for each node its children <= parent node.
- To **add** a node, add it to the end of the tree, and then correct the condition (**heapify**).
- To **delete** a node, take the last node and put it instead of root, and then correct the condition (**heapify**).

## Usage

1. Priority queue.
2. To find min/max in O(1), while removing and adding in O(log n).
3. [Heap Sort](https://leetcode.com/explore/learn/card/heap/645/applications-of-heap/4030/)
4. The Top-K problem.
5. The K-th element.

## Space and Time Complexity

- Construct a Heap
  - Time complexity: **O(N)**
  - Space complexity: **O(N)**

- Insert an element
    - Time complexity: **O(log N)**
    - Space complexity: **O(1)**

- Get the top element
    - Time complexity: **O(1)**
    - Space complexity: **O(1)**

- Delete the top element
    - Time complexity: **O(log N)**
    - Space complexity: **O(1)**

- Get the size of a Heap
    - Time complexity: **O(1)**
    - Space complexity: **O(1)**

## HeapSort

**Pros**

- No extra memory space is required to work, unlike the Merge Sort or recursive Quick Sort.
- The algorithm is efficient. Performance is optimal. This implies that no other sorting algorithms can perform better in comparison.
- The Heap sort algorithm exhibits consistent performance. This means it performs equally well in the best, average and worst cases.
- Quicksort has a disadvantage there as its worst case time complexity of O(n^2). Mergesort has the disadvantage that its memory complexity is O(n) whereas Heapsort is O(1).
- [More](https://stackoverflow.com/questions/18163414/in-which-cases-do-we-use-heapsort)

**Cons**

- **It is unstable sort** - A stable sort maintains the relative order of items that have the same key. i.e the way they are present in initial array. Heapsort is unstable sort. It might rearrange the relative order. 
- [Expensive constant factors](https://stackoverflow.com/questions/8311090/why-not-use-heap-sort-always)
- Quicksort and mergesort are both easier to parallelize than heapsort.
- Cache inefficient.
- Not really adaptive (Doesn't get faster if given somewhat sorted array).

----------------

### Leetcode Questions
- [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/)
