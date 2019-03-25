export const DatabaseConfig = {
  dev: {
    username: 'root',
    password: '12345678',
    database: 'z_library_manage',
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
    logging: (args: any)=>{
      console.log('---------------')
      console.log(args)
    },
    // force: true,
    //timezone: '+02:00'
  }
}