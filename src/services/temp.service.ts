import TempRepository from "../repositories/temp.repository";

class TempService {
  private tempRepository: TempRepository = new TempRepository();

  public helloWorld = async () => {
    return 'helloWorld'
  }
}

export default TempService;
