const NewsletterForm = () => (
    <div className="mt-6">
      <p className="text-gray-400">Subscribe to our newsletter</p>
      <form className="mt-2 flex">
        <input 
          type="email" 
          placeholder="Your email" 
          className="px-4 py-2 rounded-l-lg w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Email for newsletter"
        />
        <button 
          type="submit"
          className="bg-primary hover:bg-primary-dark px-4 py-2 rounded-r-lg transition-colors"
          aria-label="Subscribe"
        >
          <i className="fas fa-paper-plane"></i>
        </button>
      </form>
    </div>
  );

  export default NewsletterForm;