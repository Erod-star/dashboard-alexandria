// ? Components
import { Badge } from '@/components';

// ? Types
import { Department } from '../interfaces';

interface UserDepartmentBadgeProps {
  department: Department;
}

export const UserDepartmentBadge = ({
  department,
}: UserDepartmentBadgeProps) => {
  switch (department) {
    case 'Vendedor':
      return <Badge variant="vendedor">Vendedor</Badge>;
    case 'Jurídico':
      return (
        <Badge className="bg-alt-red-400 text-black border-none shadow-sm">
          Jurídico
        </Badge>
      );
    case 'Marketing':
      return (
        <Badge className="bg-[#FFBCAA] text-black border-none shadow-sm">
          Marketing
        </Badge>
      );
    case 'Gerencia':
      return (
        <Badge className="bg-[#C299DA] text-black border-none shadow-sm">
          Gerencia
        </Badge>
      );
    case 'Administración':
      return (
        <Badge className="bg-[#D6EB82] text-black border-none shadow-sm">
          Administración
        </Badge>
      );
  }
  return <div>UserDepartmentHighlight</div>;
};
