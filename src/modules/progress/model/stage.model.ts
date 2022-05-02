import { ProgressStatuses } from '../../../common';

export interface Stage {
  id: number;
  name: string;
  order: number;
  status: ProgressStatuses;
}
