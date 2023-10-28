import { IHeap } from '../interfaces';
import { heap } from './heap';

export enum HeapType {
    MinHeap = 1,
    MaxHeap = 2,
}

export const maxHeap = (values?: number[]) : IHeap => {
    return heap(HeapType.MaxHeap, values);
};

export const minHeap = (values?: number[]) : IHeap => {
    return heap(HeapType.MinHeap, values);
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

export const findTopKLargestElements = (values: number[], k: number): number[] => {
    if(k < 0) return [];

    const topK = [];
    const heap = maxHeap(values);

    for (let i = 0; i < k; i++) {
        const topElement = heap.poll();
        if (topElement === null) break;
        topK.push(topElement);
    }

    return topK;
};

export const findTopKSmallestElements = (values: number[], k: number): number[] => {
    if(k < 0) return [];

    const topK = [];
    const heap = minHeap(values);

    for (let i = 0; i < k; i++) {
        const topElement = heap.poll();
        if (topElement === null) break;
        topK.push(topElement);
    }

    return topK;
};
