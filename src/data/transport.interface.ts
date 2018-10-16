import { stations } from './stations.interface';

export interface transport extends stations {
  exist: string;
  icon: string;
  stations:stations[];
}
