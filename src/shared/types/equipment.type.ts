import { Equipment } from 'src/modules/equipment/entities/equipment.entity';

export interface EquipmentLookup {
  rows: Equipment[];
  count: number;
}

export type SortableField = keyof Pick<
  Equipment,
  'name' | 'quantity' | 'price' | 'usageRatio' | 'receiptDate' | 'createdAt' | 'updatedAt'
>;

export type SearchableField = keyof Pick<
  Equipment,
  'name' | 'quantity' | 'price' | 'usageRatio' | 'receiptDate' | 'createdAt' | 'updatedAt'
>;
