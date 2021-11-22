export enum StickyColor{
    PINK="pink",
    BLUE="blue",
    YELLOW="yellow",
    GREEN="green",
    GRAY="gray",
    PURPLE="purple"
}

export interface stickyInterface {
    id: number;
    text: string;
    color: StickyColor;
    modified: number;
}