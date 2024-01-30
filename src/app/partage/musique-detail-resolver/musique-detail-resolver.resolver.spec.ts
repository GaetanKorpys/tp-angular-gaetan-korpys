import { TestBed } from '@angular/core/testing';

import { MusicDetailResolver } from './musique-detail-resolver.resolver';

describe('MusiqueDetailResolverResolver', () => {
  let resolver: MusicDetailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(MusicDetailResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
