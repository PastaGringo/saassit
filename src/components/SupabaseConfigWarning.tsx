import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

export const SupabaseConfigWarning = () => {
  const missingEnvVars = [];
  
  if (!import.meta.env.VITE_SUPABASE_URL) {
    missingEnvVars.push('VITE_SUPABASE_URL');
  }
  
  if (!import.meta.env.VITE_SUPABASE_ANON_KEY) {
    missingEnvVars.push('VITE_SUPABASE_ANON_KEY');
  }

  if (missingEnvVars.length === 0) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm z-50">
      <Alert variant="destructive" className="max-w-lg bg-zinc-900 border-2 border-red-500 text-white">
        <ExclamationTriangleIcon className="h-6 w-6 text-red-500" />
        <AlertTitle className="text-xl text-red-500 font-bold">Missing Supabase Configuration</AlertTitle>
        <AlertDescription className="mt-4">
          <p className="mb-4">
            Please set up your Supabase environment variables. The following variables are missing:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-red-400 font-medium">
            {missingEnvVars.map((envVar) => (
              <li key={envVar}>{envVar}</li>
            ))}
          </ul>
          <div className="mt-6 text-sm">
            <p className="font-semibold text-red-300">How to fix this:</p>
            <ol className="list-decimal pl-6 mt-2 space-y-2">
              <li>Create a <code className="bg-red-500/20 px-1 py-0.5 rounded text-red-300">.env</code> file in the root of your project</li>
              <li>Copy the contents from <code className="bg-red-500/20 px-1 py-0.5 rounded text-red-300">.env.example</code></li>
              <li>Replace the placeholder values with your actual Supabase credentials</li>
              <li>Restart the development server</li>
            </ol>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
};
