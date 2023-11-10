declare module 'mz-heap' {

    export interface IHeap {
        add: (val: number) => number | null;
        addList: (values: number[]) => void;
        poll: () => number | null;
        peek: () => number | null;
        size: () => number;
        isLeaf: (index: number) => boolean;
        values: () => number[];
    }

    export enum HeapType {
        MinHeap = 1,
        MaxHeap = 2
    }

    export const heap: (type: HeapType, values?: number[]) => IHeap;
    export const maxHeap: (values?: number[]) => IHeap;
    export const minHeap: (values?: number[]) => IHeap;

    export const findTopKLargestElements: (values: number[], k: number) => number[];
    export const findTopKSmallestElements: (values: number[], k: number) => number[];

    export const findKthLargestValueNaive: (values: number[], k: number) => number|null;
    export const findKthSmallestValueNaive: (values: number[], k: number) => number|null;
    export const findKthLargestValueNaive1: (values: number[], k: number) => number | null;
    export const findKthSmallestValueNaive1: (values: number[], k: number) => number | null;
    export const findKthLargestValue: (values: number[], k: number) => number | null;
    export const findKthSmallestValue: (values: number[], k: number) => number | null;
}