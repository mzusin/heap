/*import { maxHeap, minHeap } from '../src/core/main';

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