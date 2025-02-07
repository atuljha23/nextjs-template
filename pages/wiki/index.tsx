export default function Wiki(props: any) {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-primary">
          Next.js Template Wiki
        </h1>
        <p className="mt-4 text-lg">
          A comprehensive guide to the blank Next.js template.
        </p>
      </header>
      <section className="text-center max-w-2xl">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="mt-4">
          This template is configured with Next.js, TailwindCSS, and ShadCN UI,
          providing a solid foundation for building modern web applications.
        </p>
        <h2 className="text-2xl font-semibold mt-8">Features</h2>
        <ul className="list-disc list-inside mt-4">
          <li>Pre-configured with TailwindCSS for styling.</li>
          <li>Includes ShadCN UI components for rapid development.</li>
          <li>Supports Dark Mode for enhanced user experience.</li>
          <li>
            Easy to clone and start new projects without worrying about setup.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8">Getting Started</h2>
        <p className="mt-4">
          To get started, clone this repository and run the following commands:
        </p>
        <pre className="bg-gray-100 p-4 rounded mt-2">
          <code>{`npm install\nnpm run dev`}</code>
        </pre>
        <h2 className="text-2xl font-semibold mt-8">Conclusion</h2>
        <p className="mt-4">
          This template is designed to help developers quickly set up a new
          Next.js project with all the essential tools and configurations.
        </p>
      </section>
    </main>
  );
}
