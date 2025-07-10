const FooterCopyright = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {currentYear} Mood Money. All rights reserved. Designed with ❤️ and 😊</p>
        </div>
    );
}

export default FooterCopyright;