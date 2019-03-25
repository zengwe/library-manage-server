import { Sequelize } from 'sequelize-typescript';
import { DatabaseConfig } from '../config/database.config';
import { log } from '../common/log';
import { Test } from '../modules/test/test.model';
let models = [Test];
export function Model() {
  return function(targe: any) {
    models.push(targe);
  }
}
export const DatabaseService = {
  provide: 'SequelizeInstance',
  useFactory: async () => {
      let config = DatabaseConfig.dev;
      const sequelize: any = new Sequelize(<any>config);
      sequelize.addModels(models);
      let v = await sequelize.query("SELECT version()");    
      log('yellow', '**************************************');  
      // log('yellow', '*                                    *');                            
      log('yellow', "*       MYSQL VERSION: "+v[0][0]['version()']+'        *');
      // log('yellow', '*                                    *');   
      log('yellow', '**************************************');   
      return sequelize;
  }
}