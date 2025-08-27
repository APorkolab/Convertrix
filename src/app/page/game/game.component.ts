import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/model/item';
import { ConvertService } from 'src/app/service/convert.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  standalone: false,
})
export class GameComponent implements OnInit {
  property!: string;
  firstItem!: number;
  secondItem!: number;
  firstValue!: any;
  secondValue!: any;
  finalResult!: number;
  @Input() quantity: number = 1;
  value: number = 0;
  ngSelect1 = 'Select the item what you would like to convert';
  ngSelect2 = 'Select the item you want to convert to';
  firstElement: Item | undefined;
  secondElement: Item | undefined;

  listOfAllCard: Item[] = [];

  constructor(private convertService: ConvertService) {}

  ngOnInit(): void {
    this.listOfAllCard = this.convertService.getItems();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  sendTheNewValue(UpdatedValue: number): void {
    this.quantity = UpdatedValue;
  }

  compareItems(item1: number, item2: number, which: string, quantity: number) {
    this.finalResult = this.convertService.compareItems(
      item1,
      item2,
      which,
      quantity
    );
  }
}
