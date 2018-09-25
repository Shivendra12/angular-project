import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { AboutComponent } from '../about/about.component';
import { MygaurdGuard } from '../mygaurd.guard';
import { GalleryComponent } from '../gallery/gallery.component';
import { ParentComponent } from '../parent/parent.component';
import { ChildComponent } from '../child/child.component';

const route:Routes=[
{path:'',component:MainComponent},

{path:'about',component:AboutComponent,
canActivate:[MygaurdGuard]},
{path:'gallery',component:GalleryComponent},
{path:'parent',component:ParentComponent},
{path:'child',component:ChildComponent}

]

@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(route)
  ],
  exports:[RouterModule],
  declarations: []
})
export class RoutingModule { }
