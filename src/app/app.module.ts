import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { MyserService } from './myser.service';
import { HttpClientModule } from '@angular/common/http';
import { LimitPipe } from './limit.pipe';
import { MygaurdGuard } from './mygaurd.guard';
import { AuthService } from './auth.service';
import { RoutingModule } from './routing/routing.module';
import { FormsModule} from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { PagesComponent } from './pages/pages.component';
import { WebiconsComponent } from './webicons/webicons.component';
import { ShortcodesComponent } from './shortcodes/shortcodes.component';

const routes:Routes=[
  {path:'',component:MainComponent},
  {path:'about',component:AboutComponent},
  {path:'services',component:ServicesComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'contact',component:ContactComponent},
  {path:'pages',component:ContactComponent},
  {path:'',redirectTo:'product',pathMatch:'full'},
  {path:'webicons',component:WebiconsComponent},
  {path:'shortcodes',component:ShortcodesComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AboutComponent,
    ServicesComponent,
    GalleryComponent,
    ContactComponent,
    LimitPipe,
    ChildComponent,
    ParentComponent,
    PagesComponent,
    WebiconsComponent,
    ShortcodesComponent,

  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),HttpClientModule,RoutingModule,FormsModule

  ],
  providers: [MyserService,MygaurdGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
