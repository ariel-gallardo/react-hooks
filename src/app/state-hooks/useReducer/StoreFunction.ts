import Store from "@models/Store";
import { ActionDispatch, ActionType } from "./actions/ActionType";
import { LoadProducts } from "./actions/LoadProducts";
import ChartDetail from "@models/ChartDetail";
import Chart from "@models/Chart";
import { HandleQuantity } from "@actionReducer/HandleQuantity";

function StoreFunction(prevState: Store, action: ActionDispatch<[ActionType]>): Store{
    let payload: LoadProducts | HandleQuantity;
    switch(action.type){
        case 'LoadProducts':
            payload = action.payload as LoadProducts;
            if(payload.data){
                prevState = {
                    products: payload.data,
                    page: payload.data.length > 0 ? 1 : null,
                    nextPage: payload.data.length > 10 ? 1 : null,
                    prevPage: null,
                    currentProducts: payload.data.slice(0, 10),
                    chart: null
                };
            }
            break;
        case 'UnloadProducts':
            prevState = {
                page: null,
                nextPage: null,
                prevPage: null,
                currentProducts: null,
                products: null,
                chart: null
            };
            break;
        case 'NextPage':
            console.log(action.payload)
            break;
        case 'PrevPage':
            console.log(action.payload)
            break;
        case 'RemoveFromChart':
            console.log(action.payload)
            break;
        case 'HandleQuantity':
            payload = action.payload as HandleQuantity;
            let cItems = prevState?.chart?.items ? prevState.chart.items : [] as ChartDetail[];
            const cState = prevState?.chart?.status ?? 'Searching';
            const cProduct = prevState.products?.find(x => x.id == (payload as HandleQuantity).productId);
            const cIndex = cItems.findIndex(x => x.id == (payload as HandleQuantity).productId);
            if (cIndex > -1){
                cItems[cIndex].quantity = (payload as HandleQuantity).quantity;
                if (cItems[cIndex].quantity == 0) cItems = cItems.filter(x => x.id != cItems[cIndex].id);
                else cItems[cIndex].subTotal = cItems[cIndex].quantity * (cProduct?.price ?? 0);
            }
            else{
                const nItem = {
                    id: (payload as HandleQuantity).productId,
                    quantity: (payload as HandleQuantity).quantity,
                    imageUrl: cProduct?.imgUrl,
                    name: cProduct?.name,
                    subTotal: 0
                } as ChartDetail;
                nItem.subTotal = nItem.quantity * (cProduct?.price ?? 0);
                cItems = [...cItems, nItem];
            } 
            prevState = {
                ...prevState,
                chart: {
                    items: cItems,
                    status: cState
                } as Chart
            }
            break;
    }
    return prevState;
}

export default StoreFunction;