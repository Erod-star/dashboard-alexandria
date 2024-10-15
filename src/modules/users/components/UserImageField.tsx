// ? Icons
import { User, Camera } from 'lucide-react';

// ? Components
import { Avatar, AvatarFallback, Button } from '@/components';

export const UserImageField = () => {
  const handleChangeImage = () => {
    console.log('::TODO:: Change image');
  };

  return (
    <div className="flex-center">
      <div className="size-56 relative">
        <Avatar className="size-56">
          {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
          <AvatarFallback className="text-gray-700">
            <User className="size-36" />
          </AvatarFallback>
        </Avatar>
        <Button
          className="absolute bottom-0 right-2 z-10 shadow-lg"
          type="button"
          onClick={handleChangeImage}
        >
          <Camera />
        </Button>
      </div>
    </div>
  );
};
