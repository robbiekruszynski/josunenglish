import type { BrandColor } from '../types';

/**
 * Tailwind (v4) scans source files for literal class name strings, so
 * dynamically building class names like `bg-josun-${color}` at runtime
 * won't get picked up by the build. This lookup table keeps every class
 * name written out in full, in a place that isn't near component markup,
 * so components can stay declarative (`colorClasses[color].bg`) while
 * Tailwind still sees every class it needs to generate.
 */
export const colorClasses: Record<
  BrandColor,
  { bg: string; bgSoft: string; text: string; border: string }
> = {
  pink: {
    bg: 'bg-josun-pink',
    bgSoft: 'bg-josun-pink/15',
    text: 'text-josun-pink',
    border: 'border-josun-pink',
  },
  red: {
    bg: 'bg-josun-red',
    bgSoft: 'bg-josun-red/15',
    text: 'text-josun-red',
    border: 'border-josun-red',
  },
  orange: {
    bg: 'bg-josun-orange',
    bgSoft: 'bg-josun-orange/15',
    text: 'text-josun-orange',
    border: 'border-josun-orange',
  },
  yellow: {
    bg: 'bg-josun-yellow',
    bgSoft: 'bg-josun-yellow/15',
    text: 'text-josun-yellow',
    border: 'border-josun-yellow',
  },
  green: {
    bg: 'bg-josun-green',
    bgSoft: 'bg-josun-green/15',
    text: 'text-josun-green',
    border: 'border-josun-green',
  },
  teal: {
    bg: 'bg-josun-teal',
    bgSoft: 'bg-josun-teal/15',
    text: 'text-josun-teal',
    border: 'border-josun-teal',
  },
  sky: {
    bg: 'bg-josun-sky',
    bgSoft: 'bg-josun-sky/15',
    text: 'text-josun-sky',
    border: 'border-josun-sky',
  },
  blue: {
    bg: 'bg-josun-blue',
    bgSoft: 'bg-josun-blue/15',
    text: 'text-josun-blue',
    border: 'border-josun-blue',
  },
  indigo: {
    bg: 'bg-josun-indigo',
    bgSoft: 'bg-josun-indigo/15',
    text: 'text-josun-indigo',
    border: 'border-josun-indigo',
  },
};
