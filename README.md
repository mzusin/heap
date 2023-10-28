# Heap (Binary Heap, Priority Queue)

Typescript implementation of minimum and maximum heap (priority queue).

## Documentation

| Method  | Description                                                                                                                                                  |                                 |
|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------|
| add     | Adds a single element with the specified value to the heap while maintaining the appropriate heap property.                                                  | add: (val: number) => number    |null          |
| addList | Adds an array of elements to the heap and maintains the appropriate heap property after each addition.                                                       | addList(values: number[]): void |
| poll    | Removes and returns the root element of the heap, which is either the maximum (in a Max Heap) or the minimum (in a Min Heap) element.                        | poll(): number                  | null                      |
| peek    | Returns the root element of the heap, which is either the maximum (in a Max Heap) or the minimum (in a Min Heap) element, without removing it from the heap. | peek(): number                  | null                      |
| size    | Returns the number of elements currently present in the heap.                                                                                                | size(): number                  |
| isLeaf  | Checks if the element at the specified index in the heap is a leaf node.                                                                                     | isLeaf(index: number): boolean  |


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
