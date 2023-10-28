import {
    maxHeap,
} from '../src/core/main';
import { IHeap } from '../src/interfaces';

describe('Max Heap', () => {
    let heap: IHeap;

    beforeEach(() => {
        heap = maxHeap();
    });

    it('should add elements and maintain the max heap property', () => {
        expect(heap.add(5)).toBe(5);
        expect(heap.add(3)).toBe(5);
        expect(heap.add(8)).toBe(8);
        expect(heap.add(2)).toBe(8);
        expect(heap.add(7)).toBe(8);

        expect(heap.size()).toBe(5);
    });

    it('should remove and return the maximum element', () => {
        heap.add(5);
        heap.add(3);
        heap.add(8);
        heap.add(2);
        heap.add(7);

        expect(heap.poll()).toBe(8);
        expect(heap.poll()).toBe(7);
        expect(heap.poll()).toBe(5);
        expect(heap.poll()).toBe(3);
        expect(heap.poll()).toBe(2);
        expect(heap.poll()).toBeNull();
    });

    it('should return null when peeking an empty heap', () => {
        expect(heap.peek()).toBeNull();
    });

    it('should return the size of the heap', () => {
        expect(heap.size()).toBe(0);

        heap.add(5);
        expect(heap.size()).toBe(1);

        heap.add(3);
        expect(heap.size()).toBe(2);

        heap.poll();
        expect(heap.size()).toBe(1);

        heap.poll();
        expect(heap.size()).toBe(0);
    });

    it('isLeaf should return true for leaf nodes', () => {
        heap.add(5);
        heap.add(3);
        heap.add(8);
        heap.add(2);
        heap.add(7);

        // Leaf nodes are at indices 2, 3, and 4 in the max heap.
        expect(heap.isLeaf(2)).toBe(true);
        expect(heap.isLeaf(3)).toBe(true);
        expect(heap.isLeaf(4)).toBe(true);
    });

    it('isLeaf should return false for non-leaf nodes', () => {
        heap.add(5);
        heap.add(3);
        heap.add(8);
        heap.add(2);
        heap.add(7);

        // Non-leaf nodes are at indices 0 and 1 in the max heap.
        expect(heap.isLeaf(0)).toBe(false);
        expect(heap.isLeaf(1)).toBe(false);
    });

    it('isLeaf should return false for empty heap', () => {
        expect(heap.isLeaf(0)).toBe(false);
    });

    it('isLeaf should return false for invalid indices', () => {
        heap.add(5);
        heap.add(3);

        // Indices outside the valid range.
        expect(heap.isLeaf(-1)).toBe(false);
        expect(heap.isLeaf(2)).toBe(false);
        expect(heap.isLeaf(100)).toBe(false);
    });

    it('addList should add an array of values to the heap and maintain the max heap property', () => {
        heap.addList([5, 3, 8, 2, 7]);

        // The expected order in a max heap is [8, 7, 5, 3, 2].
        expect(heap.poll()).toBe(8);
        expect(heap.poll()).toBe(7);
        expect(heap.poll()).toBe(5);
        expect(heap.poll()).toBe(3);
        expect(heap.poll()).toBe(2);
    });

    it('addList should handle an empty array', () => {
        heap.addList([]);

        // The heap should remain empty.
        expect(heap.size()).toBe(0);
        expect(heap.poll()).toBeNull();
    });

    it('addList should maintain the max heap property for a large array', () => {
        const largeArray = [10, 8, 6, 4, 2, 1, 9, 7, 5, 3];
        heap.addList(largeArray);

        // The expected order in a max heap is [10, 9, 6, 8, 7, 1, 4, 5, 2, 3].
        expect(heap.poll()).toBe(10);
        expect(heap.poll()).toBe(9);
        expect(heap.poll()).toBe(8);
        expect(heap.poll()).toBe(7);
        expect(heap.poll()).toBe(6);
        expect(heap.poll()).toBe(5);
        expect(heap.poll()).toBe(4);
        expect(heap.poll()).toBe(3);
        expect(heap.poll()).toBe(2);
        expect(heap.poll()).toBe(1);
    });
});