import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleComponent } from './title.component';

describe('TitleComponent', () => {
  let component: TitleComponent;
  let fixture: ComponentFixture<TitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    it('should have title "To-Do-List"', () => {
      const compiled = fixture.nativeElement;
      const titleDiv = compiled.querySelector('.title');
      expect(titleDiv).toBeTruthy();
      expect(titleDiv.textContent).toBe('To-Do-List'); 
    });


});
