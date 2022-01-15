import { TestBed } from '@angular/core/testing';
import { UserS.Service } from '../app/user-s.service';

describe('UserS.Service', () => {
 let service: UserS.Service;

 beforeEach(() => {
   TestBed.configureTestingModule({});
   service = TestBed.inject(UserS.Service);
 });

 it('should be created', () => {
   expect(service).toBeTruthy();
 });
  });
