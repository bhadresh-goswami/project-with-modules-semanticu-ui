import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//moving this module to lazy loading
//import { CollectionModule } from './collection/collection.module';
//import { ElementsModule } from './elements/elements.module';
//import { ModsModule } from './mods/mods.module';
//import { ViewsModule } from './views/views.module';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    //=>LazyLoading
    //ElementsModule,
    //CollectionModule,
    //ViewsModule,
    //ModsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
