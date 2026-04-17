import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutProjects } from './about-projects';

describe('AboutProjects', () => {
  let component: AboutProjects;
  let fixture: ComponentFixture<AboutProjects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutProjects]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutProjects);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
