import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePortalComponent } from './service-portal.component';

describe('ServicePortalComponent', () => {
  let component: ServicePortalComponent;
  let fixture: ComponentFixture<ServicePortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicePortalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicePortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
