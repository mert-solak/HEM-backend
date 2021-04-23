import { Clinic } from 'src/modules/clinic/entities/clinic.entity';

export interface ClinicLookup {
  rows: Clinic[];
  count: number;
}

export type SortableField = keyof Pick<Clinic, 'name' | 'createdAt' | 'updatedAt'>;

export type SearchableField = keyof Pick<Clinic, 'name'>;
