/*export class KthLargest {

    data: [];
    max: number;

    // Space complexity: O(K)
    // Time complexity: O(N log K)

    constructor(k, nums){
        this.data = [];
        this.max = k;

        for(let i=0; i<nums.length; i++){
            this.add(nums[i]);
        }
    }

    swap(index1, index2) {
        const temp = this.data[index1];
        this.data[index1] = this.data[index2];
        this.data[index2] = temp;
    }

    bottomUp(index){
        if(index === 0) return;
        const data = this.data;

        const parentIndex = Math.floor((index - 1) / 2);

        if(data[parentIndex] > data[index]){
            this.swap(parentIndex, index);
            this.bottomUp(parentIndex);
        }
    }

    topBottom(index){
        const n = this.data.length;
        const data = this.data;

        let smallest = index;
        const lefti = index * 2 + 1;
        const righti = lefti + 1;

        if(lefti < n && data[lefti] < data[smallest]){
            smallest = lefti;
        }

        if(righti < n && data[righti] < data[smallest]){
            smallest = righti;
        }

        if(smallest !== index){
            this.swap(index, smallest);
            this.topBottom(smallest);
        }
    }

    size() {
        return this.data.length;
    }

    peek(){
        if(this.size() <= 0) return null;
        return this.data[0];
    }

    add(val) {
        this.data.push(val);
        this.bottomUp(this.data.length - 1);

        if(this.size() > this.max){
            this.poll();
        }

        return this.peek();
    }

    poll(){
        if(this.size() <= 0) return;

        if(this.size() === 1){
            this.data.pop();
            return;
        }

        const data = this.data;

        data[0] = data[data.length - 1];
        data.pop();

        this.topBottom(0);
    }
}*/

