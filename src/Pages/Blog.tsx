function Blog() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <h1 className="text-5xl font-extrabold mb-4 text-cyan-400 animate-fadeIn">
        Blog
      </h1>
      <p className="text-lg text-gray-300 mb-6 animate-fadeIn delay-200">
        Coming soon… Stay tuned for updates!
      </p>
      <div className="mt-4 animate-fadeIn delay-400">
        {/* Optional illustration or icon */}
        <svg
          className="w-20 h-20 text-cyan-400 mx-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m7-7v14"
          />
        </svg>
      </div>
    </div>
  );
}

export default Blog;
