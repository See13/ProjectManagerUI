import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateuserComponent } from './updateuser.component';

describe('UpduserComponent', () => {
  let component: UpdateuserComponent;
  let fixture: ComponentFixture<UpdateuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
      ],
      declarations: [ UpdateuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
