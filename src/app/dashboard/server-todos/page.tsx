export const dynamic = 'force-dynamic';
export const revalidate = 0;

import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";


export const metadata = {
 title: 'Listado de Todos',
 description: 'Listado de Todos',
};

export default async function ServerTodoPage() {

  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc'}});



  return (
    <div>
      <h1>Hello ServerTodoPage</h1>
       <div className="w-full px-3 mx-5 mb-5">
          <NewTodo />
        </div>
        
        <TodosGrid todos={ todos } />
    </div>
  );
}