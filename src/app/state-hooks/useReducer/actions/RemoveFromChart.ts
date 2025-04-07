export class ActionRemoveFromChart{
    constructor(productId: number) {
        this.productId = productId;
    }
    productId: number
}
// eslint-disable-next-line import/no-anonymous-default-export
export default (productId: number) => new ActionRemoveFromChart(productId);