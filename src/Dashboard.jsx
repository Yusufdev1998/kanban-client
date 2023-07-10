"use client";

import { useEffect, useState } from "react";
import BasicModal from "./components/BasicModal";
import BasicSidebar from "./components/BasicSidebar";
import Content from "./components/Content";
import { getBoards, getColumns } from "./utils/request";
import { useParams } from "react-router-dom";

export default function Dashboard() {
  const [modal, setModal] = useState(false);
  const [boards, setBoards] = useState([]);

  const [columns, setColumns] = useState([]);
  const params = useParams();
  const boardId = params.id;

  useEffect(() => {
    getInitBoards();
  }, []);

  useEffect(() => {
    if (boardId) {
      getColumnsData();
    }
  }, [boardId]);

  const getColumnsData = async () => {
    try {
      const data = await getColumns(boardId);
      setColumns(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(columns);

  const getInitBoards = async () => {
    try {
      const data = await getBoards();
      setBoards(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="bg-[var(--clr-200)] dark:bg-[var(--clr-800)] h-full">
        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>

        <aside
          id="default-sidebar"
          className="fixed top-0 left-0 z-40 w-[300px] h-screen transition-transform  -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <BasicSidebar boards={boards} setModal={setModal}></BasicSidebar>
        </aside>

        <div className="sm:ml-[300px]">
          <Content columns={columns}></Content>
        </div>
      </div>
      <BasicModal
        setModal={setModal}
        setBoards={setBoards}
        modal={modal}
      ></BasicModal>
    </>
  );
}