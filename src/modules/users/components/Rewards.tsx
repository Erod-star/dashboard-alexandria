// ? Icons
import { Award, Medal, Trophy } from 'lucide-react';

// ? Components
import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components';

export const Rewards = () => {
  return (
    <div className="flex gap-5 flex-wrap">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button className="px-1" variant="ghost">
              <Award />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Recompensa #1</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button className="px-1" variant="ghost">
              <Medal />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Recompensa #2</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button className="px-1" variant="ghost">
              <Trophy />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Recompensa #3</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
