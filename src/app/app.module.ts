import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { IndexComponent } from './pages/index/index.component';
import { DownloadBtnComponent } from './component/download-btn/download-btn.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {path: '',component:IndexComponent},
  {path: 'portfolio',component:PortfolioComponent},
  {path: 'contact',component:ContactComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DownloadBtnComponent,
    PortfolioComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
