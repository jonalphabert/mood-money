import Footer from "@/components/layouts/footer/Footer";
import { MoveUp } from "lucide-react";

export default function Home() {
  return (
    <div className="font-sans bg-gradient-to-br from-white to-comfy min-h-screen relative">
    {/* // Navigation  */}
    <nav className="bg-white shadow-sm sticky py-4 top-0 z-[999]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="flex items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <div className="bg-primary p-2 rounded-lg">
                            <i className="fas fa-smile text-white text-2xl"></i>
                        </div>
                        <span className="ml-3 text-2xl font-bold text-gray-800">Mood Money</span>
                    </div>
                </div>
                <div className="hidden md:flex items-center space-x-4">
                    <a href="#" className="text-gray-600 hover:text-primary px-3 py-2 font-medium">Features</a>
                    <a href="#" className="text-gray-600 hover:text-primary px-3 py-2 font-medium">Testimonials</a>
                    <a href="#" className="text-gray-600 hover:text-primary px-3 py-2 font-medium">Pricing</a>
                </div>
                <div className="flex items-center">
                    <a href="#" className="text-primary hover:text-secondary px-4 py-2 font-medium">Login</a>
                    <a href="#" className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-lg font-medium transition duration-300">Get Started</a>
                </div>
            </div>
        </div>
    </nav>

    {/* // Hero Section  */}
    <section id="hero" className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-10 md:mb-0">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Manage Your Money<br/>
                        <span className="text-primary">with Mood</span> 😊
                    </h1>
                    <p className="mt-4 text-xl text-gray-600 max-w-lg">
                        Track expenses, set budgets, and see your financial health through fun emoticons. 
                        Stay calm and comfy while taking control of your finances.
                    </p>
                    <div className="mt-8">
                        <a href="#" className="inline-block bg-primary hover:bg-secondary text-white px-8 py-4 rounded-lg font-medium text-lg shadow-lg transform hover:scale-105 transition duration-300">
                            Start Tracking Now
                        </a>
                    </div>
                    <div className="mt-8 flex space-x-4">
                        <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-success flex items-center justify-center">
                                <span className="text-white text-xl">😊</span>
                            </div>
                            <p className="ml-2 text-gray-600">Good Finance</p>
                        </div>
                        <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-warning flex items-center justify-center">
                                <span className="text-white text-xl">😐</span>
                            </div>
                            <p className="ml-2 text-gray-600">Needs Work</p>
                        </div>
                        <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-danger flex items-center justify-center">
                                <span className="text-white text-xl">😟</span>
                            </div>
                            <p className="ml-2 text-gray-600">Requires Action</p>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <div className="relative">
                        <div className="bg-white rounded-2xl shadow-xl p-6 w-80 h-80 relative z-10">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="font-bold text-lg">June Budget</h3>
                                <span className="text-3xl">😊</span>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span>Groceries</span>
                                    <div className="w-24 h-3 bg-gray-200 rounded-full">
                                        <div className="h-3 bg-green-400 rounded-full w-3/4" ></div>
                                    </div>
                                    <span className="text-green-400">$150/$200</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span>Entertainment</span>
                                    <div className="w-24 h-3 bg-gray-200 rounded-full">
                                        <div className="h-3 bg-yellow-400 rounded-full w-[90%]"></div>
                                    </div>
                                    <span className="text-yellow-400">$90/$100</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span>Dining Out</span>
                                    <div className="w-24 h-3 bg-gray-200 rounded-full">
                                        <div className="h-3 bg-red-400 rounded-full w-full"></div>
                                    </div>
                                    <span className="text-red-400">$120/$100</span>
                                </div>
                            </div>
                            <div className="mt-8 pt-4 border-t border-gray-200">
                                <div className="flex justify-between">
                                    <span className="font-bold">Total Expenses:</span>
                                    <span className="font-bold">$1,250</span>
                                </div>
                                <div className="flex justify-between mt-2">
                                    <span>Monthly Budget:</span>
                                    <span>$2,000</span>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-secondary rounded-2xl w-80 h-80"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* // Features Section  */}
    <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Calm & Comfy Finance Features</h2>
                <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                    Emotionally intelligent features to help you manage money without stress
                </p>
            </div>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* // Feature 1  */}
                <div className="bg-gradient-to-br from-white to-comfy rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                        <i className="fas fa-money-bill-wave text-white text-2xl"></i>
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-gray-900">Expense Tracking</h3>
                    <p className="mt-2 text-gray-600">
                        Easily record expenses and income with intuitive categories. Get a clear view of where your money goes.
                    </p>
                    <div className="mt-4">
                        <span className="text-3xl">📊</span>
                    </div>
                </div>
                
                {/* // Feature 2  */}
                <div className="bg-gradient-to-br from-white to-comfy rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                        <i className="fas fa-chart-pie text-white text-2xl"></i>
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-gray-900">Mood Budgeting</h3>
                    <p className="mt-2 text-gray-600">
                        Set monthly budgets and track your progress with our unique emoticon feedback system.
                    </p>
                    <div className="mt-4 flex space-x-2">
                        <span className="text-3xl">😊</span>
                        <span className="text-3xl">😐</span>
                        <span className="text-3xl">😟</span>
                    </div>
                </div>
                
                {/* // Feature 3  */}
                <div className="bg-gradient-to-br from-white to-comfy rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                        <i className="fas fa-bell text-white text-2xl"></i>
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-gray-900">Gentle Reminders</h3>
                    <p className="mt-2 text-gray-600">
                        Receive friendly notifications when you&apos;re approaching budget limits. No stressful alarms!
                    </p>
                    <div className="mt-4">
                        <span className="text-3xl">🔔</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* // Testimonials  */}
    <section className="py-16 bg-gradient-to-br from-calm to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white">What Users Are Saying</h2>
                <p className="mt-4 text-xl text-white max-w-2xl mx-auto">
                    Discover how Mood Money is transforming financial management
                </p>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* // Testimonial 1  */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                            <span className="text-white text-xl">😊</span>
                        </div>
                        <div className="ml-4">
                            <h4 className="font-bold text-gray-900">Alex Johnson</h4>
                            <p className="text-gray-600">Teacher</p>
                        </div>
                    </div>
                    <p className="mt-4 text-gray-600 italic">
                        &quot;I used to dread checking my finances. Now with Mood Money, I actually look forward to seeing my budget update! The emoticons make it so much less stressful.&quot;
                    </p>
                    <div className="mt-4 flex text-yellow-400">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                </div>
                
                {/* // Testimonial 2  */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                            <span className="text-white text-xl">😐</span>
                        </div>
                        <div className="ml-4">
                            <h4 className="font-bold text-gray-900">Sarah Kim</h4>
                            <p className="text-gray-600">Freelancer</p>
                        </div>
                    </div>
                    <p className="mt-4 text-gray-600 italic">
                        &quot;The mood system helped me realize when I was overspending without making me feel guilty. It&apos;s like having a friendly financial coach!&quot;
                    </p>
                    <div className="mt-4 flex text-yellow-400">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>
                
                {/* // Testimonial 3  */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                            <span className="text-white text-xl">😟</span>
                        </div>
                        <div className="ml-4">
                            <h4 className="font-bold text-gray-900">Michael Torres</h4>
                            <p className="text-gray-600">Startup Founder</p>
                        </div>
                    </div>
                    <p className="mt-4 text-gray-600 italic">
                        &quot;From 😟 to 😊 in just three months! Mood Money helped me turn my finances around with its simple, visual approach. Best financial app I&apos;ve ever used.&quot;
                    </p>
                    <div className="mt-4 flex text-yellow-400">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* // CTA Section  */}
    <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Ready to Transform Your Financial Mood?</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                Join thousands of users who are managing their money with less stress and more smiles
            </p>
            <div className="mt-8">
                <a href="#" className="inline-block bg-primary hover:bg-secondary text-white px-8 py-4 rounded-lg font-medium text-lg shadow-lg transform hover:scale-105 transition duration-300">
                    Get Started for Free
                </a>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-100 p-4 rounded-lg">
                    <span className="text-4xl">😊</span>
                    <p className="mt-2 font-medium">Calm Experience</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                    <span className="text-4xl">🔒</span>
                    <p className="mt-2 font-medium">Secure</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                    <span className="text-4xl">💸</span>
                    <p className="mt-2 font-medium">Save Money</p>
                </div>
            </div>
        </div>
    </section>

    {/* // Footer  */}
    <Footer />

    {/* // Floating Action Button  */}
    <div className="fixed bottom-6 right-6">
        <a href="#hero" className="w-14 h-14 rounded-full bg-primary hover:bg-secondary shadow-lg flex items-center justify-center text-white text-2xl">
          <MoveUp />
        </a>
    </div>
</div>
  );
}
