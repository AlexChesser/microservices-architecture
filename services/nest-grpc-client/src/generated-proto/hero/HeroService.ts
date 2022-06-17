import { Observable } from 'rxjs';
import { Hero } from './Hero';
import { HeroById } from './HeroById';

export interface HeroService {
  findOne(data: HeroById): Observable<Hero>;
  findMany(upstream: Observable<HeroById>): Observable<Hero>;
}
