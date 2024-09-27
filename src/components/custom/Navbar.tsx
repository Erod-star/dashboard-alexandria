import { NavLink, Link } from 'react-router-dom';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

// ? Components
import { Avatar, AvatarFallback, AvatarImage, Button } from '@/components';

// ? Images
import AltaltiumLogo from '@/assets/logo-altaltium.svg';

export const Navbar = () => {
  const supabaseClient = useSupabaseClient();

  // TODO: Implement the sign out method in a custom component
  const handleSignOut = async () => {
    const { error } = await supabaseClient.auth.signOut();
    if (error) return { error };
  };

  return (
    <header className="navbar border-b-2 flex gap-24 px-8 items-center justify-between min-h-[82px]">
      <Link className="h-20 w-44" to="/">
        <img className="size-full" src={AltaltiumLogo} alt="Altaltium" />
      </Link>

      <nav className="flex w-full justify-between">
        <NavLink to="calendario">Calendario</NavLink>
        <NavLink to="inventario">Inventario</NavLink>
        <NavLink to="publicaciones">Publicaciones</NavLink>
        <NavLink to="peticiones">Peticiones</NavLink>
        <NavLink to="leads">Leads</NavLink>
        <NavLink to="usuarios">Usuarios</NavLink>
      </nav>

      <Button onClick={handleSignOut}>Cerrar sesion</Button>

      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </header>
  );
};
