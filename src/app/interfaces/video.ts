export interface VideoList {
    id: string,
    name: string,
    thumbnailLink: string,
    size: string,
    videoMediaMetadata: {
        width: number,
        height: number,
        durationMillis: string
    }
}