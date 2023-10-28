import { findKthGreatest } from '../src/core/main';

describe('findKthGreatest()', () => {
    it('findKthGreatest([5, 3, 8, 2, 7], 3)', () => {
        expect(findKthGreatest([5, 3, 8, 2, 7], 3)).toEqual(5);
    });

    it('findKthGreatest([], 3)', () => {
        expect(findKthGreatest([], 3)).toEqual(null);
    });

    it('findKthGreatest([5, 3, 8, 2, 7], 1000)', () => {
        expect(findKthGreatest([5, 3, 8, 2, 7], 1000)).toEqual(null);
    });

    it('findKthGreatest([5, 3, 8, 2, 7], 1)', () => {
        expect(findKthGreatest([5, 3, 8, 2, 7], 1)).toEqual(8);
    });

    it('should find the Kth largest element with negative numbers', () => {
        const values = [5, -3, 8, -2, 7, -1];

        // Find the 1st largest element.
        expect(findKthGreatest(values, 1)).toBe(8);

        // Find the 2nd largest element.
        expect(findKthGreatest(values, 2)).toBe(7);

        // Find the 3rd largest element.
        expect(findKthGreatest(values, 3)).toBe(5);

        // Find the 4th largest element.
        expect(findKthGreatest(values, 4)).toBe(-1);

        // Find the 5th largest element.
        expect(findKthGreatest(values, 5)).toBe(-2);

        // Find the 6th largest element (minimum in the original array).
        expect(findKthGreatest(values, 6)).toBe(-3);
    });

    it('should return null for out-of-bounds K with negative numbers', () => {
        const values = [5, -3, 8, -2, 7, -1];

        // K is less than 1.
        expect(findKthGreatest(values, -1)).toBeNull();

        // K is greater than the array size.
        expect(findKthGreatest(values, 7)).toBeNull();
    });
});

/*
describe('Max Heap', () => {
    it('should find the top K = 3 largest elements', () => {
        const heap = maxHeap([5, 3, 8, 2, 7], 3);
        expect(heap.getTopK()).toEqual([8, 7, 5]);
    });

    it('should find the top K = 4 largest elements', () => {
        const heap = maxHeap([5, 3, 8, 12, 2, 7, 0, -1], 4);
        expect(heap.getTopK()).toEqual([12, 8, 7, 5]);
    });

    it('should find the top K = 2 largest elements', () => {
        const heap = maxHeap([5, 3, 8, 12, 2, 7, 0, -1], 2);
        expect(heap.getTopK()).toEqual([12, 8]);
    });

    it('should return an empty array for top K largest when K is 0', () => {
        const heap = maxHeap([5, 3, 8, 2, 7], 0);
        expect(heap.getTopK()).toEqual([]);
    });

    it('should return an empty array for top K largest when K is greater than the heap size', () => {
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