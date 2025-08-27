import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConvertService } from 'src/app/service/convert.service';

import { GameComponent } from './game.component';

class MockConvertService {
  getItems() {
    return [
      { id: 1, name: 'Item 1', length: 10, weight: 10 },
      { id: 2, name: 'Item 2', length: 20, weight: 20 },
    ];
  }
  compareItems(item1: number, item2: number, which: string, quantity: number) {
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

  it('should call compareItems on ConvertService', () => {
    spyOn(convertService, 'compareItems').and.callThrough();
    component.compareItems(1, 2, 'length', 1);
    expect(convertService.compareItems).toHaveBeenCalledWith(1, 2, 'length', 1);
  });

  it('should update finalResult after comparing items', () => {
    component.compareItems(1, 2, 'length', 1);
    expect(component.finalResult).toBe(42);
  });
});
