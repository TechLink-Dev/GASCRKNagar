import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    private searchTermSubject = new BehaviorSubject<string>('');
    public searchTerm$ = this.searchTermSubject.asObservable();

    setSearchTerm(term: string) {
        this.searchTermSubject.next(term);
    }

    searchInArray(items: any[], searchTerm: string, fields: string[]): any[] {
        if (!searchTerm) return items;

        const term = searchTerm.toLowerCase();
        return items.filter(item =>
            fields.some(field => {
                const value = this.getNestedProperty(item, field);
                return value && value.toString().toLowerCase().includes(term);
            })
        );
    }

    filterByCategory(items: any[], category: string, categoryField: string = 'category'): any[] {
        if (!category) return items;
        return items.filter(item => item[categoryField] === category);
    }

    private getNestedProperty(obj: any, path: string): any {
        return path.split('.').reduce((current, prop) => current?.[prop], obj);
    }
}