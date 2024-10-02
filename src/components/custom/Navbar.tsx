import { NavLink, Link } from 'react-router-dom';

// ? Components
import { UserDropdownMenu } from '@/components';

// ? Images
import AltaltiumLogo from '@/assets/logo-altaltium.svg';

export const Navbar = () => {
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

      <UserDropdownMenu />
    </header>
  );
};
