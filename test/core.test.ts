import {
    fibonacciNumberIterative,
    fibonacciNumberRecursive,
    tribonacciIterative,
    countBits,
    minCostClimbingStairsRecursive,
    minCostClimbingStairsIterative,
    getRowRecursive,
    getRowIterative,
    maxProfit,
    isSubsequence,
} from '../src/core';

describe('Core', () => {

    describe('fibonacciNumberIterative()', () => {
        it('should return 0 for n = 0', () => {
            expect(fibonacciNumberIterative(0)).toBe(0);
        });

        it('should return 1 for n = 1', () => {
            expect(fibonacciNumberIterative(1)).toBe(1);
        });

        it('should return the correct Fibonacci number for n = 2', () => {
            expect(fibonacciNumberIterative(2)).toBe(1);
        });

        it('should return the correct Fibonacci number for n = 5', () => {
            expect(fibonacciNumberIterative(5)).toBe(5);
        });

        it('should return the correct Fibonacci number for n = 10', () => {
            expect(fibonacciNumberIterative(10)).toBe(55);
        });

        it('should return the correct Fibonacci number for n = 15', () => {
            expect(fibonacciNumberIterative(15)).toBe(610);
        });
    });

    describe('fibonacciNumberRecursive()', () => {
        it('should return 0 for n = 0', () => {
            expect(fibonacciNumberRecursive(0)).toBe(0);
        });

        it('should return 1 for n = 1', () => {
            expect(fibonacciNumberRecursive(1)).toBe(1);
        });

        it('should return the correct Fibonacci number for n = 2', () => {
            expect(fibonacciNumberRecursive(2)).toBe(1);
        });

        it('should return the correct Fibonacci number for n = 5', () => {
            expect(fibonacciNumberRecursive(5)).toBe(5);
        });

        it('should return the correct Fibonacci number for n = 10', () => {
            expect(fibonacciNumberRecursive(10)).toBe(55);
        });

        it('should return the correct Fibonacci number for n = 15', () => {
            expect(fibonacciNumberRecursive(15)).toBe(610);
        });
    });

    describe('tribonacciIterative()', () => {
        it('should return 0 for n = 0', () => {
            expect(tribonacciIterative(0)).toBe(0);
        });

        it('should return 1 for n = 1', () => {
            expect(tribonacciIterative(1)).toBe(1);
        });

        it('should return 1 for n = 2', () => {
            expect(tribonacciIterative(2)).toBe(1);
        });

        it('should return 2 for n = 3', () => {
            expect(tribonacciIterative(3)).toBe(2);
        });

        it('should return 4 for n = 4', () => {
            expect(tribonacciIterative(4)).toBe(4);
        });

        it('should return 7 for n = 5', () => {
            expect(tribonacciIterative(5)).toBe(7);
        });
    });

    describe('countBits()', () => {
        it('should return [0] for n = 0', () => {
            expect(countBits(0)).toEqual([0]);
        });

        it('should return [0, 1] for n = 1', () => {
            expect(countBits(1)).toEqual([0, 1]);
        });

        it('should return [0, 1, 1] for n = 2', () => {
            expect(countBits(2)).toEqual([0, 1, 1]);
        });

        it('should return [0, 1, 1, 2, 1, 2] for n = 5', () => {
            expect(countBits(5)).toEqual([0, 1, 1, 2, 1, 2]);
        });

        it('should return [0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2] for n = 10', () => {
            expect(countBits(10)).toEqual([0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2]);
        });
    });

    describe('minCostClimbingStairsRecursive()' ,() => {

        it('should return the correct minimum cost for a cost array of length 2', () => {
            expect(minCostClimbingStairsRecursive([10, 15])).toBe(10);
        });

        it('should return the correct minimum cost for a cost array of length 3', () => {
            expect(minCostClimbingStairsRecursive([10, 15, 20])).toBe(15);
        });

        it('should return the correct minimum cost for a larger cost array', () => {
            expect(minCostClimbingStairsRecursive([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toBe(6);
        });
    });

    describe('minCostClimbingStairsIterative()' ,() => {

        it('should return the correct minimum cost for a cost array of length 2', () => {
            expect(minCostClimbingStairsIterative([10, 15])).toBe(10);
        });

        it('should return the correct minimum cost for a cost array of length 3', () => {
            expect(minCostClimbingStairsIterative([10, 15, 20])).toBe(15);
        });

        it('should return the correct minimum cost for a larger cost array', () => {
            expect(minCostClimbingStairsIterative([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toBe(6);
        });
    });

    describe('getRowRecursive()' ,() => {

        it('should return [1] for rowIndex = 0', () => {
            expect(getRowRecursive(0)).toEqual([1]);
        });

        it('should return [1, 1] for rowIndex = 1', () => {
            expect(getRowRecursive(1)).toEqual([1, 1]);
        });

        it('should return the correct row for rowIndex = 2', () => {
            expect(getRowRecursive(2)).toEqual([1, 2, 1]);
        });

        it('should return the correct row for rowIndex = 3', () => {
            expect(getRowRecursive(3)).toEqual([1, 3, 3, 1]);
        });

        it('should return the correct row for rowIndex = 4', () => {
            expect(getRowRecursive(4)).toEqual([1, 4, 6, 4, 1]);
        });

        it('should return the correct row for rowIndex = 5', () => {
            expect(getRowRecursive(5)).toEqual([1, 5, 10, 10, 5, 1]);
        });
    });

    describe('getRowIterative()' ,() => {
        it('should return [1] for rowIndex = 0', () => {
            expect(getRowIterative(0)).toEqual([1]);
        });

        it('should return [1, 1] for rowIndex = 1', () => {
            expect(getRowIterative(1)).toEqual([1, 1]);
        });

        it('should return the correct row for rowIndex = 2', () => {
            expect(getRowIterative(2)).toEqual([1, 2, 1]);
        });

        it('should return the correct row for rowIndex = 3', () => {
            expect(getRowIterative(3)).toEqual([1, 3, 3, 1]);
        });

        it('should return the correct row for rowIndex = 4', () => {
            expect(getRowIterative(4)).toEqual([1, 4, 6, 4, 1]);
        });

        it('should return the correct row for rowIndex = 5', () => {
            expect(getRowIterative(5)).toEqual([1, 5, 10, 10, 5, 1]);
        });

    });

    describe('maxProfit()' ,() => {
        it('should return 0 for an empty array', () => {
            const prices: number[] = [];
            const result = maxProfit(prices);
            expect(result).toBe(0);
        });

        it('should return 0 if there is no profit to be made', () => {
            const prices = [7, 6, 4, 3, 1];
            const result = maxProfit(prices);
            expect(result).toBe(0);
        });

        it('should return the correct profit for a simple case', () => {
            const prices = [7, 1, 5, 3, 6, 4];
            const result = maxProfit(prices);
            expect(result).toBe(5);
        });

        it('should return the correct profit for a more complex case', () => {
            const prices = [3, 2, 6, 5, 0, 3];
            const result = maxProfit(prices);
            expect(result).toBe(4);
        });

        it('should return the correct profit for a case with multiple peaks', () => {
            const prices = [1, 2, 4, 2, 5, 7, 2, 4, 9, 0];
            const result = maxProfit(prices);
            expect(result).toBe(8);
        });

    });

    describe('isSubsequence()' ,() => {
        // Test case 1: s is a subsequence of t
        it('should return true when s is a subsequence of t', () => {
            const s = 'abc';
            const t = 'ahbgdc';
            const result = isSubsequence(s, t);
            expect(result).toBe(true); // 'abc' is a subsequence of 'ahbgdc'
        });

        // Test case 2: s is not a subsequence of t
        it('should return false when s is not a subsequence of t', () => {
            const s = 'axc';
            const t = 'ahbgdc';
            const result = isSubsequence(s, t);
            expect(result).toBe(false); // 'axc' is not a subsequence of 'ahbgdc'
        });

        // Test case 3: s is an empty string
        it('should return true when s is an empty string (empty string is a subsequence of any string)', () => {
            const s = '';
            const t = 'ahbgdc';
            const result = isSubsequence(s, t);
            expect(result).toBe(true); // Empty string is a subsequence of any string
        });

        // Test case 4: t is an empty string, s is not
        it('should return false when t is an empty string and s is not', () => {
            const s = 'abc';
            const t = '';
            const result = isSubsequence(s, t);
            expect(result).toBe(false); // Empty string cannot be a subsequence of any non-empty string
        });

        // Test case 5: Both s and t are empty strings
        it('should return true when both s and t are empty strings', () => {
            const s = '';
            const t = '';
            const result = isSubsequence(s, t);
            expect(result).toBe(true); // Both strings are empty, so s is a subsequence of t
        });
    });

});