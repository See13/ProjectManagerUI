import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdatetaskComponent } from './updatetask.component';
import { UpdatetaskService } from './updatetask.service';

describe('UpdatetaskComponent', () => {
  let component: UpdatetaskComponent;
  let fixture: ComponentFixture<UpdatetaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
      ],
      declarations: [ UpdatetaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatetaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return False if all input fields are NOT populated', () => {
    component.task.taskname = '';
    const objData = component.validateForm();
    expect(objData).toBeFalsy();
  });
});
