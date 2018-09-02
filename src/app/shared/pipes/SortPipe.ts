import {Pipe, PipeTransform } from '@angular/core';
import {Movie} from '../models/movie.model';


@Pipe({name: "sortBy"})
export class SortPipe {
  transform(array: Array<Movie>, args: string): Array<Movie> {
    array.sort((a: any, b: any) => {
	    if ( a[args] < b[args] ){
	    	return -1;
	    }else if( a[args] > b[args] ){
	        return 1;
	    }else{
	    	return 0;	
	    }
    });
    return array;
  }
}