/**
 * Min heap as array implementation.
 */
export const minHeap = () => {
    const data: number[] = [];

    /**
     * Return the number of heap items.
     */
    const size = () : number => {
        return data.length;
    };

    const bottomUp = (index: number) => {

        if(size() <= 1) return;

        const parenti = Math.floor((index - 1) / 2);
        if(data[parenti] > data[index]){
            [data[parenti], data[index]] = [data[index], data[parenti]];
            bottomUp(parenti);
        }
    };

    const topDown = (index: number) => {

        const n = size();

        let smaller = index;
        const lefti = 2*index + 1;
        const righti = lefti + 1;

        if(lefti < n && data[lefti] < data[smaller]){
            smaller = lefti;
        }

        if(righti < n && data[righti] < data[smaller]){
            smaller = righti;
        }

        if(index !== smaller){
            [data[index], data[smaller]] = [data[smaller], data[index]];
            topDown(smaller);
        }
    };

    const add = (val: number) => {
        data.push(val);
        bottomUp(data.length - 1);
    };

    const poll = () : number|null => {
        if(size() <= 0) return null;

        const min = data[0];

        data[0] = data[size() - 1];
        data.pop();
        topDown(0);

        return min;
    };

    const peek = () : number|null => {
        return size() > 0 ? data[0] : null;
    };

    return {
        add,
        poll,
        peek,
        size,
    }
};
