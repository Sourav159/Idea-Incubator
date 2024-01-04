import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-coepriortization',
  templateUrl: './coepriortization.component.html',
  styleUrls: ['./coepriortization.component.css']
})
export class COEPriortizationComponent implements OnInit {

  //Variables to store the data
  data: any;
  currentData : any;
  currentIndex = -1;
  temp: any;

  constructor(private dataService: DataService) { }

  ngOnInit() 
  {
    this.readData();
  }

  //Method to read the data from the main json server
  readData(): void 
  {
    this.dataService.readSort().subscribe
    (
        (data : any[]) => 
        {
          this.data = data;
          console.log(data);
        },
        error => 
        {
          console.log(error);
        }
    );
  }

  //Method to refresh the page and display the data
  refresh(): void 
  {
    this.readData();
    this.currentData = null;
    this.currentIndex = -1;
  }
 
  //Method to hold the data in the defer server
  holdData(id: number): void 
  {
    this.dataService.read(id).subscribe
    ( data => 
      { 
        this.currentData = data
        console.log(this.currentData);
        this.createHoldData(this.currentData);
      },
      error => 
      {
        console.log(error);
      }
    );

  }
  
  //Method to add the hold data in the defer server and delete the data from main server
  createHoldData(value: any): void
  {
    this.dataService.createHold(value).subscribe
    ( response => 
      {
        console.log(response);
      },
      error => 
      {
        console.log(error);
      }
    );

   this.dataService.delete(this.currentData.id).subscribe
    (
        response => {
          console.log(response);
          window.alert('Data has been defered!');
          this.refresh();
        },
        error => {
          console.log(error);
        });

  }

  //Method to swap the data 
  move(origin, destination): void
  {
    this.temp = this.data[destination];
    this.data[destination] = this.data[origin];
    this.data[origin] = this.temp;
  };

  //Method to move up the data in table
  moveUp(index): void
  {
    this.move(index, index - 1);
  }

  //Method to move down the data in table
  moveDown(index): void
  {
    this.move(index, index + 1);
  }



}
