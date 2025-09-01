export interface FetchType {
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string | null;
    message: string | null;
}

export const fetchObject: FetchType = {
    loading: 'idle',
    error: null,
    message: null,
}