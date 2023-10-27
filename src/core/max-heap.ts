/**
 * Max heap as array implementation.
 */
export const maxHeap = () => {
    const data: number[] = [];

    const size = () : number => {
        return data.length;
    };

    const bottomUp = (index: number) => {

        if(size() <= 1) return;

        const parenti = Math.floor((index - 1) / 2);
        if(data[parenti] < data[index]){
            [data[parenti], data[index]] = [data[index], data[parenti]];
            bottomUp(parenti);
        }
    };

    const topDown = (index: number) => {

        const n = size();

        let largest = index;
        const lefti = 2*index + 1;
        const righti = lefti + 1;

        if(lefti < n && data[lefti] > data[largest]){
            largest = lefti;
        }

        if(righti < n && data[righti] > data[largest]){
            largest = righti;
        }

        if(index !== largest){
            [data[index], data[largest]] = [data[largest], data[index]];
            topDown(largest);
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