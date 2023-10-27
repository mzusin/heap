import { IHeap } from '../interfaces';
import { HeapType } from './main';

/**
 * Heap as array implementation.
 * There are two standard algorithms for building a heap.
 *
 * 1. The first is to start with an empty heap and to repeatedly insert elements into it one at a time.
 * Each individual insertion takes time O(log n).
 * It turns out that, in the worst case, the runtime is Θ(n log n),
 * which happens if you insert the elements in reverse-sorted order.
 *
 * 2. The second approach is the heapify algorithm.
 * This algorithm runs in time O(n) regardless of the input.
 * Correct algorithm: start at the end of the array and move backwards towards the front.
 * At each iteration, you move an item down until it is in the correct location. O(n) time.
 *
 * The heapify algorithm is also used when you already have a ready-made array of data.
 * The first algorithm is used when you do not know in advance how much and what kind of data there will be.
 * If you're getting elements one at a time, the heapify algorithm is not as good.
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

        let smallerOrLargest = index; // largest for max heap, smaller for min heap
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

    /**
     * To add a node, add it to the end of the tree,
     * and then correct the condition.
     */
    const add = (val: number) => {
        data.push(val);
        bottomUp(data.length - 1);
    };

    /**
     * To delete a node, take the last node and put it instead of root,
     * and then correct the condition.
     */
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