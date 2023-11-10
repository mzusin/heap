import {
    minHeap, maxHeap,
    findTopKLargestElements, findTopKSmallestElements,
} from './core/main';

import {
    findKthLargestValue,
    findKthSmallestValue,
} from './core/find-top-k-value';

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