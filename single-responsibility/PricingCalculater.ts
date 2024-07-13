import { Products } from './Orders'

export class PricingCalculater {
    calculatetingPric(products: Products[]) {
        return products.reduce((total, pro) => total + pro.price, 0)
    }
}