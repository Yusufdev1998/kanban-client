import axios from "axios";
import BaseUrl from "./BaseUrl";
export async function createBoard(board) {
  const res = await axios({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidHlwZSI6IlNVUEVSX0FETUlOIiwiaWF0IjoxNjg4OTg4OTU2LCJleHAiOjE2ODkwNzUzNTZ9.OBGNHhdUgtPz2mpl7K-mrUrucIGBDYxw2MHySR_-_js",
    },
    url: BaseUrl + "/boards",
    data: board,
  });
  return res.data;
}

export async function getBoards() {
  const res = await axios({
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidHlwZSI6IlNVUEVSX0FETUlOIiwiaWF0IjoxNjg4OTg4OTU2LCJleHAiOjE2ODkwNzUzNTZ9.OBGNHhdUgtPz2mpl7K-mrUrucIGBDYxw2MHySR_-_js",
    },
    url: BaseUrl + "/boards",
  });
  return res.data;
}

export async function getColumns(boardId) {
  const res = await axios({
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidHlwZSI6IlNVUEVSX0FETUlOIiwiaWF0IjoxNjg4OTg4OTU2LCJleHAiOjE2ODkwNzUzNTZ9.OBGNHhdUgtPz2mpl7K-mrUrucIGBDYxw2MHySR_-_js",
    },
    url: BaseUrl + "/boards/" + boardId,
  });
  return res.data;
}
