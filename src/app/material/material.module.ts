import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatCardModule } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule
  ],
  exports: [
    MatCardModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
