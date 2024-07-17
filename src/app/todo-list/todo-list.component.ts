import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  newTask: string = '';
  tasks: string[] = [];
  errorMessage: string = '';
  readonly maxTasks: number = 10;

  constructor(private translate: TranslateService) { }

  addTask(): void {
    if (this.isTaskInvalid()) {
      return;
    }

    this.tasks.push(this.newTask);
    this.resetNewTask();
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
    if (this.tasks.length < this.maxTasks) {
      this.clearError();
    }
  }

  private isTaskInvalid(): boolean {
    if (this.tasks.length >= this.maxTasks) {
      this.errorMessage = this.translate.instant('ERROR.MAX_TASKS', { maxTasks: this.maxTasks });
      return true;
    }

    if (!this.newTask.trim()) {
      this.errorMessage = this.translate.instant('ERROR.EMPTY_TASK');
      return true;
    }

    return false;
  }

  private resetNewTask(): void {
    this.newTask = '';
    this.clearError();
  }

  private clearError(): void {
    this.errorMessage = '';
  }
}
