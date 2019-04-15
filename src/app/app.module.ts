import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRouting } from './app.routing';
import { PageHomeComponent } from './static-pages/page-home/page-home.component';
import { MatButtonModule } from '@angular/material';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './redux/todo.reducer';

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRouting,
    MatButtonModule,
    ReactiveFormsModule,
    CoreModule,
    StoreModule.forRoot({todoPage: todoReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
