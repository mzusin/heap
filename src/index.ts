import * as core from './heap';

const api = {
    ...core,
};

declare global {
    interface Window {
        mzHeap: typeof api,
    }
}

window.mzHeap = window.mzHeap || api;

export * from './heap';