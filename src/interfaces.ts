export interface IHeap {
    add: (val: number) => void;
    addList: (values: number[]) => void;
    poll: () => number | null;
    peek: () => number | null;
    size: () => number;
    isLeaf: (index: number) => boolean;
}