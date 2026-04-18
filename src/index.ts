function main(value: string[] | Date){
    if("push" in value){
        value.push("Hello");
    } else {
        console.log(value.getDate());
    }
}