interface IBaseRepository<T> {
  findAll(option:any ): Promise<{ rows: T[], count: number }>;

  findOneById(id: any): Promise<T | null>;

  update(id: any, t: {}): Promise<[number, T[]]>;

  delete(id: any): Promise<boolean>;

  count(): Promise<number>;
}

export default IBaseRepository;
