import { redirect } from 'next/navigation';

export default function HomePage() {
  // Redirect to the admin dashboard
  redirect('/admin');
}