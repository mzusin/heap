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
