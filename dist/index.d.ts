declare module 'mz-heap' {

    export interface IHeap {
        add: (val: number) => number|null;
        addList: (values: number[]) => void;
        poll: () => number | null;
        peek: () => number | null;
        size: () => number;
        isLeaf: (index: number) => boolean;
    }

    export enum HeapType {
        MinHeap = 1,
        MaxHeap = 2
    }

    export const heap: (type: HeapType) => IHeap;
    export const maxHeap: () => IHeap;
    export const minHeap: () => IHeap;
}