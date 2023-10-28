import { IHeap } from '../interfaces';
import { heap } from './heap';

export enum HeapType {
    MinHeap = 1,
    MaxHeap = 2,
}

export const maxHeap = () : IHeap => {
    return heap(HeapType.MaxHeap);
};

export const minHeap = () : IHeap => {
    return heap(HeapType.MinHeap);
};

export const kLargest = (values: number[], k: number) => {
    const heap = maxHeap();
    heap.addList(values);
};