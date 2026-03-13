interface myFetchOptions {
    printInput?: boolean;
    printTime?: boolean;
}
type RequestOptions = myFetchOptions & RequestInit;
export function myFetch(input: string, options?: RequestOptions) {
    if (options?.printInput) {
        console.log("Input:", input);
    }
    if (options?.printTime) {
        console.log("Time:", new Date().toDateString())
    }
    return fetch(input, options);
}

myFetch("http://loclalhost:3000/api/data", {
    method: "GET",
})