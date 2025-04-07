export type ActionType =
  'HandleQuantity' 
| 'LoadProducts'
| 'NextPage'
| 'PrevPage'
| 'RemoveFromChart'
| 'UnloadProducts';


export interface ActionDispatch<T extends ActionType[]> {
    type: T[number];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload?: any;
}