import { Send } from "lucide-react";

const NewsletterForm = () => (
    <div className="mt-6">
      <p className="text-gray-400">Subscribe to our newsletter</p>
      <form className="mt-2 flex">
        <input 
          type="email" 
          placeholder="Your email" 
          className="px-4 py-2 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-primary outline outline-primary text-gray-200"
          aria-label="Email for newsletter"
        />
        <button 
          type="submit"
          className="bg-primary hover:bg-primary-dark px-4 py-2 rounded-r-lg transition-colors outline outline-primary"
          aria-label="Subscribe"
        >
        <Send />
        </button>
      </form>
    </div>
  );

  export default NewsletterForm;