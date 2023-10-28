export interface IHeap {
    add: (val: number) => number|null;
    addList: (values: number[]) => void;
    poll: () => number | null;
    peek: () => number | null;
    size: () => number;
    isLeaf: (index: number) => boolean;
}