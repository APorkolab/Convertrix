/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { GameComponent } from './game.component';
import { ConvertService, PropKind } from 'src/app/service/convert.service';
import { Item } from 'src/app/model/item';

class MockConvertService {
  private readonly items: readonly Item[] = [
    {
      id: 1,
      nameEnglish: 'Item 1',
      nameHungarian: 'Tétel 1',
      length: 10,
      weight: 10,
      description: 'desc 1',
      descriptionHungarian: 'leírás 1',
    },
    {
      id: 2,
      nameEnglish: 'Item 2',
      nameHungarian: 'Tétel 2',
      length: 20,
      weight: 20,
      description: 'desc 2',
      descriptionHungarian: 'leírás 2',
    },
  ];

  getItems(): readonly Item[] {
    return this.items;
  }

  compareItems(
    _item1: number | null | undefined,
    _item2: number | null | undefined,
    _which: PropKind | null | undefined,
    _quantity: number | null | undefined
  ): number {
    return 42;
  }
}

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;
  let convertService: ConvertService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameComponent],
      imports: [FormsModule], // ngModel miatt
      providers: [{ provide: ConvertService, useClass: MockConvertService }],
    }).compileComponents();

    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    convertService = TestBed.inject(ConvertService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get items from ConvertService on init', () => {
    expect(component.listOfAllCard.length).toBe(2);
  });

  it('should call ConvertService.compareItems with proper args and update finalResult', () => {
    const spy = spyOn(convertService, 'compareItems').and.callThrough();

    // beállítások
    component.property = 'length';
    component.updateQuantity(3);
    component.setFrom(1);
    component.setTo(2);

    // explicit újraszámítás (stabil ellenőrzéshez)
    component.recompute();

    expect(spy).toHaveBeenCalledWith(1, 2, 'length', 3);
    expect(component.finalResult).toBe(42);
  });
});
