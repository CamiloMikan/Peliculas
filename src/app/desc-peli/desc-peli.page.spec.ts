import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DescPeliPage } from './desc-peli.page';

describe('DescPeliPage', () => {
  let component: DescPeliPage;
  let fixture: ComponentFixture<DescPeliPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DescPeliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
