export class New {
  id?: string;
  title: string;
  description: string;
  content: string;
  created_by: string;
  created_at?: Date;

  constructor(data: New) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.content = data.content;
    this.created_by = data.created_by;
    this.created_at = data.created_at;
  }
}
