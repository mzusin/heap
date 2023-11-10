import { minHeap, maxHeap } from './core/main';

import {
    findKthLargestValue, findKthLargestValueNaive, findKthLargestValueNaive1,
    findKthSmallestValue, findKthSmallestValueNaive, findKthSmallestValueNaive1,
} from './core/find-top-k-value';

import {
    findTopKLargestElements, findTopKLargestElementsNaive, findTopKLargestElementsNaive1,
    findTopKSmallestElements, findTopKSmallestElementsNaive, findTopKSmallestElementsNaive1,
} from './core/find-top-k-elements';

const api = {
    ...minHeap,
    ...maxHeap,

    ...findTopKLargestElementsNaive,
    ...findTopKLargestElementsNaive1,
    ...findTopKLargestElements,

    ...findKthLargestValueNaive,
    ...findKthLargestValueNaive1,
    ...findKthLargestValue,

    ...findKthSmallestValueNaive,
    ...findKthSmallestValueNaive1,
    ...findKthSmallestValue,

    ...findTopKSmallestElementsNaive,
    ...findTopKSmallestElementsNaive1,
    ...findTopKSmallestElements,
};

declare global {
    interface Window {
        mzHeap: typeof api,
    }
}

window.mzHeap = window.mzHeap || api;

export * from './core/main';
export * from './core/find-top-k-value';
export * from './core/find-top-k-elements';