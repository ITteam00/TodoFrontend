import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultAreaComponent } from './result-area.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';

describe('ResultAreaComponent', () => {
  let component: ResultAreaComponent;
  let fixture: ComponentFixture<ResultAreaComponent>;
  let itemServiceMock: any;
  let routerMock: any;

  beforeEach(async () => {
    itemServiceMock = jasmine.createSpyObj('ItemService', ['updateItem']);
    routerMock = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [],
      declarations: [ResultAreaComponent],
      providers: [
        { provide: ItemService, useValue: itemServiceMock },
        { provide: Router, useValue: routerMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
