import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularConnect';

constructor(private router:Router,private location: LocationStrategy){

  history.pushState(null, null, window.location.href);
  this.location.onPopState(() => {
    history.pushState(null, null, window.location.href);
  });
}

isHomeRoute(){
 return this.router.url==='/';
}

}
