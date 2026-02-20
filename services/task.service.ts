


/*let tasks: Task[] = getFromStorage() ?? [...mockTasks]

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}*/

import { supabase } from "@/lib/supabase"

export async function getTasks(): Promise<Task[]> {
  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Erro ao buscar tarefas:", error)
    return []
  }

  return data as Task[]
}

export async function createTask(title: string): Promise<Task> {
  await delay(500)

  const newTask: Task = {
    id: crypto.randomUUID(),
    title,
    completed: false,
    createdAt: Date.now(),
  }

  tasks.unshift(newTask)
  return newTask
}

export async function toggleTask(id: string): Promise<void> {
  await delay(500)

  tasks = tasks.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task
  )
  
}

export async function deleteTask(id: string): Promise<void> {
  await delay(500)

  tasks = tasks.filter((task) => task.id !== id)
  
} 