import { maxHeap } from '../src/core/main';

describe('Max Heap', () => {
    it('should find the top K largest elements', () => {
        const heap = maxHeap([5, 3, 8, 2, 7], 3);
        expect(heap.values()).toEqual([8, 7, 5]);
    });/*

    it('should return an empty array for top K largest when K is 0', () => {
        const heap = maxHeap([5, 3, 8, 2, 7]);
        const kLargest = heap.findTopK(0);

        expect(kLargest).toEqual([]);
    });

    it('should return an empty array for top K largest when K is greater than the heap size', () => {
        const heap = maxHeap([5, 3, 8, 2, 7]);
        const kLargest = heap.findTopK(10);

        expect(kLargest).toEqual([]);
    });

    it('should find the top K smallest elements', () => {
        const heap = maxHeap([5, 3, 8, 2, 7]);
        const kSmallest = heap.findTopK(3, false); // Use the `false` flag for smallest elements.

        expect(kSmallest).toEqual([2, 3, 5]);
    });

    it('should return an empty array for top K smallest when K is 0', () => {
        const heap = maxHeap([5, 3, 8, 2, 7]);
        const kSmallest = heap.findTopK(0, false); // Use the `false` flag for smallest elements.

        expect(kSmallest).toEqual([]);
    });

    it('should return an empty array for top K smallest when K is greater than the heap size', () => {
        const heap = maxHeap([5, 3, 8, 2, 7]);
        const kSmallest = heap.findTopK(10, false); // Use the `false` flag for smallest elements.

        expect(kSmallest).toEqual([]);
    });*/
});