export interface Post {
    id: string;
    loading: boolean;
    text: string;
    votes: number;
    error?: string;
}