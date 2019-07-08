import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem } from '@angular/cdk/drag-drop';
import * as models from '../../../models/inventoryModel'
import { InventoryService } from '../../../services/inventory.service';

@Component({
  selector: 'app-assetlist',
  templateUrl: './assetlist.component.html',
  styleUrls: ['./assetlist.component.css']
})
export class AssetlistComponent implements OnInit {

  entryCount: Number = 0;

  category1 : models.AssetChip[] = [];
  category2 : models.AssetChip[] = [];

  done : models.AssetChip[];
  origin : models.AssetChip[];
  
  doneOld : models.AssetChip[];
  originOld : models.AssetChip[];

  constructor(private inventoryService:InventoryService) {
    
  }

  ngOnInit() {
    this.done = this.inventoryService.getActivityThemes();
    this.origin = this.inventoryService.getOrigin();
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }   

    this.calculateEntryCount()
  }

  calculateEntryCount(): void {
    this.entryCount = this.category1.length + this.category2.length
  }


  removeCategory1(item: any): void {
    const index = this.category1.findIndex(v => v.name === item.name);
   
    if (index >= 0) {
      this.category1.splice(index, 1);
    }

    this.calculateEntryCount()
  }


  removeCategory2(item: any): void {
    const index = this.category2.findIndex(v => v.name === item.name);

    if (index >= 0) {
      this.category2.splice(index, 1);
    }

    this.calculateEntryCount()
  }

  selectChip(event):void { 
    event.selected = !event.selected
  }

  addChipsToCategory1(list):void { 
    if(list && list.length > 0 ) {
      list.map(item => {
        const index = this.category1.findIndex(v => v.name === item.name);
        if (index < 0) {
          this.category1.push(item);
        }        
      })
    }
  }

  removeChipsToCategory1(list):void { 
    if(list && list.length > 0 ) {
      list.map(item => {
        const index = this.category1.findIndex(v => v.name === item.name);
        if (index >= 0) {
          this.category1.splice(index, 1);
        }        
      })
    }
  }

  addChipsToCategory2(list):void { 
    if(list && list.length > 0 ) {
      list.map(item => {
        const index = this.category2.findIndex(v => v.name === item.name);
        if (index < 0) {
          this.category2.push(item);
        }        
      })
    }
  }

  removeChipsToCategory2(list):void { 
    if(list && list.length > 0 ) {
      list.map(item => {
        const index = this.category2.findIndex(v => v.name === item.name);
        if (index >= 0) {
          this.category2.splice(index, 1);
        }        
      })
    }
  }

  addToSelectedCategories():void {
    let selectedChips = this.done.filter(item => item.selected == true)
    this.addChipsToCategory1(selectedChips)

    selectedChips = this.origin.filter(item => item.selected == true)
    this.addChipsToCategory2(selectedChips)
  }

  addToAllCategories():void {
    this.addChipsToCategory1(this.done)
    this.addChipsToCategory2(this.origin)
  }

  removeFromSelectedCategories():void {
    let selectedChips1 = this.done.filter(item => item.selected == true)
    this.removeChipsToCategory1(selectedChips1)

    let selectedChips2 = this.origin.filter(item => item.selected == true)
    this.removeChipsToCategory2(selectedChips2)
  }

  removeFromAllCategories():void {
    this.category1 = [];
    this.category2 = []
  }

}
