import { CoffeesFetchAPISuccess } from './../../../../koffee-board/src/app/store/coffees.action';
import { Coffee } from './coffee';
import { createReducer, on } from "@ngrx/store";

export const initialState: ReadonlyArray<Coffee> = [];

export const coffeeReducer = createReducer(
    initialState,
    on(CoffeesFetchAPISuccess, (state, { allCoffees }) => {
        return allCoffees;
    })

);