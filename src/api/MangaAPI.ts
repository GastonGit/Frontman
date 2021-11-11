// interface MiniManga {
//     URL: string; // URL to the Manga
//     thumbnail: string; // URl to the mangas thumbnail
// }
//
// interface Manga {
//     // Each manga should only be fetched once
//     title: string; // eg. Berserk Chapter 1
//     author: string;
//     pages: Array<string>; // URLs to images (sorted)
//     tags: Array<string>; // Many-to-many
//     date_added: number;
//
//     collection: string; // eg. Berserk
//     story: string; // eg. Berserk Prototype (lives in conjunction with chapter)
//     chapter: number | null; //
// }

export default class MangaAPI {
    public static SERVER_URL = process.env.REACT_APP_SERVER_URL;
}
