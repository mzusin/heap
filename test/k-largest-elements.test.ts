import { findTopKLargestElements, findTopKLargestElementsNaive, findTopKLargestElementsNaive1 } from '../src/core/find-top-k-elements';

describe('findTopKLargestElementsNaive', () => {
    it('should find the top K largest elements', () => {
        const values = [5, 3, 8, 2, 7];

        // Find the top 1 largest element.
        expect(findTopKLargestElementsNaive(values, 1)).toEqual([8]);

        // Find the top 2 largest elements.
        expect(findTopKLargestElementsNaive(values, 2)).toEqual([8, 7]);

        // Find the top 3 largest elements.
        expect(findTopKLargestElementsNaive(values, 3)).toEqual([8, 7, 5]);

        // Find the top 4 largest elements.
        expect(findTopKLargestElementsNaive(values, 4)).toEqual([8, 7, 5, 3]);

        // Find the top 5 largest elements (all elements in descending order).
        expect(findTopKLargestElementsNaive(values, 5)).toEqual([8, 7, 5, 3, 2]);
    });

    it('should return an empty array for K less than 1', () => {
        const values = [5, 3, 8, 2, 7];

        // K is less than 1.
        expect(findTopKLargestElementsNaive(values, 0)).toEqual([]);

        // K is negative.
        expect(findTopKLargestElementsNaive(values, -2)).toEqual([]);

        // K is zero.
        expect(findTopKLargestElementsNaive(values, -0)).toEqual([]);
    });

    it('should return an empty array for an empty input array', () => {
        // K is any non-zero positive value for an empty array.
        expect(findTopKLargestElementsNaive([], 1)).toEqual([]);
    });

    it('should return all elements for K greater than array size', () => {
        const values = [5, 3, 8, 2, 7];

        // K is greater than the array size.
        expect(findTopKLargestElementsNaive(values, 10)).toEqual([8, 7, 5, 3, 2]);
    });
});

describe('findTopKLargestElementsNaive1', () => {
    it('should find the top K largest elements', () => {
        const values = [5, 3, 8, 2, 7];

        // Find the top 1 largest element.
        expect(findTopKLargestElementsNaive1(values, 1)).toEqual([8]);

        // Find the top 2 largest elements.
        expect(findTopKLargestElementsNaive1(values, 2)).toEqual([8, 7]);

        // Find the top 3 largest elements.
        expect(findTopKLargestElementsNaive1(values, 3)).toEqual([8, 7, 5]);

        // Find the top 4 largest elements.
        expect(findTopKLargestElementsNaive1(values, 4)).toEqual([8, 7, 5, 3]);

        // Find the top 5 largest elements (all elements in descending order).
        expect(findTopKLargestElementsNaive1(values, 5)).toEqual([8, 7, 5, 3, 2]);
    });

    it('should return an empty array for K less than 1', () => {
        const values = [5, 3, 8, 2, 7];

        // K is less than 1.
        expect(findTopKLargestElementsNaive1(values, 0)).toEqual([]);

        // K is negative.
        expect(findTopKLargestElementsNaive1(values, -2)).toEqual([]);

        // K is zero.
        expect(findTopKLargestElementsNaive1(values, -0)).toEqual([]);
    });

    it('should return an empty array for an empty input array', () => {
        // K is any non-zero positive value for an empty array.
        expect(findTopKLargestElementsNaive1([], 1)).toEqual([]);
    });

    it('should return all elements for K greater than array size', () => {
        const values = [5, 3, 8, 2, 7];

        // K is greater than the array size.
        expect(findTopKLargestElementsNaive1(values, 10)).toEqual([8, 7, 5, 3, 2]);
    });
});

describe('findTopKLargestElements', () => {
    it('should find the top K largest elements', () => {
        const values = [5, 3, 8, 2, 7];

        // Find the top 1 largest element.
        expect(findTopKLargestElements(values, 1)).toEqual([8]);

        // Find the top 2 largest elements.
        expect(findTopKLargestElements(values, 2)).toEqual([7, 8]);

        // Find the top 3 largest elements.
        expect(findTopKLargestElements(values, 3)).toEqual([5, 7, 8]);

        // Find the top 4 largest elements.
        expect(findTopKLargestElements(values, 4)).toEqual([3, 5, 7, 8]);

        // Find the top 5 largest elements (all elements in descending order).
        expect(findTopKLargestElements(values, 5)).toEqual([2, 3, 5, 7, 8]);
    });

    it('should return an empty array for K less than 1', () => {
        const values = [5, 3, 8, 2, 7];

        // K is less than 1.
        expect(findTopKLargestElements(values, 0)).toEqual([]);

        // K is negative.
        expect(findTopKLargestElements(values, -2)).toEqual([]);

        // K is zero.
        expect(findTopKLargestElements(values, -0)).toEqual([]);
    });

    it('should return an empty array for an empty input array', () => {
        // K is any non-zero positive value for an empty array.
        expect(findTopKLargestElements([], 1)).toEqual([]);
    });

    it('should return all elements for K greater than array size', () => {
        const values = [5, 3, 8, 2, 7];

        // K is greater than the array size.
        expect(findTopKLargestElements(values, 10)).toEqual([2, 3, 5, 7, 8]);
    });

    it('should find the top K largest elements for [1]', () => {
        const values = [1];

        // Find the top 1 largest element.
        expect(findTopKLargestElements(values, 1)).toEqual([1]);

    });
});