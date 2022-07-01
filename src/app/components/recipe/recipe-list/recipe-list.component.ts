import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Test Recipe 1", "testing recipe 1, yes we are testing", "https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000" ),
    new Recipe("Test Recipe 2", "testing recipe 2, yes we are testing", "https://www.holidify.com/images/cmsuploads/compressed/IndianStreetFood_20190103000803.jpg" )
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
