import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { QuizService } from "../shared/services/quiz.service";
import { CategoryService, Category } from '../shared/services/category.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  standalone: false
})
export class QuizComponent implements OnInit {
  isQuizFinished = this.quizService.isQuizFinished;
  playerName = '';
  categoryName = '';

  constructor(
    private quizService: QuizService,
    private router: Router,
    private route: ActivatedRoute
    , private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizService.playerName = params['playerName'];
      this.playerName = params['playerName'];
      const categoryId = Number(params['categoryId']);
      if (categoryId) {
        this.categoryService.getCategoryById(categoryId).subscribe(cat => {
          this.categoryName = cat.name;
        });
        this.quizService.loadQuestionsForCategory(categoryId);
      }
    });
  }

  goToResultPage() {
    this.router.navigate(['/result']);
  }
}
