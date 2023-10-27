import { minHeap, maxHeap } from './core/main';

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

export * from './core/main';