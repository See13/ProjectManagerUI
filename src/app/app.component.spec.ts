import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddtaskService } from './addtask/addtask.service';
import { ViewtaskService } from './viewtask/viewtask.service';
import { UpdatetaskService } from './updatetask/updatetask.service';
import { AdduserService } from './adduser/adduser.service';
import { UpdateuserService } from './updateuser/updateuser.service';
import { AddprojectService } from './addproject/addproject.service';
import { UpdateprojectService } from './updateproject/updateproject.service';
import { HttpClientModule } from '@angular/common/http';

xdescribe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        AddtaskService,
        ViewtaskService,
        UpdatetaskService,
        AdduserService,
        UpdateuserService,
        AddprojectService,
        UpdateprojectService
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ui'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ui');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to ui!');
  });
});
