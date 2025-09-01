import { useDispatch, type TypedUseSelectorHook } from "react-redux";
import type { AppDispatch, RootState } from "./store";
import { useSelector } from "react-redux";

export const UseAppDispatch: () => AppDispatch = useDispatch;
export const UseAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function getHoursSinceEpochTimestamp(epochTimestampInSeconds: number) {
    // Get current time in milliseconds since epoch
    const currentTimeMillis = Date.now();

    // Convert the given epoch timestamp (in seconds) to milliseconds
    const givenTimeMillis = epochTimestampInSeconds * 1000;

    // Calculate the difference in milliseconds
    const timeDifferenceMillis = currentTimeMillis - givenTimeMillis;

    // Convert the difference to hours
    const hoursSinceTimestamp = timeDifferenceMillis / (1000 * 60 * 60);

    return `${Math.floor(hoursSinceTimestamp)} hours ago `;
}