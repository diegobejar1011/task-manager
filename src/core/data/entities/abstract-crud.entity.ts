import { Repository } from 'typeorm';

export abstract class AbstractRepository<T extends Record<string, any>> {
    constructor(protected readonly repo: Repository<T>) {}

    create(data: Partial<T>): Promise<T> {
        return this.repo.save(data as any);
    }

    findAll(): Promise<T[]> {
        return this.repo.find();
    }

    findById(id: T[keyof T]): Promise<T | null> {
        return this.repo.findOne({ where: { id } as any });
    }

    update(id: T[keyof T], data: Partial<T>): Promise<T> {
        return this.repo.save({ ...(data as any), id } as any);
    }

    delete(id: T[keyof T]): Promise<void> {
        return this.repo.delete(id).then(() => undefined);
    }

    //  Buscar por cualquier key de T
    findBy<K extends keyof T>(key: K, value: T[K]): Promise<T | null> {
        return this.repo.findOne({ where: { [key]: value } as any });
    }

    //  Buscar varios por cualquier key de T
    findManyBy<K extends keyof T>(key: K, value: T[K]): Promise<T[]> {
        return this.repo.find({ where: { [key]: value } as any });
    }
}