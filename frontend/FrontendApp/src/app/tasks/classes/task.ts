import { Table } from 'src/app/tables/classes/table';

export class Task {
    id: number;
    title: string;
    description: string;
    table: Table;

    constructor(title: string, description: string, table: Table) {
        this.title = title;
        this.description = description;
        this.table = table;
    }
}
