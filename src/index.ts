interface Triangle {
    sideA: number;
    sideB: number;
    sideC: number;
}
interface Equilateral extends Triangle {
    type: "equilateral";
}
interface Isosceles extends Triangle {
    type: "isosceles";
}
interface Scalene extends Triangle {
    type: "scalene";
}
type Triangles = Equilateral | Isosceles | Scalene

class TriangleBuilder {
    static build(sides: number): Equilateral;
    static build(sideA: number, sideBC: number): Isosceles;
    static build(sideA: number, sideB: number, sideC: number): Scalene;
    static build(A: number, B?: number, C?: number){
        if(B && C){
            return {
                type: "scalene",
                sideA: A, sideB: B, sideC: C
            }
        }
        return {
            sideA: A, sideB: A, sideC: A,
            type: "equilateral"
        }
     
    }
}

TriangleBuilder.build()