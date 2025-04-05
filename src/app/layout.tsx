import Navbar from '@/components/Navbar';
import './Tailwind.css';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='min-h-screen flex flex-col'>
        <Navbar/>
        <main className='flex-1 bg-cyan-700 w-full'>{children}</main>
        <footer className='h-[10vh] bg-cyan-500'></footer>
      </body>
    </html>
  );
}
