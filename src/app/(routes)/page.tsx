import { greet } from '@/lib/greet';
import { Button } from '@/components/ui/button';

/**
 * Landing page route.
 */
export default function Home() {
  const message = greet('developer');
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-2xl font-bold">{message} 🎉</h1>
      <Button>Click me</Button>
    </main>
  );
}
