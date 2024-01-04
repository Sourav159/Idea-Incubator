import { Component, OnInit } from '@angular/core'; //DN



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { //DN
  title = 'demoFord';
  status = "DOWN";

  constructor(){ }

  ngOnInit() {
    
  }
}


