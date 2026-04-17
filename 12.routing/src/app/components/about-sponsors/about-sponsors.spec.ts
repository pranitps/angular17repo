import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSponsors } from './about-sponsors';

describe('AboutSponsors', () => {
  let component: AboutSponsors;
  let fixture: ComponentFixture<AboutSponsors>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutSponsors]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutSponsors);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
