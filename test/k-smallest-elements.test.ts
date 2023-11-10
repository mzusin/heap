import { findTopKSmallestElements, findTopKSmallestElementsNaive, findTopKSmallestElementsNaive1 } from '../src/core/find-top-k-elements';

describe('findTopKSmallestElementsNaive', () => {
    it('should find the top K smallest elements', () => {
        const values = [5, 3, 8, 2, 7];

        // Find the top 1 smallest element.
        expect(findTopKSmallestElementsNaive(values, 1)).toEqual([2]);

        // Find the top 2 smallest elements.
        expect(findTopKSmallestElementsNaive(values, 2)).toEqual([2, 3]);

        // Find the top 3 smallest elements.
        expect(findTopKSmallestElementsNaive(values, 3)).toEqual([2, 3, 5]);

        // Find the top 4 smallest elements.
        expect(findTopKSmallestElementsNaive(values, 4)).toEqual([2, 3, 5, 7]);

        // Find the top 5 smallest elements (all elements in ascending order).
        expect(findTopKSmallestElementsNaive(values, 5)).toEqual([2, 3, 5, 7, 8]);
    });

    it('should return an empty array for K less than 1', () => {
        const values = [5, 3, 8, 2, 7];

        // K is less than 1.
        expect(findTopKSmallestElementsNaive(values, 0)).toEqual([]);

        // K is negative.
        expect(findTopKSmallestElementsNaive(values, -2)).toEqual([]);

        // K is zero.
        expect(findTopKSmallestElementsNaive(values, -0)).toEqual([]);
    });

    it('should return an empty array for an empty input array', () => {
        // K is any non-zero positive value for an empty array.
        expect(findTopKSmallestElementsNaive([], 1)).toEqual([]);
    });

    it('should return all elements for K greater than array size', () => {
        const values = [5, 3, 8, 2, 7];

        // K is greater than the array size.
        expect(findTopKSmallestElementsNaive(values, 10)).toEqual([2, 3, 5, 7, 8]);
    });
});

describe('findTopKSmallestElementsNaive1', () => {
    it('should find the top K smallest elements', () => {
        const values = [5, 3, 8, 2, 7];

        // Find the top 1 smallest element.
        expect(findTopKSmallestElementsNaive1(values, 1)).toEqual([2]);

        // Find the top 2 smallest elements.
        expect(findTopKSmallestElementsNaive1(values, 2)).toEqual([2, 3]);

        // Find the top 3 smallest elements.
        expect(findTopKSmallestElementsNaive1(values, 3)).toEqual([2, 3, 5]);

        // Find the top 4 smallest elements.
        expect(findTopKSmallestElementsNaive1(values, 4)).toEqual([2, 3, 5, 7]);

        // Find the top 5 smallest elements (all elements in ascending order).
        expect(findTopKSmallestElementsNaive1(values, 5)).toEqual([2, 3, 5, 7, 8]);
    });

    it('should return an empty array for K less than 1', () => {
        const values = [5, 3, 8, 2, 7];

        // K is less than 1.
        expect(findTopKSmallestElementsNaive1(values, 0)).toEqual([]);

        // K is negative.
        expect(findTopKSmallestElementsNaive1(values, -2)).toEqual([]);

        // K is zero.
        expect(findTopKSmallestElementsNaive1(values, -0)).toEqual([]);
    });

    it('should return an empty array for an empty input array', () => {
        // K is any non-zero positive value for an empty array.
        expect(findTopKSmallestElementsNaive1([], 1)).toEqual([]);
    });

    it('should return all elements for K greater than array size', () => {
        const values = [5, 3, 8, 2, 7];

        // K is greater than the array size.
        expect(findTopKSmallestElementsNaive1(values, 10)).toEqual([2, 3, 5, 7, 8]);
    });
});

describe('findTopKSmallestElements', () => {
    it('should find the top K smallest elements', () => {
        const values = [5, 3, 8, 2, 7];

        // Find the top 1 smallest element.
        expect(findTopKSmallestElements(values, 1)).toEqual([2]);

        // Find the top 2 smallest elements.
        expect(findTopKSmallestElements(values, 2)).toEqual([3, 2]);

        // Find the top 3 smallest elements.
        expect(findTopKSmallestElements(values, 3)).toEqual([5, 3, 2]);

        // Find the top 4 smallest elements.
        expect(findTopKSmallestElements(values, 4)).toEqual([7, 5, 3, 2]);

        // Find the top 5 smallest elements (all elements in ascending order).
        expect(findTopKSmallestElements(values, 5)).toEqual([8, 7, 5, 3, 2]);
    });

    it('should return an empty array for K less than 1', () => {
        const values = [5, 3, 8, 2, 7];

        // K is less than 1.
        expect(findTopKSmallestElements(values, 0)).toEqual([]);

        // K is negative.
        expect(findTopKSmallestElements(values, -2)).toEqual([]);

        // K is zero.
        expect(findTopKSmallestElements(values, -0)).toEqual([]);
    });

    it('should return an empty array for an empty input array', () => {
        // K is any non-zero positive value for an empty array.
        expect(findTopKSmallestElements([], 1)).toEqual([]);
    });

    it('should return all elements for K greater than array size', () => {
        const values = [5, 3, 8, 2, 7];

        // K is greater than the array size.
        expect(findTopKSmallestElements(values, 10)).toEqual([8, 7, 5, 3, 2]);
    });
});