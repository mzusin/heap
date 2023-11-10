import { findKthLargestValue, findKthLargestValueNaive, findKthLargestValueNaive1 } from '../src/core/find-top-k-value';

describe('findKthLargestValue()', () => {
    it('findKthLargestValue([5, 3, 8, 2, 7], 3)', () => {
        expect(findKthLargestValue([5, 3, 8, 2, 7], 3)).toEqual(5);
    });

    it('findKthLargestValue([], 3)', () => {
        expect(findKthLargestValue([], 3)).toEqual(null);
    });

    it('findKthLargestValue([5, 3, 8, 2, 7], 1000)', () => {
        expect(findKthLargestValue([5, 3, 8, 2, 7], 1000)).toEqual(null);
    });

    it('findKthLargestValue([5, 3, 8, 2, 7], 1)', () => {
        expect(findKthLargestValue([5, 3, 8, 2, 7], 1)).toEqual(8);
    });

    it('should find the Kth largest element with negative numbers', () => {
        const values = [5, -3, 8, -2, 7, -1];

        // Find the 1st largest element.
        expect(findKthLargestValue(values, 1)).toBe(8);

        // Find the 2nd largest element.
        expect(findKthLargestValue(values, 2)).toBe(7);

        // Find the 3rd largest element.
        expect(findKthLargestValue(values, 3)).toBe(5);

        // Find the 4th largest element.
        expect(findKthLargestValue(values, 4)).toBe(-1);

        // Find the 5th largest element.
        expect(findKthLargestValue(values, 5)).toBe(-2);

        expect(findKthLargestValue(values, 6)).toBe(null);
    });

    it('should return null for out-of-bounds K with negative numbers', () => {
        const values = [5, -3, 8, -2, 7, -1];

        // K is less than 1.
        expect(findKthLargestValue(values, -1)).toBeNull();

        // K is greater than the array size.
        expect(findKthLargestValue(values, 7)).toBeNull();
    });
});

describe('findKthLargestValueNaiveNaive()', () => {
    it('findKthLargestValueNaive([5, 3, 8, 2, 7], 3)', () => {
        expect(findKthLargestValueNaive([5, 3, 8, 2, 7], 3)).toEqual(5);
    });

    it('findKthLargestValueNaive([], 3)', () => {
        expect(findKthLargestValueNaive([], 3)).toEqual(null);
    });

    it('findKthLargestValueNaive([5, 3, 8, 2, 7], 1000)', () => {
        expect(findKthLargestValueNaive([5, 3, 8, 2, 7], 1000)).toEqual(null);
    });

    it('findKthLargestValueNaive([5, 3, 8, 2, 7], 1)', () => {
        expect(findKthLargestValueNaive([5, 3, 8, 2, 7], 1)).toEqual(8);
    });

    it('should find the Kth largest element with negative numbers', () => {
        const values = [5, -3, 8, -2, 7, -1];

        // Find the 1st largest element.
        expect(findKthLargestValueNaive(values, 1)).toBe(8);

        // Find the 2nd largest element.
        expect(findKthLargestValueNaive(values, 2)).toBe(7);

        // Find the 3rd largest element.
        expect(findKthLargestValueNaive(values, 3)).toBe(5);

        // Find the 4th largest element.
        expect(findKthLargestValueNaive(values, 4)).toBe(-1);

        // Find the 5th largest element.
        expect(findKthLargestValueNaive(values, 5)).toBe(-2);

        // Find the 6th largest element (minimum in the original array).
        expect(findKthLargestValueNaive(values, 6)).toBe(-3);
    });

    it('should return null for out-of-bounds K with negative numbers', () => {
        const values = [5, -3, 8, -2, 7, -1];

        // K is less than 1.
        expect(findKthLargestValueNaive(values, -1)).toBeNull();

        // K is greater than the array size.
        expect(findKthLargestValueNaive(values, 7)).toBeNull();
    });
});

describe('findKthLargestValueNaive1()', () => {
    it('findKthLargestValueNaive1([5, 3, 8, 2, 7], 3)', () => {
        expect(findKthLargestValueNaive1([5, 3, 8, 2, 7], 3)).toEqual(5);
    });

    it('findKthLargestValueNaive1([], 3)', () => {
        expect(findKthLargestValueNaive1([], 3)).toEqual(null);
    });

    it('findKthLargestValueNaive1([5, 3, 8, 2, 7], 1000)', () => {
        expect(findKthLargestValueNaive1([5, 3, 8, 2, 7], 1000)).toEqual(null);
    });

    it('findKthLargestValueNaive1([5, 3, 8, 2, 7], 1)', () => {
        expect(findKthLargestValueNaive1([5, 3, 8, 2, 7], 1)).toEqual(8);
    });

    it('should find the Kth largest element with negative numbers', () => {
        const values = [5, -3, 8, -2, 7, -1];

        // Find the 1st largest element.
        expect(findKthLargestValueNaive1(values, 1)).toBe(8);

        // Find the 2nd largest element.
        expect(findKthLargestValueNaive1(values, 2)).toBe(7);

        // Find the 3rd largest element.
        expect(findKthLargestValueNaive1(values, 3)).toBe(5);

        // Find the 4th largest element.
        expect(findKthLargestValueNaive1(values, 4)).toBe(-1);

        // Find the 5th largest element.
        expect(findKthLargestValueNaive1(values, 5)).toBe(-2);

        // Find the 6th largest element (minimum in the original array).
        expect(findKthLargestValueNaive1(values, 6)).toBe(null);
    });

    it('should return null for out-of-bounds K with negative numbers', () => {
        const values = [5, -3, 8, -2, 7, -1];

        // K is less than 1.
        expect(findKthLargestValueNaive1(values, -1)).toBeNull();

        // K is greater than the array size.
        expect(findKthLargestValueNaive1(values, 7)).toBeNull();
    });
});