export default function Footer() {
  return (
    <footer className="py-6 border-t border-gray-200 dark:border-neutral-700 dark:bg-neutral-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm dark:text-gray-300">
            &copy; {new Date().getFullYear()} Shakti Tamrakar. All rights
            reserved.
          </p>
          <p className="text-gray-600 text-sm mt-2 md:mt-0 dark:text-gray-300">
            Designed & Built with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
