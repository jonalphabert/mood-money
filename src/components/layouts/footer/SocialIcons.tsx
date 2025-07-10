const SocialIcons = () => (
    <div className="mt-4 flex space-x-4">
      {[
        { icon: "fab fa-facebook-f", label: "Facebook", href: "https://www.facebook.com" },
        { icon: "fab fa-twitter", label: "Twitter", href: "https://www.twitter.com" },
        { icon: "fab fa-instagram", label: "Instagram", href: "https://www.instagram.com" },
        { icon: "fab fa-linkedin-in", label: "LinkedIn", href: "https://www.linkedin.com" },
      ].map((social) => (
        <a 
          key={social.label}
          href={social.href}
          aria-label={social.label}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <i className={`${social.icon} text-xl`}></i>
        </a>
      ))}
    </div>
  );

  export default SocialIcons;