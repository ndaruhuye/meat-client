import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataDeletionPage } from './data-deletion-page';

describe('DataDeletionPage', () => {
  let component: DataDeletionPage;
  let fixture: ComponentFixture<DataDeletionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataDeletionPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DataDeletionPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
