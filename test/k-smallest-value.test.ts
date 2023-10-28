import { findKthSmallestValue } from '../src/core/main';

describe('findKthSmallestValue()', () => {
    it('findKthSmallestValue([5, 3, 8, 2, 7], 3)', () => {
        expect(findKthSmallestValue([5, 3, 8, 2, 7], 3)).toEqual(5);
    });

    it('findKthSmallestValue([], 3)', () => {
        expect(findKthSmallestValue([], 3)).toEqual(null);
    });

    it('findKthSmallestValue([5, 3, 8, 2, 7], 1000)', () => {
        expect(findKthSmallestValue([5, 3, 8, 2, 7], 1000)).toEqual(null);
    });

    it('findKthSmallestValue([5, 3, 8, 2, 7], 1)', () => {
        expect(findKthSmallestValue([5, 3, 8, 2, 7], 1)).toEqual(2);
    });

    it('should find the Kth smallest element with negative numbers', () => {
        const values = [5, -3, 8, -2, 7, -1];

        // Find the 1st smallest element.
        expect(findKthSmallestValue(values, 1)).toBe(-3);

        // Find the 2nd smallest element.
        expect(findKthSmallestValue(values, 2)).toBe(-2);

        // Find the 3rd smallest element.
        expect(findKthSmallestValue(values, 3)).toBe(-1);

        // Find the 4th smallest element.
        expect(findKthSmallestValue(values, 4)).toBe(5);

        // Find the 5th smallest element.
        expect(findKthSmallestValue(values, 5)).toBe(7);

        // Find the 6th smallest element (minimum in the original array).
        expect(findKthSmallestValue(values, 6)).toBe(8);
    });

    it('should return null for out-of-bounds K with negative numbers', () => {
        const values = [5, -3, 8, -2, 7, -1];

        // K is less than 1.
        expect(findKthSmallestValue(values, -1)).toBeNull();

        // K is greater than the array size.
        expect(findKthSmallestValue(values, 7)).toBeNull();
    });
});

/*
describe('Max Heap', () => {
    it('should find the top K = 3 smallest elements', () => {
        const heap = maxHeap([5, 3, 8, 2, 7], 3);
        expect(heap.getTopK()).toEqual([8, 7, 5]);
    });

    it('should find the top K = 4 smallest elements', () => {
        const heap = maxHeap([5, 3, 8, 12, 2, 7, 0, -1], 4);
        expect(heap.getTopK()).toEqual([12, 8, 7, 5]);
    });

    it('should find the top K = 2 smallest elements', () => {
        const heap = maxHeap([5, 3, 8, 12, 2, 7, 0, -1], 2);
        expect(heap.getTopK()).toEqual([12, 8]);
    });

    it('should return an empty array for top K smallest when K is 0', () => {
        const heap = maxHeap([5, 3, 8, 2, 7], 0);
        expect(heap.getTopK()).toEqual([]);
    });

    it('should return an empty array for top K smallest when K is greater than the heap size', () => {
        const heap = maxHeap([5, 3, 8, 2, 7], 10);
        expect(heap.getTopK()).toEqual([]);
    });

    it('should find the top K smallest elements', () => {
        const heap = minHeap([5, 3, 8, 2, 7], 3);
        expect(heap.getTopK()).toEqual([2, 3, 5]);
    });

    it('should return an empty array for top K smallest when K is 0', () => {
        const heap = minHeap([5, 3, 8, 2, 7], 0);
        expect(heap.getTopK()).toEqual([]);
    });

    it('should return an empty array for top K smallest when K is greater than the heap size', () => {
        const heap = minHeap([5, 3, 8, 2, 7], 10);
        expect(heap.getTopK()).toEqual([]);
    });
});*/