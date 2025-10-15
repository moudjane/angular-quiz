import { Component } from '@angular/core';
import { CategoryService, Category } from '../shared/services/category.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-categories',
	standalone: false,
	templateUrl: './categories.component.html',
	styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
	categories: Category[] = [];
	filtered: Category[] = [];
	searchText = '';

		playerName = 'anonymous';

		constructor(private categoryService: CategoryService, private router: Router, private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.route.queryParams.subscribe(params => {
			this.playerName = params['playerName'] || this.playerName;
		});

		this.loadCategories();
	}

	loadCategories() {
		this.categoryService.getCategories().subscribe((cats) => {
			this.categories = cats;
			this.filtered = cats;
		});
	}

	onStartQuiz(categoryId: number) {
			this.router.navigate(['/quiz', this.playerName || 'anonymous', categoryId]);
	}

	onSearch() {
		const term = (this.searchText || '').toLowerCase();
		if (!term) {
			this.filtered = this.categories;
			return;
		}
		this.filtered = this.categories.filter(c => c.name.toLowerCase().includes(term));
	}

	resetFilter() {
		this.searchText = '';
		this.filtered = this.categories;
	}
}
