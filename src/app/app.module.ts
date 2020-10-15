import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MasonryListModule } from './masonry-list/masonry-list.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ExampleTemplateComponent } from './example-template/example-template.component';

@NgModule({
  imports: [ BrowserModule, FormsModule, MasonryListModule, MatCardModule, MatButtonModule  ],
  declarations: [ AppComponent, HelloComponent, ExampleTemplateComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
