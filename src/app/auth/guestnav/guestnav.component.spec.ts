
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { GuestnavComponent } from './guestnav.component';

describe('GuestnavComponent', () => {
  let component: GuestnavComponent;
  let fixture: ComponentFixture<GuestnavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [GuestnavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
