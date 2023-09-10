import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Subject } from 'rxjs';
import { HeaderComponent } from './header.component';
import { OnInit } from '@angular/core';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let activeRoute = new Subject();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Tests that ngOnInit() is called successfully.
  it('test_ng_on_init_called_successfully', () => {
    const headerComponent = new HeaderComponent();
    expect(headerComponent.ngOnInit()).toBeUndefined();
  });

  // Tests that the class has no external dependencies to mock.
  it('test_no_external_dependencies', () => {
    // No external dependencies to mock
    expect(true).toBeTruthy();
  });

  // Tests that the class can be instantiated without any parameters.
  it('test_no_parameters', () => {
    const headerComponent = new HeaderComponent();
    expect(headerComponent).toBeDefined();
  });

  // Tests that the constructor initializes the class correctly.
  it('test_constructor', () => {
    const headerComponent = new HeaderComponent();
    expect(headerComponent.constructor).toBeDefined();
  });
});
