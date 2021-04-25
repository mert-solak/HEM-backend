import { Includeable } from 'sequelize';

import { SearchableField, SortableField } from 'src/shared/types/clinic.type';

export const sortableFields: SortableField[] = ['name', 'updatedAt', 'createdAt'];

export const searchableFields: SearchableField[] = ['name'];

export const includableFields: Includeable[] = [];
