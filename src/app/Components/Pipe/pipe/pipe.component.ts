import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, Observable, map } from 'rxjs';
import { NaPipe } from '../../../Pipe/na.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [NaPipe, AsyncPipe, JsonPipe, UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  firstName: string = "this  is a book";

  currentDate: Date = new Date();
  currentTime: Observable<Date> = new Observable<Date>;
  
  student: any = {
    name: 'Ali',
    city: 'BWP',
    id: 123, state : ''
  }

  constructor() {
    this.currentTime = interval(1000).pipe(map(() => new Date()));
  }
}
