import React from "react";

const BoardContainer = ({ columns }) => {
  return (
    <div className="p-6 grid gap-10 grid-cols-[repeat(auto-fill,280px)]">
      {columns.map(column => (
        <div key={column.id}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-[15px] h-[15px] bg-green-400 rounded-full"></div>
            <h4 className="text-[var(--clr-400)] text-sm uppercase">
              {column.name} ({column.tasks.length})
            </h4>
          </div>
          <div className="space-y-5">
            {column.tasks.map(task => (
              <div
                key={task.id}
                className="bg-white py-[23px] px-4 rounded-lg shadow-[0px_4px_6px_0px_rgba(54,78,126,0.10)]"
              >
                <h2 className="text-[var(--clr-900)] text-[15px]">
                  {task.name}
                </h2>
                <span className="text-[var(--clr-400)] text-[12px]">
                  {task.subtasks.reduce((acc, el) => {
                    return acc + el.completed ? 1 : 0;
                  }, 0)}
                  of {task.subtasks.length} substasks
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BoardContainer;
