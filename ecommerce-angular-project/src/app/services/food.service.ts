import { Injectable } from '@angular/core';
import { Food } from '../shared/models/food';
import { sample_foods } from '../../data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  //right now, connected to dataset, will be connected to back
  getAll():Food[]{
    return sample_foods
  }
}
