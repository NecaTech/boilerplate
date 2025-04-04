import React from 'react';
import Link from 'next/link';
import Container from './Container';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

/**
 * Default layout component with header and footer
 */
export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-4 border-b border-black/[.08] dark:border-white/[.08]">
        <Container>
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl">My App</div>
            <nav>
              <ul className="flex space-x-4">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li><Link href="/about" className="hover:underline">About</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact</Link></li>
                <li><Link href="/preview" className="hover:underline">Preview</Link></li>
              </ul>
            </nav>
          </div>
        </Container>
      </header>

      <main className="flex-grow py-8">
        <Container>
          {children}
        </Container>
      </main>

      <footer className="py-6 border-t border-black/[.08] dark:border-white/[.08]">
        <Container>
          <div className="flex justify-between items-center">
            <div>© {new Date().getFullYear()} My App. All rights reserved.</div>
            <div className="flex space-x-4">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms of Service</a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default DefaultLayout;
