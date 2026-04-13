export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  {
    value: 10,
    suffix: '+',
    label: 'Years of Operations',
  },
  {
    value: 100,
    suffix: '+',
    label: 'Meteorology Students Trained',
  },
  {
    value: 50,
    suffix: '+',
    label: 'Events Supported',
  },
  {
    value: 12,
    suffix: '+',
    label: 'Partner Organizations',
  },
  {
    value: 5,
    suffix: '',
    label: 'Regional Centers',
  },
  {
    value: 3,
    suffix: '',
    label: 'AI-Powered Tools',
  },
];
