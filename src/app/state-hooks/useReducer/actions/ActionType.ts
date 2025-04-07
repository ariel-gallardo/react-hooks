export type ActionType =
  'HandleQuantity' 
| 'LoadProducts'
| 'NextPage'
| 'PrevPage'
| 'RemoveFromChart'
| 'UnloadProducts';


export interface ActionDispatch<T extends ActionType[]> {
    type: T[number];
    payload?: any;
}