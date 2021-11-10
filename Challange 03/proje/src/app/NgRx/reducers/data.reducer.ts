import { ADD_DEMO, AddDemo } from './../actions/data.actions';
import { DataModel } from '../../models/data.model';
import * as DemoActions from '../../NgRx/actions/data.actions';

const initialState: DataModel = {
    firstname: 'Harisudhan',
    lastname: 'Male'
}

export function reducer(state:any = [], action:any) {
    switch (action.type) {
        case DemoActions.ADD_DEMO:
            return [...state, action.payload];
        case DemoActions.REMOVE_DEMO:
            const a = [...state]
            a.splice(action.payload, 1);;
            return a;
        case DemoActions.CLEAR:
            return [];
        default:
            return state;
    }
}