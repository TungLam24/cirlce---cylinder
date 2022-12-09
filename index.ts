class Circle {
    radius: number
    color: string
    constructor(radius: number, color: string) {
        this.radius = radius
        this.color = color
    }
    getradius(): number {
        return this.radius
    }
    setradius(radius: number) {
        this.radius = radius
    }
    getcolor(): string {
        return this.color
    }
    setcolor(color: string) {
        this.color = color
    }
    area(): number {
        return (Math.PI * (this.radius ** 2))
    }
}
class Cylinder extends Circle {
    height: number
    constructor(radius: number, height: number, color: string) {
        super(radius, color)
        this.height = height
    }
    volume(): number {
        return(super.area() * this.height)
    }
}