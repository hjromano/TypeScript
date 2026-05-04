interface ApiResponse<T> {
    data: T;
    sucess: boolean;
    error?: string;
}

interface User {
    id: string;
    name: string;
    role: string;
}

function fetchUser(): ApiResponse<User> {
    return {
        sucess: true,
        data: {
            id: "123",
            name: "John Doe",
            role: "user"
        }
    }
}

interface Book {
    id: string;
    title: string;
}

function fetchBook(): ApiResponse<Book> {
    return {
        sucess: true,
        data: {
            id: "456",
            title: "TypeScript for Beginners"
        }
    }
}

const response = fetchBook();

response.data;