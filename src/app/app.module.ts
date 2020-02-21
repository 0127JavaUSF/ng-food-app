import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { BabyPipe } from './pipes/baby.pipe';
import { FormsModule } from '@angular/forms';
import { FoodService } from 'src/app/services/food.service';
import { OrderComponent } from './components/order/order.component';
import { OrderItemsComponent } from './components/order-items/order-items.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    OrderComponent,
    OrderItemsComponent,

    BabyPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],

  // providers can be used to register services
  providers: [ FoodService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
