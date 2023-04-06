import Temp from '../models/temp.model';
import IBaseRepository from './base.repository';

class TempRepository implements IBaseRepository<Temp>{

  public findAll(option: any): Promise<{ rows: Temp[]; count: number; }> {
    throw new Error('Method not implemented.');
  }
  public findOneById(id: any): Promise<Temp | null> {
    throw new Error('Method not implemented.');
  }
  public update(id: any, t: {}): Promise<[number, Temp[]]> {
    throw new Error('Method not implemented.');
  }
  public delete(id: any): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  public count(): Promise<number> {
    throw new Error('Method not implemented.');
  }

  public temp = async () => {
    return Temp.findAll();
  };


}

export default TempRepository;
