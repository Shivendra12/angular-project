import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import  {Router } from '@angular/router';

@Injectable()
export class MygaurdGuard implements CanActivate {
  constructor(private au:AuthService,private router:Router){}
  canActivate(){
    if(this.au.aLogin())
    {
    return true;
    }
    else
    {
      alert("You are not authorize to view this page");
      this.router.navigateByUrl('/gallery');
    }
  }
}
