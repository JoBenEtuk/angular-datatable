import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TableService } from './services/table.service';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxLoadingModule } from 'ngx-loading';
import { DatatableComponent } from './components/datatable/datatable.component';

@NgModule({
  declarations: [AppComponent, DatatableComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule,
    NgxLoadingModule.forRoot({}),
  ],
  providers: [TableService],
  bootstrap: [AppComponent],
})
export class AppModule {}
