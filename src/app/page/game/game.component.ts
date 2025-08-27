import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Item } from 'src/app/model/item';
import { ConvertService } from 'src/app/service/convert.service';

type PropKind = 'length' | 'weight';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameComponent implements OnInit, OnChanges {
  // --- Input ---
  @Input() quantity = 1;

  // --- UI szövegek ---
  readonly selectFromPlaceholder = 'Select the item you would like to convert';
  readonly selectToPlaceholder = 'Select the item you want to convert to';

  // --- Adatforrás ---
  listOfAllCard: readonly Item[] = [];

  // --- Kiválasztások (a template hivatkozik ezekre) ---
  firstElement: Item | null = null;
  secondElement: Item | null = null;
  property: PropKind | null = null;

  // --- Belső azonosítók a számításhoz ---
  private _fromId: number | null = null;
  private _toId: number | null = null;

  // --- Eredmény ---
  private _finalResult = 0;
  get finalResult(): number {
    return this._finalResult;
  }

  constructor(private readonly convertService: ConvertService) {}

  // ---- Lifecycle ----
  ngOnInit(): void {
    this.listOfAllCard = this.convertService.getItems();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('quantity' in changes) this.recompute();
  }

  // ---- Template által hívott publikus metódusok ----
  setFrom(id: number | null): void {
    this._fromId = id;
    this.recompute();
  }

  setTo(id: number | null): void {
    this._toId = id;
    this.recompute();
  }

  updateQuantity(next: number): void {
    this.quantity = Number(next) || 0;
    this.recompute();
  }

  // A template hivatkozik rá, ezért publikus
  recompute(): void {
    if (this._fromId == null || this._toId == null || this.property == null) {
      this._finalResult = 0;
      return;
    }
    this._finalResult = this.convertService.compareItems(
      this._fromId,
      this._toId,
      this.property,
      this.quantity
    );
  }
}
