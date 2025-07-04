"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { useExpenseStore } from "@/store/expenseStore";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

// Define the form schema with Zod
const formSchema = z.object({
  amount: z.coerce
    .number()
    .positive("Amount must be positive")
    .min(0.01, "Amount must be at least 0.01"),
  description: z
    .string()
    .min(3, "Description must be at least 3 characters")
    .max(100, "Description must be less than 100 characters"),
  category: z.string().min(1, "Please select a category"),
  date: z.string().min(1, "Please select a date"),
});

type FormValues = z.infer<typeof formSchema>;

// Categories for expenses
const categories = [
  "Food & Drinks",
  "Shopping",
  "Housing",
  "Transportation",
  "Entertainment",
  "Healthcare",
  "Education",
  "Other",
];

export default function ExpenseForm() {
  const { addExpense } = useExpenseStore();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: undefined,
      description: "",
      category: "",
      date: format(new Date(), "yyyy-MM-dd"),
    },
  });

  function onSubmit(values: FormValues) {
    addExpense({
      date: new Date(values.date),
      amount: values.amount,
      description: values.description,
      category: values.category,
    });
    
    form.reset();
  }

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-card rounded-xl border shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Add Expense</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Amount</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="What did you spend on?" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select 
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button type="submit" className="w-full">
            Add Expense
          </Button>
        </form>
      </Form>
    </div>
  );
}

