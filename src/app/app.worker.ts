/// <reference lib="webworker" />    
import * as path from 'path';

addEventListener('message', ({ data }) => {    
  console.log(path.resolve('/'))
  const response = `worker response to ${data}`;
  postMessage(response);
});
