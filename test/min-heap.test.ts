import {
    minHeap,
} from '../src/core/core';
import { IHeap } from '../src/interfaces';

describe('Min Heap', () => {
    let heap : IHeap;

    beforeEach(() => {
        heap = minHeap();
    });

    it('should add elements and maintain the min heap property', () => {
        heap.add(5);
        expect(heap.peek()).toBe(5);

        heap.add(3);
        expect(heap.peek()).toBe(3);

        heap.add(8);
        expect(heap.peek()).toBe(3);

        heap.add(2);
        expect(heap.peek()).toBe(2);

        heap.add(7);
        expect(heap.peek()).toBe(2);

        expect(heap.size()).toBe(5);
    });

    it('should remove and return the minimum element', () => {
        heap.add(5);
        heap.add(3);
        heap.add(8);
        heap.add(2);
        heap.add(7);

        expect(heap.poll()).toBe(2);
        expect(heap.poll()).toBe(3);
        expect(heap.poll()).toBe(5);
        expect(heap.poll()).toBe(7);
        expect(heap.poll()).toBe(8);
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

        // Leaf nodes are at indices 2, 3, and 4 in the min heap.
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

        // Non-leaf nodes are at indices 0 and 1 in the min heap.
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
});