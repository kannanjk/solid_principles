// Single responsibility principles
import { Invoice } from "./invoice"
import { PaymentProccess } from "./PaymentProccesing"
import { PricingCalculater } from "./PricingCalculater"
const { Products, Order, getProducts } = require('./Orders.ts')

const product1 = new Products('1', 'laptop', 300)
const product2 = new Products('2', 'book', 100)

const order = new Order()
const pricing = new PricingCalculater()
const paymentProcces = new PaymentProccess()
const invoice = new Invoice()


order.addProduct(product1)
order.addProduct(product2)
const total = pricing.calculatetingPric(order.getProducts())

console.log(invoice.generateInvoice(order.getProducts(),total));
console.log(paymentProcces.proccessPayment(order.getProducts(),total));

