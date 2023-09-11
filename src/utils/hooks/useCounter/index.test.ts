import useCounter from "./index";
import { renderHook, act} from "@testing-library/react";
describe("useCounter 測試", () => {

    it("測試 useCounter 初始值", () => {
        const { result } = renderHook(() => useCounter());
        expect(result.current.count).toBe(0);
    });

    it("測試 useCounter 給定初始值10", () => {
        const { result } = renderHook(() => useCounter(10));
        expect(result.current.count).toBe(10);
    });

    it("測試 useCounter increment", () => {
        const { result } = renderHook(() => useCounter());
        act(() => {
            result.current.increment();
        });
        expect(result.current.count).toBe(1);
    });


    it("測試 useCounter decrement", () => {
        const { result } = renderHook(() => useCounter(10));
        act(() => {
            result.current.decrement();
        });
        expect(result.current.count).toBe(9);
    });

});





