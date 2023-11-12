import { GetQueryInterface } from 'interfaces';

export interface PricePerformanceInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface PricePerformanceGetQueryInterface extends GetQueryInterface {
  id?: string;
}
