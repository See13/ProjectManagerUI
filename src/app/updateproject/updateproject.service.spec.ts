import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateprojectService } from './updateproject.service';

describe('UpdprojectService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        HttpClientModule
      ],
      providers: [
        UpdateprojectService,
      ]
    }).compileComponents();
  }));

  it('should be created', () => {
    const service: UpdateprojectService = TestBed.get(UpdateprojectService);
    expect(service).toBeTruthy();
  });
});
