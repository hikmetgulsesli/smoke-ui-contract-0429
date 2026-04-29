import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useLocalStorage } from '../hooks/useLocalStorage';

describe('useLocalStorage', () => {
  const getItemSpy = vi.spyOn(Storage.prototype, 'getItem');
  const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');

  beforeEach(() => {
    window.localStorage.clear();
    getItemSpy.mockClear();
    setItemSpy.mockClear();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('returns initial value when localStorage is empty', () => {
    const { result } = renderHook(() => useLocalStorage('test-key', 'default'));
    expect(result.current[0]).toBe('default');
  });

  it('reads existing value from localStorage', () => {
    window.localStorage.setItem('test-key', JSON.stringify('stored'));
    const { result } = renderHook(() => useLocalStorage('test-key', 'default'));
    expect(result.current[0]).toBe('stored');
  });

  it('updates value and persists to localStorage', () => {
    const { result } = renderHook(() => useLocalStorage('test-key', 0));
    act(() => {
      result.current[1](42);
    });
    expect(result.current[0]).toBe(42);
    expect(window.localStorage.getItem('test-key')).toBe('42');
  });

  it('supports functional updates', () => {
    window.localStorage.setItem('counter', JSON.stringify(5));
    const { result } = renderHook(() => useLocalStorage('counter', 0));
    act(() => {
      result.current[1]((prev) => prev + 1);
    });
    expect(result.current[0]).toBe(6);
    expect(window.localStorage.getItem('counter')).toBe('6');
  });

  it('handles objects', () => {
    const { result } = renderHook(() => useLocalStorage<{ a: number; b?: number }>('obj', { a: 1 }));
    act(() => {
      result.current[1]({ a: 2, b: 3 });
    });
    expect(result.current[0]).toEqual({ a: 2, b: 3 });
    expect(JSON.parse(window.localStorage.getItem('obj')!)).toEqual({ a: 2, b: 3 });
  });

  it('handles localStorage read errors gracefully', () => {
    getItemSpy.mockImplementation(() => {
      throw new Error('Storage disabled');
    });
    const { result } = renderHook(() => useLocalStorage('bad-key', 'fallback'));
    expect(result.current[0]).toBe('fallback');
  });
});
