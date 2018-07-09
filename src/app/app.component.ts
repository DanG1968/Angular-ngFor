import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public dataList;

  constructor(){
    this.dataList = [
      {
        'Employee' : {
          'Name' : {
            'First' : 'Roy',
            'Last' : 'Agasthyan'
          },
          'Address' : {
            'HouseNo' : 100,
            'State' : 'Kerala',
            'Country' : 'India'
          }
        }
      },
      {
        'Employee' : {
          'Name' : {
            'First' : 'Sam',
            'Last' : 'Thomson'
          },
          'Address' : {
            'HouseNo' : 120,
            'State' : 'Delhi',
            'Country' : 'India'
          }
        }
      }
    ];
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  getKeys(obj){
    return Object.keys(obj)
  }
}
