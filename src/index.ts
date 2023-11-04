import {
    minHeap, maxHeap,
    findKthLargestValue,
    findKthSmallestValue,
    findTopKLargestElements, findTopKSmallestElements,
} from './core/main';

const api = {
    ...minHeap,
    ...maxHeap,
    ...findKthLargestValue,
    ...findKthSmallestValue,
    ...findTopKLargestElements,
    ...findTopKSmallestElements,
};

declare global {
    interface Window {
        mzHeap: typeof api,
    }
}

window.mzHeap = window.mzHeap || api;

export * from './core/main';