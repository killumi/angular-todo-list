import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var obs = Observable.create( observer => {
      setTimeout( () => {
        console.log('timeout');
        observer.next(100);
        observer.complete();
      }, 2000);
      
      console.log('start');
    });

    

    let subscr = obs.subscribe(
      data => console.log('DATA: ', data),
      error => console.log('Error: ', error),
      () => console.log('COMPLETED')
    )

  }

}
