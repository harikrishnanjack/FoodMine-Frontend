import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sample_foods, sample_tags } from 'src/data';
import { FOODS_BY_SEARCH_URL, FOODS_BY_TAG_URL, FOODS_TAGS_URL, FOODS_URL, FOOD_BY_ID_URL } from '../shared/constants/urls';
import { Food } from '../shared/models/food.model';
import { Tag } from '../shared/models/tag.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }

  getAll():Food[] {
    return sample_foods;
  }

  getAllFoodsBySearchTerm(searchItem:string){
    this.getAll().filter(item=>item.name?.toLowerCase().includes(searchItem.toLowerCase()));
  }

  getAllTags():Tag[]{
    return sample_tags;
  }

  getAllFoodsByTag(tag:string):Food[]{
    return tag === 'All' ? this.getAll() : this.getAll().filter(food=>food.tags?.includes(tag));
  }

  getFoodById(id:string):Food{
    return this.getAll().find(item=> item.id == id) ?? new Food();
  }

  // server side start

  getAllFood(): Observable<Food[]> {
    return this.http.get<Food[]>(FOODS_URL);
  }

  getAllFoodBySearchTerm(searchTerm: string) {
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL + searchTerm);
  }

  getAllTag(): Observable<Tag[]> {
    return this.http.get<Tag[]>(FOODS_TAGS_URL);
  }

  getAllFoodByTag(tag: string): Observable<Food[]> {
    return tag === "All" ?
      this.getAllFood() :
      this.http.get<Food[]>(FOODS_BY_TAG_URL + tag);
  }

  getFoodsById(foodId:string):Observable<Food>{
    return this.http.get<Food>(FOOD_BY_ID_URL + foodId);
  }
}
