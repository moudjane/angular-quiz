import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
	@Input() category: { id: number; name: string; questions?: any[] } | null = null;
	@Input() playerName: string | null = null;
	@Output() startQuiz = new EventEmitter<number>();

	start() {
		if (this.category) {
			this.startQuiz.emit(this.category.id);
		}
	}
}
