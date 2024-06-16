import { cn, deleteFromStateArray } from "./utils";
import * as clsx from "clsx";
import tailwindMerge from "tailwind-merge";

jest.mock("clsx");
jest.mock("tailwind-merge");

describe("#cn", () => {
    it("should call clsx and twMerge once", () => {
        const mockedTailwindMerge = jest
            .spyOn(tailwindMerge, "twMerge")
            .mockImplementation();
        const returnSignal = "clsx returned this";
        const mockedClsx = jest
            .spyOn(clsx, "clsx")
            .mockReturnValue(returnSignal);
        const inputs = "test";
        cn(inputs);

        expect(mockedClsx).toHaveBeenNthCalledWith(1, [inputs]);
        expect(mockedTailwindMerge).toHaveBeenNthCalledWith(1, returnSignal);
    });
});

describe("#deleteFromStateArray", () => {
    it("should call setItems", () => {
        const previousState = [1, 2, 3];
        const expectedState = [1, 3];
        const setItems = jest
            .fn()
            .mockImplementation((cb) => cb(previousState));
        deleteFromStateArray(setItems, 1);
        expect(setItems).toHaveReturnedWith(expectedState);
    });
});
