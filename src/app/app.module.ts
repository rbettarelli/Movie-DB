import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';

import { SmallCardComponent } from './components/small-card/small-card.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { CastComponent } from './components/cast/cast.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,

    SmallCardComponent,
    MenuTitleComponent,
    HomeComponent,
    ContentComponent,
    CastComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
