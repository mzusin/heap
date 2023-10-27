import {
    maxHeap,
} from '../src/core/max-heap';
import { IHeap } from '../src/interfaces';

describe('Max Heap', () => {
    let heap: IHeap;

    beforeEach(() => {
        heap = maxHeap();
    });

    it('should add elements and maintain the max heap property', () => {
        heap.add(5);
        expect(heap.peek()).toBe(5);

        heap.add(3);
        expect(heap.peek()).toBe(5);

        heap.add(8);
        expect(heap.peek()).toBe(8);

        heap.add(2);
        expect(heap.peek()).toBe(8);

        heap.add(7);
        expect(heap.peek()).toBe(8);

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
});