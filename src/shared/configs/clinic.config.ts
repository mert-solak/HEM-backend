import { Includeable } from 'sequelize';

import { Equipment } from 'src/modules/equipment/entities/equipment.entity';
import { SearchableField, SortableField } from 'src/shared/types/clinic.type';

export const sortableFields: SortableField[] = ['name', 'updatedAt', 'createdAt'];

export const searchableFields: SearchableField[] = ['name', 'updatedAt', 'createdAt'];

export const includableFields: Includeable[] = [
  {
    model: Equipment,
    required: false,
  },
];
