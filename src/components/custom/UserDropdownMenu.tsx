import { useSupabaseClient } from '@supabase/auth-helpers-react';

// ? Components
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/components';

export const UserDropdownMenu = () => {
  const supabaseClient = useSupabaseClient();

  // TODO: Implementar esta función así como esta!
  const handleSignOut = async () => {
    const { error } = await supabaseClient.auth.signOut();
    localStorage.removeItem('provider-token');
    if (error) return { error };
  };

  return (
    <Menubar className="text-black">
      <MenubarMenu>
        <MenubarTrigger>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </MenubarTrigger>
        {/* // TODO: Completame!!! */}
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            New Window <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>New Incognito Window</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Email link</MenubarItem>
              <MenubarItem>Messages</MenubarItem>
              <MenubarItem>Notes</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem onClick={handleSignOut}>Cerrar sesión</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};
