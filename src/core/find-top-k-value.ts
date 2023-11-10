import { maxHeap, minHeap } from './main';

/**
 * O(N log N)
 */
export const findKthLargestValueNaive = (values: number[], k: number) : number => {
    return (values.sort((a, b) => b - a))[k - 1] ?? null;
};

/**
 * O(N log N)
 */
export const findKthSmallestValueNaive = (values: number[], k: number) : number => {
    return (values.sort((a, b) => a - b))[k - 1] ?? null;
};

/**
 * Space complexity: O(N)
 * Time complexity: O(K log N)
 *
 * We can extract the maximum element from the max-heap k times
 * and the last element extracted will be the kth greatest element.
 * Each deletion operations takes O(log n) time,
 * so the total time complexity of this approach comes out to be O(K * log N).
 */
export const findKthLargestValueNaive1 = (values: number[], k: number): number|null => {
    if(k < 0 || k >= values.length) return null;

    const heap = maxHeap(values);

    for (let i = 0; i < k - 1; i++) {
        const topElement = heap.poll();
        if (topElement === null) break;
    }

    return heap.peek();
};

export const findKthSmallestValueNaive1 = (values: number[], k: number): number|null => {
    if(k < 0 || k >= values.length) return null;

    const heap = minHeap(values);

    for (let i = 0; i < k - 1; i++) {
        const topElement = heap.poll();
        if (topElement === null) break;
    }

    return heap.peek();
};

/**
 * Space complexity: O(K)
 * Time complexity: O(N log K)
 *
 * The idea is to init a heap, and add all elements from the array into this heap one by one
 * keeping the size of the heap always less or equal to k.
 * That would result in a heap containing k largest elements of the array.
 * The head of this heap is the answer, i.e. the kth largest element of the array.
 * The time complexity of adding an element in a heap of size k is O(log k).
 * We do it N times that means O(N log k) time complexity for the algorithm.
 */
export const findKthLargestValue = (values: number[], k: number): number|null => {
    if(k < 0 || k >= values.length) return null;

    const heap = minHeap();

    for (let i = 0; i < values.length; i++) {
        heap.add(values[i]);
        if(heap.size() > k){
            heap.poll();
        }
    }

    return heap.peek();
};

export const findKthSmallestValue = (values: number[], k: number): number|null => {
    if(k < 0 || k >= values.length) return null;

    const heap = maxHeap();

    for (let i = 0; i < values.length; i++) {
        heap.add(values[i]);
        if(heap.size() > k){
            heap.poll();
        }
    }

    return heap.peek();
};