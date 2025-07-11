import ExpenseForm from "@/components/ExpenseForm";
import ExpenseList from "@/components/ExpenseList";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto py-6">
          <h1 className="text-3xl font-bold">Expense Tracker</h1>
          <p className="text-muted-foreground">Track and manage your expenses efficiently</p>
        </div>
      </header>
      
      <main className="container mx-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Expense Form - Takes 4 columns on large screens */}
          <div className="lg:col-span-4 space-y-6">
            <ExpenseForm />
          </div>
          
          {/* Expense List - Takes 8 columns on large screens */}
          <div className="lg:col-span-8">
            <ExpenseList />
          </div>
        </div>
      </main>
      
      <footer className="border-t mt-auto">
        <div className="container mx-auto py-6 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Expense Tracker. Built with Next.js, Tailwind CSS, shadcn/ui and Zustand.</p>
        </div>
      </footer>
    </div>
  );
}
