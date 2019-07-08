import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { DynamiccreativeformComponent } from './components/dynamiccreativeform/dynamiccreativeform.component';
import { DynamiccreativelistComponent } from './components/dynamiccreativelist/dynamiccreativelist.component';
import { MasterdataComponent } from './components/masterdata/masterdata.component';
import { InventoryComponent } from './components/inventory/inventory.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { CdkTableModule } from '@angular/cdk/table';
import { ResizableModule } from 'angular-resizable-element'
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgxEchartsModule } from 'ngx-echarts';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

import {
  MatMenuModule,
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatOptionModule,
  MatSelectModule,
  MatDialogModule,
  MatIconModule,
  MatToolbarModule,
  MatDividerModule,
  MatRadioModule,
  MatExpansionModule,
  MatCardModule,
  MatSidenavModule, 
  MatListModule,
  MatBottomSheetModule,
  MatDatepickerModule,
  MatSliderModule,
  MatTreeModule,  
  MatAutocompleteModule,
  MatSlideToggleModule,
  MatStepperModule,
  MatChipsModule,
  MAT_DATE_LOCALE
  
   } from "@angular/material";
import { MasterdatastepperComponent } from './components/masterdata/masterdatastepper/masterdatastepper.component';
import { InventorystepperComponent } from './components/inventory/inventorystepper/inventorystepper.component';
import { AssetlistComponent } from './components/inventory/assetlist/assetlist.component';
import { ChartComponent } from './components/chart/chart.component';
import { Chart1Component } from './components/chart/chart1/chart1.component';
import { Chart2Component } from './components/chart/chart2/chart2.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    TabsComponent,
    DynamiccreativeformComponent,
    DynamiccreativelistComponent,
    MasterdataComponent,
    InventoryComponent,
    MasterdatastepperComponent,
    InventorystepperComponent,
    AssetlistComponent,
    ChartComponent,
    Chart1Component,
    Chart2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule,
    MatOptionModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    FlexLayoutModule,
    CdkTableModule,    
    MatDatepickerModule,
    MatSliderModule,
    MatTreeModule,
    ResizableModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
    MatBottomSheetModule,
    MatMenuModule,
    MatStepperModule,
    DragDropModule,
    MatChipsModule,
    NgxEchartsModule,
    MatMomentDateModule
  ],
  providers: [  {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
