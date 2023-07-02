'use client';

// this directive should be at top of the file, before any imports.

// This is a Client Component
export default function NewLayout({ children }) {
  return (
    <div>
      <div>Заголовок</div>
      {children}
    </div>
  );
}
