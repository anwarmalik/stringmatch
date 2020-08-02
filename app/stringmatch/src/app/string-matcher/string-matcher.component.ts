import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../store/app.reducers';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { selectPoistions } from '../store/app.selectors';
import { searchSubstring } from '../store/app.actions';

@Component({
  selector: 'app-string-matcher',
  templateUrl: './string-matcher.component.html',
  styleUrls: ['./string-matcher.component.scss']
})
export class StringMatcherComponent implements OnInit {
  formGroup: FormGroup;
  subStringPoistions: number[];
  subscription: any;

  constructor(private store: Store<State>, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      'text': [null, Validators.required],
      'substring': [null, Validators.required]
     });

     this.subscription = this.store.select(selectPoistions).subscribe(poistions => {
       this.subStringPoistions = poistions;
     })
  }

  onSubmit(post){
    this.store.dispatch(searchSubstring(post))
  }

}
