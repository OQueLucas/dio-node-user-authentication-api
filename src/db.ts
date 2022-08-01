import { Pool } from 'pg';

const connectionString =
  'postgres://fhkiedmk:bQSA9NPyJsH_bz7YxNdytVgqVy6cv-Tp@kesavan.db.elephantsql.com/fhkiedmk';

const db = new Pool({ connectionString });

export default db;
