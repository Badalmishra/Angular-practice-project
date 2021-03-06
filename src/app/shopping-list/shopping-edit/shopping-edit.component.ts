import { Component, OnInit,ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import {Ingredients} from '../../shared/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredients>();
  constructor() { }

  ngOnInit() {
  }
  onAddItem(){
    const ingName =this.nameInputRef.nativeElement.value;
    const ingAmount =this.amountInputRef.nativeElement.value;
    console.log(ingName);
    const newIngredient  = new Ingredients(ingName,ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }
}
