import { IHeap } from '../interfaces';
import { HeapType } from './core';

/**
 * Heap as array implementation.
 */
export const heap = (type: HeapType) : IHeap => {

    const data: number[] = [];

    /**
     * Return the number of heap items.
     */
    const size = () : number => {
        return data.length;
    };

    /**
     * Parent index: Math.floor((index - 1) / 2)
     */
    const bottomUp = (index: number) => {

        if(size() <= 1) return;

        const parentIndex = Math.floor((index - 1) / 2);

        switch (type) {
            case HeapType.MinHeap: {
                if(data[parentIndex] > data[index]){
                    [data[parentIndex], data[index]] = [data[index], data[parentIndex]];
                    bottomUp(parentIndex);
                }
                break;
            }

            case HeapType.MaxHeap: {
                if(data[parentIndex] < data[index]){
                    [data[parentIndex], data[index]] = [data[index], data[parentIndex]];
                    bottomUp(parentIndex);
                }
                break;
            }
        }
    };

    /**
     * Left child index: 2 * index + 1
     * Right child index: 2 * index + 2
     */
    const topDown = (index: number) => {

        const n = size();

        let smallerOrLargest = index;
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = leftChildIndex + 1;

        switch (type) {
            case HeapType.MinHeap: {
                // smaller -----------------
                if(leftChildIndex < n && data[leftChildIndex] < data[smallerOrLargest]){
                    smallerOrLargest = leftChildIndex;
                }

                if(rightChildIndex < n && data[rightChildIndex] < data[smallerOrLargest]){
                    smallerOrLargest = rightChildIndex;
                }
                break;
            }

            case HeapType.MaxHeap: {
                // largest --------------
                if(leftChildIndex < n && data[leftChildIndex] > data[smallerOrLargest]){
                    smallerOrLargest = leftChildIndex;
                }

                if(rightChildIndex < n && data[rightChildIndex] > data[smallerOrLargest]){
                    smallerOrLargest = rightChildIndex;
                }
                break;
            }
        }

        if(index !== smallerOrLargest){
            [data[index], data[smallerOrLargest]] = [data[smallerOrLargest], data[index]];
            topDown(smallerOrLargest);
        }
    };

    const add = (val: number) => {
        data.push(val);
        bottomUp(data.length - 1);
    };

    const poll = () : number|null => {
        if(size() <= 0) return null;

        const min = data[0];

        data[0] = data[size() - 1];
        data.pop();
        topDown(0);

        return min;
    };

    const peek = () : number|null => {
        return size() > 0 ? data[0] : null;
    };

    const isLeaf = (index: number) => {
        const n = size();
        return index >= Math.floor(n / 2) && index < n;
    };

    return {
        add,
        poll,
        peek,
        size,
        isLeaf,
    }
};