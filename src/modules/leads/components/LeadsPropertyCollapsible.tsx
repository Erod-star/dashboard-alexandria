// ? Icons
import { House } from 'lucide-react';

// ? Components
import { TableCell, TableRow } from '@/components';

// ? Types
import type { Property } from '@/modules/inventory/interfaces';

interface LeadsPropertyCollapsibleProps {
  properties: Property[];
}

export const LeadsPropertyCollapsible = ({
  properties,
}: LeadsPropertyCollapsibleProps) => {
  return (
    <>
      {properties.length > 0 && (
        <>
          <TableRow>
            <TableCell
              className="text-alt-green-300 font-medium text-lg "
              colSpan={2}
            >
              Propiedades
            </TableCell>

            <TableCell className="text-alt-green-300 font-medium text-lg">
              Estado
            </TableCell>
          </TableRow>

          {properties.map((property) => (
            <TableRow key={property.id}>
              <TableCell colSpan={2}>
                <div className="w-full flex items-center gap-3">
                  <House className="size-5" />
                  <p>{property.name}</p>
                </div>
              </TableCell>

              <TableCell className="text-green-400">
                {property.availability}
              </TableCell>
            </TableRow>
          ))}
        </>
      )}
    </>
  );
};
