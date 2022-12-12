
import useCounter from '../Hooks/useCounter';
import { renderHook, act } from '@testing-library/react-hooks';

it(`Calling increment should increase the value of count by 1`, () => {
    const { result } = renderHook(() => useCounter(100));

    act(() => result.current.increment());

    expect(result.current.count).toBe(101);
});