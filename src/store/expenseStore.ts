import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Define the Expense item interface
export interface Expense {
  id: string;
  date: Date;
  amount: number;
  description: string;
  category: string;
}

// Define the store state interface with CRUD operations
interface ExpenseState {
  expenses: Expense[];
  
  // CRUD operations
  addExpense: (expense: Omit<Expense, 'id'>) => void;
  updateExpense: (id: string, updatedExpense: Partial<Omit<Expense, 'id'>>) => void;
  deleteExpense: (id: string) => void;
  getExpenseById: (id: string) => Expense | undefined;
  getTotalExpenses: () => number;
  getExpensesByCategory: () => Record<string, number>;
}

// Create the store with persistence
export const useExpenseStore = create<ExpenseState>()(
  persist(
    (set, get) => ({
      expenses: [],
      
      // Add a new expense
      addExpense: (expense) => set((state) => ({
        expenses: [
          ...state.expenses,
          { ...expense, id: crypto.randomUUID() }
        ]
      })),
      
      // Update an existing expense
      updateExpense: (id, updatedExpense) => set((state) => ({
        expenses: state.expenses.map((expense) => 
          expense.id === id 
            ? { ...expense, ...updatedExpense } 
            : expense
        )
      })),
      
      // Delete an expense
      deleteExpense: (id) => set((state) => ({
        expenses: state.expenses.filter((expense) => expense.id !== id)
      })),
      
      // Get a specific expense by ID
      getExpenseById: (id) => {
        return get().expenses.find((expense) => expense.id === id);
      },
      
      // Calculate total expenses
      getTotalExpenses: () => {
        return get().expenses.reduce((total, expense) => total + expense.amount, 0);
      },
      
      // Get expenses grouped by category
      getExpensesByCategory: () => {
        return get().expenses.reduce((categories, expense) => {
          const category = expense.category;
          if (!categories[category]) {
            categories[category] = 0;
          }
          categories[category] += expense.amount;
          return categories;
        }, {} as Record<string, number>);
      }
    }),
    {
      name: 'expense-store', // name for the storage key
    }
  )
);

