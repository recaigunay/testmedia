import { Injectable } from '@angular/core';
import * as models from '../models/inventoryModel'

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  activityThemes:models.AssetChip[]
  origin:models.AssetChip[]

  constructor() {

    this.activityThemes = [
      {
        name:"Helicopter",
        color:"",
        selected:false
      },
      {
        name:"Nightlife",
        color:"",
        selected:false
      },
      {
        name:"Empire State Building",
        color:"",
        selected:false
      },
      {
        name:"Science Museum",
        color:"",
        selected:false
      },
      {
        name:"York Castle",
        color:"",
        selected:false
      }
    ]

    this.origin = [
      {
        name:"Lodon",
        color:"accent",
        selected:false
      },
      {
        name:"Paris",
        color:"accent",
        selected:false
      },
      {
        name:"Berlin",
        color:"accent",
        selected:false
      },
      {
        name:"Copenhagen",
        color:"accent",
        selected:false
      },
      {
        name:"Zurich",
        color:"accent",
        selected:false
      },
    ]
    

   }

   getActivityThemes():models.AssetChip[] {
    return this.activityThemes;
   }

   getOrigin():models.AssetChip[] {
    return this.origin;
   }


}
