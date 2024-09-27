import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

import { useSupabaseClient } from '@supabase/auth-helpers-react';

function AuthView() {
  const client = useSupabaseClient();
  return (
    <div className="flex-center h-screen">
      <div className="w-[25rem] p-5 rounded-md">
        <Auth
          supabaseClient={client}
          theme="dark"
          appearance={{ theme: ThemeSupa }}
          providers={['google']}
          localization={{
            variables: {
              sign_in: {
                email_label: 'Tu dirección de correo electrónico',
                email_input_placeholder: 'juan@gmail.com',
                password_label: 'Tu contraseña',
                password_input_placeholder: '********',
                button_label: 'Iniciar sesión',
                loading_button_label: 'Iniciando sesión...',
                social_provider_text: 'Iniciar sesión con Google',
              },
            },
          }}
          providerScopes={{
            google: 'https://www.googleapis.com/auth/calendar',
          }}
        />
      </div>
    </div>
  );
}

export default AuthView;
