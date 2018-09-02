import { Deserializable } from './deserializable.model';

export class Movie implements Deserializable {

	movie_title: string;
	director_name: string;
	actor_1_name: string;
	actor_2_name: string;
	genres: string;
	language: string;
	country: string;
	content_rating: string;
	budget: string;
	title_year: string;
	plot_keywords: string;
	movie_imdb_link: string;

	deserialize(input: any) {
		Object.assign(this, input);
		return this;
	}

}