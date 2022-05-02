import { ProgressStatuses } from '../../common';

export const stagesData = [
  {
    id: 1,
    name: 'foundation',
    order: 0,
    status: ProgressStatuses.INITIAL,
  },
  {
    id: 2,
    name: 'discovery',
    order: 1,
    status: ProgressStatuses.INITIAL,
  },
  {
    id: 3,
    name: 'delivery',
    order: 2,
    status: ProgressStatuses.INITIAL,
  },
];

export const stageStepsData = [
  {
    id: 1,
    name: 'setup virtual office',
    stage: 1,
    status: ProgressStatuses.INITIAL,
  },
  {
    id: 2,
    name: 'set mission & vision',
    stage: 1,
    status: ProgressStatuses.INITIAL,
  },
  {
    id: 3,
    name: 'select business name',
    stage: 1,
    status: ProgressStatuses.INITIAL,
  },
  { id: 4, name: 'buy domains', stage: 1, status: ProgressStatuses.INITIAL },
  { id: 5, name: 'create roadmap', stage: 2, status: ProgressStatuses.INITIAL },
  {
    id: 6,
    name: 'competitor analysis',
    stage: 2,
    status: ProgressStatuses.INITIAL,
  },
  {
    id: 7,
    name: 'release marketing website',
    stage: 3,
    status: ProgressStatuses.INITIAL,
  },
  { id: 8, name: 'release mvp', stage: 3, status: ProgressStatuses.INITIAL },
];
