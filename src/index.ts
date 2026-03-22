type FindItemPredicate = (number) | ( (value: string, index: number) => boolean );
function findItem(array: string[], predicated: FindItemPredicate){
    if (typeof predicated === 'number') {
        return array[predicated];
    }
    return array.find(predicated)
}

findItem(['a', 'b', 'c'], 1);
findItem(['a', 'b', 'c'], (value, index) => value === 'b');