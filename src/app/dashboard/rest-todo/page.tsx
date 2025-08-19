import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";


export const metadata = {
 title: 'Listado de Todos',
 description: 'Listado de Todos',
};

export default async function RestToDoPage() {

  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc'}});



  return (
    <div>
      <h1>Hello RestToDoPage</h1>
       <div className="w-full px-3 mx-5 mb-5">
          <NewTodo />
        </div>
        
        <TodosGrid todos={ todos } />
    </div>
  );
}