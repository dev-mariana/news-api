export class CreateNewInput {
  title: string;
  description: string;
  content: string;
  created_by: string;

  constructor(data: CreateNewInput) {
    this.title = data.title;
    this.description = data.description;
    this.content = data.content;
    this.created_by = data.created_by;
  }
}
