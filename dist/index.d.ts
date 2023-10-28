declare module 'mz-heap' {

    export interface IHeap {
        add: (val: number) => number|null;
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
    export const maxHeap: (values?: number[], k?: number) => IHeap;
    export const minHeap: (values?: number[], k?: number) => IHeap;
}