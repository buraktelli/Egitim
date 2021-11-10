import { Action } from '@ngrx/store';
import { DataModel } from '../../models/data.model';

export const ADD_DEMO = 'Add Demo';
export const REMOVE_DEMO = 'Remove Demo';
export const CLEAR = 'Clear Demo';

export class AddDemo implements Action {
    readonly type = ADD_DEMO;

    constructor(public payload: DataModel) {}
}

export class RemoveDemo implements Action {
    readonly type = REMOVE_DEMO;

    constructor(public payload: number) {}
}

export class Clear implements Action {
    readonly type = CLEAR;

    constructor() {}
}

export type Actions = AddDemo | RemoveDemo | Clear;