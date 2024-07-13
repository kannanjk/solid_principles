export class Products {
    id: String;
    name: String;
    price: number;
    constructor(id: string, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

export class Order {
    products: Products[] = []
    addProduct(product: Products) {
        this.products.push(product)
    }
    getProducts() {
        return this.products;
    }
    removProducts(proId: string) {
        this.products = this.products.filter((product) => {
            product.id !== proId
        })
    }
}

module.exports = { Products, Order }