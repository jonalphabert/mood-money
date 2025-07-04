"use client";

import { useState } from "react";
import { Expense, useExpenseStore } from "@/store/expenseStore";
import { format } from "date-fns";
import { Edit2, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function ExpenseList() {
  const { expenses, deleteExpense, getTotalExpenses, getExpensesByCategory } = useExpenseStore();
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState<Expense | null>(null);

  // Format amount as currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  // Get total expenses
  const totalExpenses = getTotalExpenses();
  
  // Get expenses by category
  const expensesByCategory = getExpensesByCategory();

  // Handle delete confirmation
  const handleDeleteClick = (expense: Expense) => {
    setSelectedExpense(expense);
    setDeleteConfirmOpen(true);
  };

  const confirmDelete = () => {
    if (selectedExpense) {
      deleteExpense(selectedExpense.id);
      setDeleteConfirmOpen(false);
    }
  };

  return (
    <div className="w-full space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
        <h2 className="text-2xl font-bold">Your Expenses</h2>
        <div className="p-4 bg-primary/10 rounded-lg">
          <p className="text-sm font-medium">Total Spent</p>
          <p className="text-2xl font-bold">{formatCurrency(totalExpenses)}</p>
        </div>
      </div>

      {/* Category summary */}
      {Object.keys(expensesByCategory).length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Expenses by Category</CardTitle>
            <CardDescription>Breakdown of your spending by category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {Object.entries(expensesByCategory).map(([category, amount]) => (
                <div key={category} className="flex justify-between items-center">
                  <span className="font-medium">{category}</span>
                  <span>{formatCurrency(amount)}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Expense list */}
      {expenses.length === 0 ? (
        <div className="text-center p-8 bg-muted/50 rounded-lg">
          <p className="text-muted-foreground">No expenses yet. Add your first expense!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {expenses.map((expense) => (
            <Card key={expense.id}>
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <CardTitle>{expense.description}</CardTitle>
                  <span className="text-xl font-bold">{formatCurrency(expense.amount)}</span>
                </div>
                <CardDescription>
                  {format(expense.date, "PPP")} • {expense.category}
                </CardDescription>
              </CardHeader>
              <Separator />
              <CardFooter className="pt-4 flex justify-end gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Edit2 className="h-4 w-4" />
                  Edit
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  className="flex items-center gap-1"
                  onClick={() => handleDeleteClick(expense)}
                >
                  <Trash2 className="h-4 w-4" />
                  Delete
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      {/* Delete confirmation dialog */}
      <Dialog open={deleteConfirmOpen} onOpenChange={setDeleteConfirmOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this expense? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteConfirmOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

