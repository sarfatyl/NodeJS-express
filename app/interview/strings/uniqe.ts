// write your code in Angular (TypeScript)

import { Component } from '@angular/core';

class TodoItem {
	isDone: boolean;
	name: string;
}

@Component({
	selector: 'todo-list',
	template: `<input [(ngModel)]="name"/>
  <button [disabled]="!name.length" (click)="add()">Add</button>
  <br>
  <span>{{getRemainingCount()}} remaining out of {{items.length}} tasks</span>
  <ul>
    <li *ngFor="let item of items" class="todo-item" [class.is-done]="item.isDone" (click)="toggleItem(item)">
        {{ item.name }}
    </li>
  </ul>`,
	styles: [`
    .todo-item {
            cursor: pointer;
    }
    .is-done {
      text-decoration: line-through;
    }
  `]
})
export class TodoListComponent {
	public name: string = '';
	public items: Array<TodoItem> = [];

	public getRemainingCount(): number {
		return this.items.filter(item => !item.isDone).length;
	}

	public add(): void {
		this.items.push({
			isDone: false,
			name: this.name
		});
		this.name = '';
	}

	public toggleItem(item: TodoItem): void {
		item.isDone = !item.isDone;
	}

}
