import { TestBed } from '@angular/core/testing';
import { ListMusicService } from './list-music-service.service';


describe('ListMusicService', () => {
  let service: ListMusicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListMusicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
