import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods:Food[]=[];
  constructor(private foodService:FoodService,private activatedRoute:ActivatedRoute) {
    let foodObservable:Observable<Food[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        foodObservable = this.foodService.getAllFoodBySearchTerm(params.searchTerm);
      else if (params.tag)
        foodObservable = this.foodService.getAllFoodByTag(params.tag);
      else
        foodObservable = foodService.getAllFood();

        foodObservable.subscribe((serverFoods) => {
          this.foods = serverFoods;
        })
    }
   )}

  ngOnInit(): void {
  }

}
