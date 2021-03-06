import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { AppComponent } from './app.component';
import { LoadingComponent } from './core/components/loading/loading.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { UnitSelectorComponent } from './core/components/unit-selector/unit-selector.component';


describe('AppComponent', () => {

  let store: Store;
  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgxsModule.forRoot([])
      ],
      declarations: [
        AppComponent,
        NavbarComponent,
        LoadingComponent,
        UnitSelectorComponent
      ],
      providers: [
      ]
    }).compileComponents();

    store = TestBed.inject(Store);

  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Backbase Assignment'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Backbase Assignment');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('header span.fs-3').textContent).toContain('Backbase Weather Forecast');
  });
});
