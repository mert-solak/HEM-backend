import { Includeable } from 'sequelize';

import { Clinic } from 'src/modules/clinic/entities/clinic.entity';
import { SearchableField, SortableField } from 'src/shared/types/equipment.type';

export const sortableFields: SortableField[] = [
  'name',
  'price',
  'quantity',
  'receiptDate',
  'usageRatio',
  'updatedAt',
  'createdAt',
];

export const searchableFields: SearchableField[] = [
  'name',
  'price',
  'quantity',
  'receiptDate',
  'usageRatio',
  'updatedAt',
  'createdAt',
];

export const includableFields: Includeable[] = [
  {
    model: Clinic,
    required: false,
  },
];
