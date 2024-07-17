import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  newTask: string = '';
  tasks: string[] = [];
  errorMessage: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addTask(): void {
    if (this.newTask.trim().length === 0) {
      this.errorMessage = 'Task cannot be empty';
      return;
    }
    this.tasks.push(this.newTask);
    this.newTask = '';
    this.errorMessage = '';
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
  }
}
