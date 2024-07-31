import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {
  
  div1BgColor:string = 'bg-primary';
  isDiv2Active:boolean = false;

  num1:string = '';
  num2:string = '';
  idActive:boolean=false;

  constructor(private router: Router){
    
  }
  studentList: any[] = [
    {
      id: 1, totalMarks: 23,
      name: 'ab', city: 'abc', isAtive: false
    }, {
      id: 2,totalMarks: 33,
      name: 'cd', city: 'def', isAtive: false
    }, {
      id: 3,totalMarks: 65,
      name: 'ef', city: 'ghi', isAtive: true
    }, {
      id: 4,totalMarks: 72,
      name: 'gh', city: 'klm', isAtive: false
    }, {
      id: 5,totalMarks: 12,
      name: 'ij', city: 'nop', isAtive: true
    }, {
      id: 6,totalMarks: 45,
      name: 'kl', city: 'qrs', isAtive: false
    }, {
      id: 7, totalMarks: 26,
      name: 'mn', city: 'tuv', isAtive: true
    }, {
      id: 8,totalMarks: 80,
      name: 'op', city: 'wxy', isAtive: true
    },
  ]

  customerStyle:any = {
    'color': 'white',
    'background-color': 'red',
    'widht' : '200px',
    'height': '200px',
    'border-radius': '20px'
  }
  addRedColor(){
    this.div1BgColor = 'bg-danger'
  }

  addBlueColor(){
    this.div1BgColor = 'bg-primary'
  }
  togglesDiv2(){
    this.isDiv2Active = !this.isDiv2Active;
  }
  navigatetoStructuralMethod(){
    this.router.navigateByUrl('structural-directive');
  }
}
