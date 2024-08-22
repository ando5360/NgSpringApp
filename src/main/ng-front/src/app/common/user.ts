export class User {
    entityId: string;
    accessorId: string;
  
    constructor(entityId: string, accessorId: string) {
      this.entityId = entityId;
      this.accessorId = accessorId;
    }
}
