import { debounce } from '../utils/functions';

describe('debounce', () => {
  test('returns debounce function', () => {
    const debounceResponse = debounce();
    expect(typeof debounceResponse).toBe('function');
  });
});
