import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliseSensorialComponent } from './analise-sensorial.component';

describe('AnaliseSensorialComponent', () => {
  let component: AnaliseSensorialComponent;
  let fixture: ComponentFixture<AnaliseSensorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnaliseSensorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnaliseSensorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
