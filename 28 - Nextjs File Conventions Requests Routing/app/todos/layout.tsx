import { Suspense } from "react";
import TodoList from "@/app/todos/TodoList";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex" }}>
      <Suspense fallback={<p>Loading...</p>}>
        {/* @ts-ignore */}
        <TodoList />
      </Suspense>
      <div>{children}</div>
    </div>
  );
}
