import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ItemService } from './item.service';
import { Item } from './models/item.model';

fdescribe('ItemService', () => {
  let service: ItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ItemService],
    });
    service = TestBed.inject(ItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should filter data with all filter states false', () => {
    const mockItems: Item[] = [
      {
        id: '1',
        description: 'Test Item 1',
        done: false,
        createdTime: '2023-10-10T10:00:00Z',
      },
      {
        id: '2',
        description: 'Test Item 2',
        done: true,
        createdTime: '2023-10-11T10:00:00Z',
      },
    ];
    service.setData(mockItems);
    service.filterData('');
    expect(service.displayItems.length).toBe(2);
    expect(service.displayItems).toEqual(mockItems);
  });

  it('should sort data with description ', () => {
    const mockItems: Item[] = [
      {
        id: '1',
        description: 'Test Item 2',
        done: false,
        createdTime: '2023-10-10T10:00:00Z',
      },
      {
        id: '2',
        description: 'Test Item 1',
        done: true,
        createdTime: '2023-10-11T10:00:00Z',
      },
    ];

    const mockItemsRe: Item[] = [
      {
        id: '2',
        description: 'Test Item 1',
        done: true,
        createdTime: '2023-10-11T10:00:00Z',
      },
      {
        id: '1',
        description: 'Test Item 2',
        done: false,
        createdTime: '2023-10-10T10:00:00Z',
      },
    ];
    service.filterState = {
      sortByDes: true,
      sortByTime: false,
      hideDone: false,
    };

    service.setData(mockItems);

    expect(service.displayItems.length).toBe(2);
    expect(service.displayItems).toEqual(mockItemsRe);
  });

    it('should hide done items', () => {
      const mockItems: Item[] = [
        {
          id: '1',
          description: 'Test Item 2',
          done: false,
          createdTime: '2023-10-10T10:00:00Z',
        },
        {
          id: '2',
          description: 'Test Item 1',
          done: true,
          createdTime: '2023-10-11T10:00:00Z',
        },
      ];

      const mockItemsRe: Item[] = [
        {
          id: '1',
          description: 'Test Item 2',
          done: false,
          createdTime: '2023-10-10T10:00:00Z',
        },
      ];
      service.filterState = {
        sortByDes: false,
        sortByTime: false,
        hideDone: true,
      };

      service.setData(mockItems);

      expect(service.displayItems.length).toBe(1);
      expect(service.displayItems).toEqual(mockItemsRe);
    });
});
