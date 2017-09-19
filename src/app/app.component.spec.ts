import {AppComponent} from './app.component';
import { HeroDetailComponent } from './hero-detail.component';

import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {FormsModule} from "@angular/forms";

describe('AppComponent', function () {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let elh1: DebugElement;
  let elh2: DebugElement;
  let elDivHeroId: DebugElement;
  let elDivHeroName: DebugElement;
  let elInput: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ AppComponent, HeroDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    elh1 = fixture.debugElement.query(By.css('h1'));
    elDivHeroId = fixture.debugElement.query(By.css('div#heroId'));
    elDivHeroName = fixture.debugElement.query(By.css('div#heroName'));
    elInput = fixture.debugElement.query(By.css('input'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected <h1> text', () => {
    fixture.detectChanges();
    const h1 = elh1.nativeElement;
    expect(h1.innerText).toEqual("Tour of Heroes");
  });

  it('should be show an Hero', (done: DoneFn) => {
    fixture.detectChanges();
    const buttons: Array<DebugElement> = fixture.debugElement.queryAll(By.css('.heroes .hero-item'));

    let button = buttons[1];
    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    setTimeout(() => {
      const elh2 = fixture.debugElement.query(By.css('h2.hero-details'));
      const h2 = elh2.nativeElement;
      expect(h2.innerText).toEqual("Oliver Queen details!");
      done();
    }, 500);
  });
});

