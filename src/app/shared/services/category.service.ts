import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Category {
  id: number;
  name: string;
  questions?: { id: number; questionLabel?: string }[];
}

@Injectable({ providedIn: 'root' })
export class CategoryService {
  private base = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.base}/categories`);
  }

  getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.base}/categories/${id}`);
  }
}
