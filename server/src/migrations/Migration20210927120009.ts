import { Migration } from '@mikro-orm/migrations';

export class Migration20210927120009 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "split" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" text not null, "workouts" int4 not null);');
  }

}
