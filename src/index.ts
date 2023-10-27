import { minHeap } from './core/min-heap';
import { maxHeap } from './core/max-heap';

const api = {
    ...minHeap,
    ...maxHeap,
};

declare global {
    interface Window {
        mzHeap: typeof api,
    }
}

window.mzHeap = window.mzHeap || api;

export * from './core/min-heap';
export * from './core/max-heap';