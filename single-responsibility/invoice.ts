import { Products } from "./Orders";

export class Invoice {
    generateInvoice(product: Products[], amount: Number) {
        console.log(`Invoice Date : ${new Date().toISOString()}......`);
        console.log("Product Name\tPrice");
        
        product.forEach((product) => {
            console.log(`${product.name}\t\t${product.price}`);
        })
        console.log('......');
        console.log(`total :${amount}`);
    }
}