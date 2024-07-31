import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {

  isDiv1Visible: boolean = true;
  isDiv2Visible: boolean = false;

  num1: string = '';
  num2: string = '';

  isActive: boolean = false;

  selectedState: string = '';

  cityArray: string[] = ['Isl', 'Pindi', 'gujarkhan']

  studentList: any[] = [
    {
      id: 1,
      name: 'ab', city: 'abc', isAtive: false
    }, {
      id: 2,
      name: 'cd', city: 'def', isAtive: false
    }, {
      id: 3,
      name: 'ef', city: 'ghi', isAtive: true
    }, {
      id: 4,
      name: 'gh', city: 'klm', isAtive: false
    }, {
      id: 5,
      name: 'ij', city: 'nop', isAtive: true
    }, {
      id: 6,
      name: 'kl', city: 'qrs', isAtive: false
    }, {
      id: 7,
      name: 'mn', city: 'tuv', isAtive: true
    }, {
      id: 8,
      name: 'op', city: 'wxy', isAtive: true
    },
  ]

  toggleDiv2() {
    this.isDiv2Visible = !this.isDiv2Visible;
  }

  showDiv1() {
    this.isDiv1Visible = true;
  }
  hideDiv1() {
    this.isDiv1Visible = false;
  }
}