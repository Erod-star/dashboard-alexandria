// ? Types
import type { Property } from '@/modules/inventory/interfaces';

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  since: string;
  reason: string;
  properties: Property[];
}
