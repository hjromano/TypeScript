class MyCustomArray<T> {
    private items: T[] = [];

    public add(item: T){
        this.items.unshift(item);
    }
    public remove(){
        return this.items.shift()
    }
    public isEmpty(): boolean {
        return this.items.length === 0;
    }
}

const myCustomStringArr = new MyCustomArray<string>();
myCustomStringArr.add("Hello");
const removed = myCustomStringArr.remove();

const myCustomNumberArr = new MyCustomArray<number>();
myCustomNumberArr.add(42);
