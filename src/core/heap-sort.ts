/**
 * In a binary heap, the leaves are at indices greater than or equal to N / 2.
 * https://stackoverflow.com/questions/9755721/how-can-building-a-heap-be-on-time-complexity
 */

/**
 * heapify = topDown
 * Ensure that the subtree rooted at index 'nodeIndex' satisfies the min/max heap property.
 */
const topDown = (values: number[], sizeOfHeap: number, nodeIndex: number, isAsc: boolean) => {

    // Left child index: 2 * index + 1
    // Right child index: 2 * index + 2
    let smallerOrLargest = nodeIndex; // largest for max heap, smaller for min heap
    const leftChildIndex = 2 * nodeIndex + 1;
    const rightChildIndex = leftChildIndex + 1;

    if(isAsc) {
        // largest --------------
        if(leftChildIndex < sizeOfHeap && values[leftChildIndex] > values[smallerOrLargest]){
            smallerOrLargest = leftChildIndex;
        }

        if(rightChildIndex < sizeOfHeap && values[rightChildIndex] > values[smallerOrLargest]){
            smallerOrLargest = rightChildIndex;
        }
    }
    else{
        // smaller -----------------
        if(leftChildIndex < sizeOfHeap && values[leftChildIndex] < values[smallerOrLargest]){
            smallerOrLargest = leftChildIndex;
        }

        if(rightChildIndex < sizeOfHeap && values[rightChildIndex] < values[smallerOrLargest]){
            smallerOrLargest = rightChildIndex;
        }
    }

    if(nodeIndex !== smallerOrLargest){
        [values[nodeIndex], values[smallerOrLargest]] = [values[smallerOrLargest], values[nodeIndex]];
        topDown(values, sizeOfHeap, smallerOrLargest, isAsc);
    }
};

/**
 * Time complexity: O(N log N)
 * Space complexity: O(N)
 */
export const heapsort = (values: number[], isAsc = true) => {
    const sizeOfHeap = values.length;

    // Build heap (rearrange array).
    // Start from the last non-leaf node in the binary heap = Math.floor(N / 2).
    // Move towards the root.
    // Reason:
    // -------
    // Only one node is at the top whereas half the nodes lie in the bottom layer.
    // So it shouldn't be too surprising that if we have to apply an operation to every node,
    // we would prefer topDown over bottomUp.
    for (let i = Math.floor(sizeOfHeap / 2) - 1; i >= 0; i--) {
        topDown(values, sizeOfHeap, i, isAsc); // heapify = topDown
    }

    // Extracting elements from the heap
    // and place them at the end of the array in a sorted order.
    // Start from the last index of the heap: (sizeOfHeap - 1)
    for (let i = sizeOfHeap - 1; i > 0; i--) {

        // Swap Root with Last Element:
        // In each iteration, the code swaps the value at the root of the heap (index 0)
        // with the value at the current index i.
        // This effectively moves the current root (which is the maximum element in the heap)
        // to the end of the array.
        // So after each iteration of the loop, the largest element is placed at the end of the array.
        [values[0], values[i]] = [values[i], values[0]];

        // Heapify the Reduced Heap:
        // After swapping, the topDown function is called to maintain the max heap property on the reduced heap.
        // The parameters passed to topDown are the array values,
        // the size of the reduced heap i,
        // the index of the root of the reduced heap (which is 0 since the root was moved to the end),
        // and a boolean flag isAsc indicating whether the sorting is in ascending order.
        topDown(values, i, 0, isAsc);
    }
};