import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from '../../shared/models/movie.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {forkJoin} from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
	providedIn: 'root'
})
export class MoviesService {

	constructor(private http:HttpClient) { }


	getMovies(): Observable<any> {
		return this.http.get('http://starlord.hackerearth.com/movieslisting');
	}

}
