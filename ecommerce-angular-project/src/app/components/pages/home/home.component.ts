import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Food } from '../../../shared/models/food';
import { FoodService } from '../../../services/food.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  foods: Food[] = [];
  constructor(private foodservice:FoodService) {
    this.foods = foodservice.getAll();
  }

  ngOnInit(): void {}
}
