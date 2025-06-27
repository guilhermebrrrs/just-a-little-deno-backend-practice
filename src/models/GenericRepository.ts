export interface GenericRepository<T> {
  create(data: T): void;

  update(data: T): void;

  delete(data: T): void;
}
