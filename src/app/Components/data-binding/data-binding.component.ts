import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { single } from 'rxjs';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  //string, number, boolean, date

  courseName: string = "Angular 18";
  inputType = "radio";
  rollnumber: number = 123;
  myClassName: string = "bg-primary";
  selectStateName: string = "KPK";
  isChecked: boolean = true;

  fName = signal("Areeb Hassan");
  constructor() {

  }
  chnageCoursName() {
    this.courseName = "OOP";
    this.fName.set("Areeb");
  }
  showAlert(msg: string) {
    alert(msg);
  }

}
