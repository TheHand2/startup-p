import { ProgressStatuses } from '../../../common';

export interface Step {
  id: number;
  name: string;
  stage: number;
  status: ProgressStatuses;
}
