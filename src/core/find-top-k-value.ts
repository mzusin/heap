import { maxHeap, minHeap } from './main';

export const findKthLargestValueNaive = (values: number[], k: number) : number => {
    return (values.sort((a, b) => b - a))[k - 1] ?? null;
};

export const findKthSmallestValueNaive = (values: number[], k: number) : number => {
    return (values.sort((a, b) => a - b))[k - 1] ?? null;
};

/**
 * We can extract the maximum element from the max-heap k times
 * and the last element extracted will be the kth greatest element.
 * Each deletion operations takes O(log n) time,
 * so the total time complexity of this approach comes out to be O(k * log n).
 */
export const findKthLargestValue = (values: number[], k: number): number|null => {
    if(k < 0) return null;

    const heap = maxHeap(values);

    for (let i = 0; i < k - 1; i++) {
        const topElement = heap.poll();
        if (topElement === null) break;
    }

    return heap.peek();
};

export const findKthSmallestValue = (values: number[], k: number): number|null => {
    if(k < 0) return null;

    const heap = minHeap(values);

    for (let i = 0; i < k - 1; i++) {
        const topElement = heap.poll();
        if (topElement === null) break;
    }

    return heap.peek();
};