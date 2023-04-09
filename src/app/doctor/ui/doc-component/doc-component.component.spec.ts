import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocComponentComponent } from './doc-component.component';

describe('DocComponentComponent', () => {
  let component: DocComponentComponent;
  let fixture: ComponentFixture<DocComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
