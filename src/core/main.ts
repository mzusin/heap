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