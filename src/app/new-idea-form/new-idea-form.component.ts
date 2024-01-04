import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-new-idea-form',
  templateUrl: './new-idea-form.component.html',
  styleUrls: ['./new-idea-form.component.css']
})  
export class NewIdeaFormComponent{

  data = {
    id: '',
    name: '',
    idea: '',
    description: '',
    coe: '',
    value: '',
  };
  formdata: any = [];

  form = new FormGroup({
    ideaTitle: new FormControl(),
    ideaDescription: new FormControl(),
    allideas: new FormArray([])
  });

  constructor(private dataService: DataService) 
  {
    this.readData();
  };

  //Method to read the data from the main json server
  readData(): void 
  {
    this.dataService.readSort().subscribe
    (
        data => 
        {
          data = this.data;
          console.log(this.data);
        },
        error => 
        {
          console.log(error);
        }
    );
  }

  //Method to add the idea data into the json server
  addData(ideatitle: HTMLInputElement, ideadescription: HTMLInputElement)
  {
    const inputobject = { 
                        id: this.data.id + 1,
                        name: this.data.name,
                        idea: ideatitle.value,
                        description: ideadescription.value,
                        coe: this.data.coe,
                        value: this.data.value + 1
                       };

    //this.dataService.create(inputobject).subscribe
    ((response: Object) => 
      {
      console.log(response);
      window.alert('Idea has been submitted!');
      this.form.reset();
      }
    );
  }
}
