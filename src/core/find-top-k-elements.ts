import { maxHeap, minHeap } from './main';

/**
 * O(N log N)
 */
export const findTopKLargestElementsNaive = (values: number[], k: number): number[] => {
    const copy = values.slice(0);
    copy.sort((a, b) => b - a);
    return copy.splice(0, k)
};

/**
 * O(N log N)
 */
export const findTopKSmallestElementsNaive = (values: number[], k: number): number[] => {
    const copy = values.slice(0);
    copy.sort((a, b) => a - b);
    return copy.splice(0, k)
};

/**
 * O(K log N)
 */
export const findTopKLargestElementsNaive1 = (values: number[], k: number): number[] => {
    if(k < 0) return [];

    const topK = [];
    const heap = maxHeap(values);

    for (let i = 0; i < k; i++) {
        const topElement = heap.poll();
        if (topElement === null) break;
        topK.push(topElement);
    }

    return topK;
};

/**
 * O(K log N)
 */
export const findTopKSmallestElementsNaive1 = (values: number[], k: number): number[] => {
    if(k < 0) return [];

    const topK = [];
    const heap = minHeap(values);

    for (let i = 0; i < k; i++) {
        const topElement = heap.poll();
        if (topElement === null) break;
        topK.push(topElement);
    }

    return topK;
};

/**
 * O(N log K)
 */
export const findTopKLargestElements = (values: number[], k: number): number[] => {
    if(k < 0) return [];

    const heap = minHeap();

    for (let i = 0; i < values.length; i++) {
        heap.add(values[i]);
        if(heap.size() > k){
            heap.poll();
        }
    }

    const topK = [];
    while(heap.size() > 0) {
        const topElement = heap.poll();
        if (topElement === null) break;
        topK.push(topElement);
    }

    return topK;
};

/**
 * O(N log K)
 */
export const findTopKSmallestElements = (values: number[], k: number): number[] => {
    if(k < 0) return [];

    const heap = maxHeap();

    for (let i = 0; i < values.length; i++) {
        heap.add(values[i]);
        if(heap.size() > k){
            heap.poll();
        }
    }

    const topK = [];
    while(heap.size() > 0) {
        const topElement = heap.poll();
        if (topElement === null) break;
        topK.push(topElement);
    }

    return topK;
};
