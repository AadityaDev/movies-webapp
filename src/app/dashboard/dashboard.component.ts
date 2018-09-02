import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, Pipe, PipeTransform } from '@angular/core';
import { MoviesService } from '../services/movie/movies.service';
import { Movie } from '../shared/models/movie.model';
import { PageEvent, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

export class CardTile {
  constructor() {
  }
  position:number;
  color: string;
  cols: number;
  rows: number;
  text: string;
  movie: Movie;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  private movies: Movie[];
  private moviesCard: CardTile;
  private totalMoviesCards: CardTile[];
  private moviesCards: CardTile[];
  private moviesNotFoundError: boolean;
  private tiles: Tile[] = [
    { text: 'One', cols: 2, rows: 3, color: 'lightblue' },
    { text: 'Two', cols: 2, rows: 3, color: 'lightgreen' },
    { text: 'Three', cols: 2, rows: 3, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 3, color: '#DDBDF1' },
  ];

  // MatPaginator Inputs
  length;
  pageSize = 10;
  pageSizeOptions: number[] = [10, 100];
  pageEvent: PageEvent;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  path: string[] = ['movie'];
  order: number = 1;

  constructor(private moviesService: MoviesService) {
    this.moviesService.getMovies().toPromise()
      .then(res => {
        console.log("total movies: " + res['length']);
        length = res['length'];
        this.moviesCards = [];
        this.totalMoviesCards = [];
        for (var i = 0; i < res['length']; i++) {
          this.moviesCard = new CardTile();
          this.moviesCard.position = i;
          this.moviesCard.text = res[i]['title'];
          this.moviesCard.cols = 1.45;
          this.moviesCard.rows = 1.45;
          this.moviesCard.color = 'lightblue';
          var movie = res[i];
          this.moviesCard.movie = JSON.parse(JSON.stringify(movie));
          if (i == 0) {
            console.log("movie is: " + JSON.stringify(movie));
          }
          this.totalMoviesCards.push(this.moviesCard);
        }

        for (var i = 0; i < 10; i++) {
          this.moviesCard = new CardTile();
          this.moviesCard.position = i;
          this.moviesCard.text = res[i]['title'];
          this.moviesCard.cols = 1;
          this.moviesCard.rows = 1;
          this.moviesCard.color = 'lightblue';
          var movie2 = res[i];
          this.moviesCard.movie = JSON.parse(JSON.stringify(movie2));
          this.moviesCards.push(this.moviesCard);
        }

      }, err => {
        console.log("error in fetching movies: " + err);
      })
      .catch(ex => { console.log("exception caught fetching movies: " + ex); });
  }

  getUpdate(event) {
    // this.paginationDetail.next(event);
    console.log('length is: ' + this.paginator.length+" event: "+JSON.stringify(event));
    this.moviesCards = new Array<CardTile>();
    var start = 0, end = 0;
    if(this.paginator.pageIndex==0){
      start = 0;
      end = start + (this.paginator.pageSize -1);
    }else{
      start = this.paginator.pageIndex * this.paginator.pageSize;
      end = start + (this.paginator.pageSize - 1);
    }
    console.log('start is: '+start+'end is: '+end+' length: '+this.moviesCards['length']);
    this.moviesCards = [];
    for (var i = start; i <= end; i++) {
      // this.moviesCard = new CardTile();
      // this.moviesCard.position = i;
      // console.log('title is: '+JSON.stringify(this.totalMoviesCards[i]));
      // // console.log('title is: '+this.totalMoviesCards[i]['title']);
      // this.moviesCard.text = this.totalMoviesCards[i]['title'];
      // this.moviesCard.cols = 1.8;
      // this.moviesCard.rows = 1.8;
      // this.moviesCard.color = 'lightblue';
      // var movie = this.totalMoviesCards[i];
      // this.moviesCard.movie = JSON.parse(JSON.stringify(movie));
      this.moviesCards.push(this.totalMoviesCards[i]);
    }
    console.log('len is: '+this.moviesCards['length']);


  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
  }

  ngOnChanges() {

  }

  ngOnInit() {
  }

  ngDoCheck() {
  }

  ngAfterContentInit() {
  }

  ngAfterContentChecked() {

  }

  ngAfterViewInit() {
  }

  ngAfterViewChecked() {
  }

  ngOnDestroy() {
  }

  openIMDBPage(url){
    window.open(url, "_blank");
  }

    sortTable(prop: string) {
    this.path = prop.split('.')
    this.order = this.order * (-1); // change order
    return false; // do not reload
  }

}

@Pipe({
  name: 'sortingMovies'
})
export class SortingCompaniesPipe implements PipeTransform {

  transform(companies: Movie[], path: string[], order: number): Movie[] {

    // Check if is not null
    if (!companies || !path || !order) return companies;

    return companies.sort((a: Movie, b: Movie) => {
      // We go for each property followed by path
      path.forEach(property => {
        a = a[property];
        b = b[property];
      })

      // Order * (-1): We change our order
      return a > b ? order : order * (- 1);
    })
  }

}
