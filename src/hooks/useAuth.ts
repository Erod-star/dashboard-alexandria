/*
  This hook handles the authentication state of the user.
  It uses the Supabase client to interact with the authentication methods.
  It returns the user, session, and a method to sign out the user.

  Is a custom approach, maybe not needed since we are using 
  the `@supabase/auth-helpers-react` package, but I'll leave it here just in case. 😉
*/

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// ? Helpers
import { getEnvVariables } from '@/helpers/getEnvVariables';

// ? Types
import type { Session, User } from '@supabase/supabase-js';

const [{ SUPABASE_URL, ANON_PUBLIC }] = getEnvVariables();

const supabaseClient = createClient(SUPABASE_URL, ANON_PUBLIC);

export const useAuth = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const handleSignOut = async () => {
    const { error } = await supabaseClient.auth.signOut();
    if (!error) {
      setUser(null);
      setSession(null);
    }
    return { error };
  };

  useEffect(() => {
    supabaseClient.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user || null);
    });

    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return {
    // ? Properties
    supabaseClient,
    user,
    session,

    // ? Methods
    handleSignOut,
  };
};
