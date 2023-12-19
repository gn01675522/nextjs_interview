// 為避免最後 api 散落在 component 或 page 當中
// 所以直接開一個檔案在這邊做統整，並透過 export 來提供其他元件使用

// 使用者登入所以使用的 API
export const apiUserLogin = (id: number) =>
  `https://jsonplaceholder.typicode.com/users/${id}`;

// 取得使用者相簿列表的 api
export const apiUserAlbumList = (id: number) =>
  `https://jsonplaceholder.typicode.com/users/${id}/albums`;

// 取得相簿裡面全部照片的 api
export const apiUserAlbumDetail = (id: number) =>
  `https://jsonplaceholder.typicode.com/albums/${id}/photos`;
