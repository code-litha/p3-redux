# REDUX MIDDLEWARE

## Table of Content

- use combineReducers
- middleware in redux
- create redux middleware
- use `redux-thunk` middleware

## Recap

- store => tempat menyimpan statenya. berupa object.
- reducer => berupa function yang menerima 2 parameter berupa state dan action, yang didalamnya beberapa kondisi untuk menjalankan action type nya yang mengembalikan sebuah state baru.
- action => suatu object yang mempunyai key `type` dan `payload` yang dapat kita pakai di reducer. untuk menandai action apa dan data yang mau kita kirim ke reducer.
- pure function => function yang mengembalikan nilai yang sama berdasarkan pada argumen yang diberikan. yang bukan pure function => async, Math.random()
- hooks => useDispatch() dan useSelector(). useSelector => untuk ambil state. useDispatch() => untuk mengirimkan action supaya bisa masuk / diolah ke reducer

## References

- [combineReduces](https://redux.js.org/api/combinereducers)
- [middleware](https://redux.js.org/understanding/history-and-design/middleware)
- [applyMiddleware](https://redux.js.org/api/applymiddleware)
- [redux-thunk](https://github.com/reduxjs/redux-thunk)
- [Challenge](https://docs.google.com/document/d/1BgInQ3VYIHssaAzroaHhyFvzDcnmutlYoZgsUE6qec0/edit)
