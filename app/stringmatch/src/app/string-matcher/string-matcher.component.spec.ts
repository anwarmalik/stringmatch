import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StringMatcherComponent } from './string-matcher.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { MemoizedSelector } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';

describe('StringmatcherComponent', () => {
  let component: StringMatcherComponent;
  let fixture: ComponentFixture<StringMatcherComponent>;
  let store: MockStore;
  const initialState = {stringMatch: { positions: [], errorDetial: null }};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringMatcherComponent ],
      imports: [ReactiveFormsModule],
      providers: [
        provideMockStore({ initialState })
      ],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringMatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
