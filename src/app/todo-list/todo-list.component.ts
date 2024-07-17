import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  // Create variables
  newTask = '';
  tasks: string[] = [];
  errorMessage = '';
  readonly maxTasks = 10;

  //add translateService
  constructor(private translate: TranslateService) { }

  // create AddTask Method
  addTask(): void {
    // Check if task is valid
    if (this.isTaskInvalid()) {
      return;
    }

    // Add new task
    this.tasks.push(this.newTask);
    this.resetNewTask();
  }

  // create deleteTask Method
  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
    if (this.tasks.length < this.maxTasks) {
      this.clearError();
    }
  }

  // create validation error method
  private isTaskInvalid(): boolean {

    // add error if task input is empty
    if (!this.newTask.trim()) {
      this.errorMessage = this.translate.instant('ERROR.EMPTY_TASK');
      return true;
    }

    // add additional error - if maxTasks = 10
    if (this.tasks.length >= this.maxTasks) {
      this.errorMessage = this.translate.instant('ERROR.MAX_TASKS', { maxTasks: this.maxTasks });
      return true;
    }

    return false;
  }

  // reset new task input and claer error
  private resetNewTask(): void {
    this.newTask = '';
    this.clearError();
  }

  // clear error message
  private clearError(): void {
    this.errorMessage = '';
  }
}
