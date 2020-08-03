export class Customer {
  constructor(
    public id: number,
    public name: string,
    public phone: string,
    public date: string,
    public time: string,
    public detail: string,
    public other: string,
    public completed: boolean
  ) {}
}
