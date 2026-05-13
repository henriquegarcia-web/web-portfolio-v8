export interface IIndicatorItem {
  id: string
  value: string
}

export const indicators = [
  {
    id: 'experience',
    value: '5+',
  },
  {
    id: 'projects',
    value: '50+',
  },
  {
    id: 'results',
    value: '100%',
  },
] satisfies IIndicatorItem[]
