import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { generateId, formatDateISO, calculateCompletionRate } from '../utils/helpers';

describe('generateId', () => {
  it('returns a non-empty string', () => {
    const id = generateId();
    expect(typeof id).toBe('string');
    expect(id.length).toBeGreaterThan(0);
  });

  it('returns unique values on successive calls', () => {
    const id1 = generateId();
    const id2 = generateId();
    expect(id1).not.toBe(id2);
  });
});

describe('formatDateISO', () => {
  it('formats a date to ISO 8601 string', () => {
    const date = new Date('2024-10-12T08:00:00.000Z');
    const result = formatDateISO(date);
    expect(result).toBe('2024-10-12T08:00:00.000Z');
  });

  it('handles current date', () => {
    const now = new Date();
    const result = formatDateISO(now);
    expect(result).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/);
  });
});

describe('calculateCompletionRate', () => {
  it('returns 0 when total is 0', () => {
    expect(calculateCompletionRate(0, 0)).toBe(0);
    expect(calculateCompletionRate(5, 0)).toBe(0);
  });

  it('returns 0 when total is negative', () => {
    expect(calculateCompletionRate(5, -1)).toBe(0);
  });

  it('calculates correct percentage', () => {
    expect(calculateCompletionRate(5, 10)).toBe(50);
    expect(calculateCompletionRate(8, 8)).toBe(100);
    expect(calculateCompletionRate(1, 3)).toBe(33);
    expect(calculateCompletionRate(2, 3)).toBe(67);
  });

  it('rounds to nearest integer', () => {
    expect(calculateCompletionRate(1, 2)).toBe(50);
    expect(calculateCompletionRate(1, 6)).toBe(17);
  });
});
