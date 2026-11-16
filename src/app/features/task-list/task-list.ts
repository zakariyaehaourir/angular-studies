import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { TitleColorPipe } from '../../pipes/title-color-pipe-pipe';


@Component({
  selector: 'app-task-list',
  imports: [UpperCasePipe, DatePipe, TitleColorPipe],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss',
})
export class TaskList {
  tasks: { id: number; title: string; dueDate: string }[] = [
    { id: 1, title: 'TASK one', dueDate: '2026-11-15' },
    { id: 1, title: 'TASK two', dueDate: '2026-11-15' },
    { id: 1, title: 'TASK thress', dueDate: '2026-11-8' },
  ];
}