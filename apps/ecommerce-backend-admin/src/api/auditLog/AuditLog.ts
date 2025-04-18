export type AuditLog = {
  action: string | null;
  createdAt: Date;
  entity: string | null;
  entityId: string | null;
  id: string;
  updatedAt: Date;
};
