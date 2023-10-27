export interface IHeap {
    add: (val: number) => void;
    poll: () => number | null;
    peek: () => number | null;
    size: () => number;
}