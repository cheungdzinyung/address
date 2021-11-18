import { renderHook, cleanup, act } from "@testing-library/react-hooks";
import { useFetch } from "./UseFetch";

describe("useFetch", () => {
  afterEach(() => {
    jest.resetAllMocks();
    cleanup();
  });

  it("should return data", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({ test: "1" }),
      })
    );

    const { result, waitForNextUpdate } = renderHook(() => useFetch("test"));

    await waitForNextUpdate(); // used so that will change the state for loading in order to run next set of codes

    expect(result.current.data).toMatchObject({ test: "1" });
    expect(result.current.isLoading).toBe(false);
    expect(result.current.hasError).toBe(false);
  });

  it("should have error", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.reject({ message: "error" }),
      })
    );

    const { result, waitForNextUpdate } = renderHook(() => useFetch("test"));

    await waitForNextUpdate();

    expect(result.current.data).toBe(null);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.hasError).toBe(true);
  });

  it("should be in loading state", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() => {
      Promise.resolve({
        json: () => Promise.resolve({ test: "1" }),
      });
    });

    const { result, waitForNextUpdate } = renderHook(() => useFetch("test"));

    act(() => {
      // not wait for state change to do something
      expect(result.current.data).toBe(null);
      expect(result.current.isLoading).toBe(true);
      expect(result.current.hasError).toBe(false);
    });

    await waitForNextUpdate(); // wait for the rest fo the function to finish or else will warning
  });
});
