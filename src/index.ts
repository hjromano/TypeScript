type Dictionary = Record<string, number | string | boolean>

const dict: Dictionary = {
    id: 10,
    name: 'John',
    isProgramer: true  
}

if(typeof dict.id === "string") {
    dict.id
}

dict.id