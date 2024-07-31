import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {

  dayNumber: string = '';

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
}
