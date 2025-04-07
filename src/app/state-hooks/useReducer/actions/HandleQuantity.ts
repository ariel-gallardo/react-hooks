export class HandleQuantity {
    constructor(productId: number, quantity: number) {
        this.productId = productId
        this.quantity = quantity
    }
    productId: number
    quantity: number
}
// eslint-disable-next-line import/no-anonymous-default-export
export default (productId: number, quantity: number) => new HandleQuantity(productId, quantity);