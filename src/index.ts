interface Triangle {
    sideA: number;
    sideB: number;
    sideC: number;
}
interface Equileteral extends Triangle {
    type: "equilateral";
}
interface Isosceles extends Triangle {
    type: "isosceles";
}
interface Scalene extends Triangle {
    type: "scalene";
}

type Triangles = Equileteral | Isosceles | Scalene;

function triangle(sides: Number): Equileteral
function triangle(sideA: Number, sideBC: Number): Isosceles
function triangle(sideA: Number, sideB: Number, sideC: Number): Scalene
function triangle(A: Number, B?: Number, C?: Number) {
    if (B && C) {
        return {
            type: "scalene",
            sideA: A, sideB: B, sideC: C
         }
    }
    if (B && !C) {
        return {
            type: "isosceles",
            sideA: A, sideB: B, sideC: B
         }
    }
    return {
        type: "equilateral",
        sideA: A, sideB: A, sideC: A
     }

}

triangle(1) // Equileteral
triangle(1, 2) // Isosceles
triangle(1, 2, 3) // Scalene
