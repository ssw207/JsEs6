/**
 * import : 다른 파일의 코드를 사용 할 수 있도록 한다.
 * from : 참조할 코드의 파일경로
 * myLogger.js 파일에서  funtion , const등 객체를 export해야 사용가능
 * import시  { export한 객체이름 }으로 사용하고자하는 파일에서 선언하여 사용가능
 * export defualt 로 선언시 { } 없이 사용가능
 */
import MyLogger, { log } from './myLogger'; //log함수만 뽑아옴
import { _ } from './utility'; // 유틸 사용

const body = document.querySelector('body');
body.innerHTML = '<p>hello world</p>'

_.log('my first test data');
_.log('getTIme is ${getTime()}'); // 템플릿 작동하지 않음

const logger = new MyLogger(); // 생성자 함수 호출
_.log(logger.getCurrentHour());
_.log(logger.getLecture());


