# Heap (Binary Heap, Priority Queue)

Typescript implementation of minimum and maximum heap (priority queue).

## maxHeap

```ts
import { maxHeap } from './src/core/max-heap';

const heap = maxHeap();

heap.add(5);
heap.add(3);

console.log(heap.peek());
console.log(heap.size());
console.log(heap.isLeaf(1));

heap.poll();
heap.poll();
```

```ts
import { minHeap } from './src/core/min-heap';

const heap = minHeap();

heap.add(5);
heap.add(3);

console.log(heap.peek());
console.log(heap.size());
console.log(heap.isLeaf(1));

heap.poll();
heap.poll();
```

## minHeap

```ts
import { maxHeap } from './src/core/max-heap';

const heap = maxHeap();

heap.add(5);
heap.add(3);

console.log(heap.peek());
console.log(heap.size());

heap.poll();
heap.poll();
```

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
