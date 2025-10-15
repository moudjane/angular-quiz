import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuizService } from "../../shared/services/quiz.service";
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-question',
	templateUrl: './question.component.html',
	styleUrls: ['./question.component.scss'],
	standalone: false
})
export class QuestionComponent implements OnInit, OnDestroy {
	quizContent: any[] = [];
	private sub: Subscription | null = null;

	constructor(private quizService: QuizService) { }

	ngOnInit(): void {
		// Subscribe to quizContent$ to receive updates when answers are fetched
		this.sub = this.quizService.quizContent$.subscribe(content => {
			this.quizContent = content;
		});
	}

	ngOnDestroy(): void {
		this.sub?.unsubscribe();
	}

	addAnswer(answer: string, questionId: number) {
		this.quizService.addAnswer(answer, questionId);
	}
}
