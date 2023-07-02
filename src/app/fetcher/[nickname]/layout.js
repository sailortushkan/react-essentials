import NewLayout from './NewLayout';

// This is a Server Component
export default function Layout({ children }) {
  return (
    <>
      <NewLayout>{children}</NewLayout>
    </>
  );
}
