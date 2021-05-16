import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbButtonModule, NbIconModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { NavrailComponent } from './components/desktop/navrail/navrail.component';
import { NavrailButtonComponent } from './components/desktop/navrail-button/navrail-button.component';
import { HomeComponent } from './components/desktop/home/home.component';
import { TrendingComponent } from './components/desktop/trending/trending.component';

@NgModule({
  declarations: [
    AppComponent,
    NavrailComponent,
    NavrailButtonComponent,
    HomeComponent,
    TrendingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    NbIconModule,
    NbEvaIconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
