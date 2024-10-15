import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { createClient } from '@supabase/supabase-js';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';

import App from './App.tsx';
import './index.css';

// ? Helpers
import { getEnvVariables } from './helpers/getEnvVariables.ts';
import EnvErrorView from './modules/global/views/EnvErrorView.tsx';

const [{ SUPABASE_URL, ANON_PUBLIC }, { hasError, missingVariables }] =
  getEnvVariables();

const supabaseClient = createClient(SUPABASE_URL, ANON_PUBLIC);

if (missingVariables.length > 0) {
  // eslint-disable-next-line no-console
  console.error('::Warning, missing env variables:', missingVariables);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {hasError ? (
      <EnvErrorView />
    ) : (
      <SessionContextProvider supabaseClient={supabaseClient}>
        <Provider store={store}>
          <App />
        </Provider>
      </SessionContextProvider>
    )}
  </StrictMode>
);
