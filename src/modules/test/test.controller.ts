import { Controller, Get } from '@nestjs/common';
import Test from './test.model';
@Controller('test')
export class TestController {
  @Get()
  async test() {
    let data =  await Test.findAll();
    return data;
  }
}