
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableArticlesComponent } from './table-articles.component';

describe('TableArticlesComponent', () => {
  let component: TableArticlesComponent;
  let fixture: ComponentFixture<TableArticlesComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableArticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
