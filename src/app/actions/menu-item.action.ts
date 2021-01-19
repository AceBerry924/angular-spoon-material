export class GetMenuItems {
  static readonly type = '[Menu List] Get List';

  constructor(
    public page: number,
    public keys: Array<string>,
    public tags: Array<string>,
    public sortKey: string,
    public isAscending: boolean
  ) {
  }
}
