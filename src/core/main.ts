import { IHeap } from '../interfaces';
import { heap } from './heap';

export enum HeapType {
    MinHeap = 1,
    MaxHeap = 2,
}

export const maxHeap = (values?: number[], k?: number) : IHeap => {
    return heap(HeapType.MaxHeap, values, k);
};

export const minHeap = (values?: number[], k?: number) : IHeap => {
    return heap(HeapType.MinHeap, values, k);
};
