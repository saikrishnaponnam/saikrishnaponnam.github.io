export function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sai Krishna Ponnam. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
