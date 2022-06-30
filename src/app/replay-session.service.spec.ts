import { TestBed } from '@angular/core/testing';

import { ReplaySessionService } from './replay-session.service';

describe('ReplaySessionService', () => {
  let service: ReplaySessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReplaySessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
