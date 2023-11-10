import { findKthSmallestValue, findKthSmallestValueNaive, findKthSmallestValueNaive1 } from '../src/core/find-top-k-value';

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

        expect(findKthSmallestValue(values, 6)).toBe(null);
    });

    it('should return null for out-of-bounds K with negative numbers', () => {
        const values = [5, -3, 8, -2, 7, -1];

        // K is less than 1.
        expect(findKthSmallestValue(values, -1)).toBeNull();

        // K is greater than the array size.
        expect(findKthSmallestValue(values, 7)).toBeNull();
    });
});

describe('findKthSmallestValueNaive()', () => {
    it('findKthSmallestValueNaive([5, 3, 8, 2, 7], 3)', () => {
        expect(findKthSmallestValueNaive([5, 3, 8, 2, 7], 3)).toEqual(5);
    });

    it('findKthSmallestValueNaive([], 3)', () => {
        expect(findKthSmallestValueNaive([], 3)).toEqual(null);
    });

    it('findKthSmallestValueNaive([5, 3, 8, 2, 7], 1000)', () => {
        expect(findKthSmallestValueNaive([5, 3, 8, 2, 7], 1000)).toEqual(null);
    });

    it('findKthSmallestValueNaive([5, 3, 8, 2, 7], 1)', () => {
        expect(findKthSmallestValueNaive([5, 3, 8, 2, 7], 1)).toEqual(2);
    });

    it('should find the Kth smallest element with negative numbers', () => {
        const values = [5, -3, 8, -2, 7, -1];

        // Find the 1st smallest element.
        expect(findKthSmallestValueNaive(values, 1)).toBe(-3);

        // Find the 2nd smallest element.
        expect(findKthSmallestValueNaive(values, 2)).toBe(-2);

        // Find the 3rd smallest element.
        expect(findKthSmallestValueNaive(values, 3)).toBe(-1);

        // Find the 4th smallest element.
        expect(findKthSmallestValueNaive(values, 4)).toBe(5);

        // Find the 5th smallest element.
        expect(findKthSmallestValueNaive(values, 5)).toBe(7);

        // Find the 6th smallest element (minimum in the original array).
        expect(findKthSmallestValueNaive(values, 6)).toBe(8);
    });

    it('should return null for out-of-bounds K with negative numbers', () => {
        const values = [5, -3, 8, -2, 7, -1];

        // K is less than 1.
        expect(findKthSmallestValueNaive(values, -1)).toBeNull();

        // K is greater than the array size.
        expect(findKthSmallestValueNaive(values, 7)).toBeNull();
    });
});

describe('findKthSmallestValueNaive1()', () => {
    it('findKthSmallestValueNaive1([5, 3, 8, 2, 7], 3)', () => {
        expect(findKthSmallestValueNaive1([5, 3, 8, 2, 7], 3)).toEqual(5);
    });

    it('findKthSmallestValueNaive1([], 3)', () => {
        expect(findKthSmallestValueNaive1([], 3)).toEqual(null);
    });

    it('findKthSmallestValueNaive1([5, 3, 8, 2, 7], 1000)', () => {
        expect(findKthSmallestValueNaive1([5, 3, 8, 2, 7], 1000)).toEqual(null);
    });

    it('findKthSmallestValueNaive1([5, 3, 8, 2, 7], 1)', () => {
        expect(findKthSmallestValueNaive1([5, 3, 8, 2, 7], 1)).toEqual(2);
    });

    it('should find the Kth smallest element with negative numbers', () => {
        const values = [5, -3, 8, -2, 7, -1];

        // Find the 1st smallest element.
        expect(findKthSmallestValueNaive1(values, 1)).toBe(-3);

        // Find the 2nd smallest element.
        expect(findKthSmallestValueNaive1(values, 2)).toBe(-2);

        // Find the 3rd smallest element.
        expect(findKthSmallestValueNaive1(values, 3)).toBe(-1);

        // Find the 4th smallest element.
        expect(findKthSmallestValueNaive1(values, 4)).toBe(5);

        // Find the 5th smallest element.
        expect(findKthSmallestValueNaive1(values, 5)).toBe(7);

        // Find the 6th smallest element (minimum in the original array).
        expect(findKthSmallestValueNaive1(values, 6)).toBe(null);
    });

    it('should return null for out-of-bounds K with negative numbers', () => {
        const values = [5, -3, 8, -2, 7, -1];

        // K is less than 1.
        expect(findKthSmallestValueNaive1(values, -1)).toBeNull();

        // K is greater than the array size.
        expect(findKthSmallestValueNaive1(values, 7)).toBeNull();
    });
});
