#!/usr/bin/env node

import type { IncomingMessage, ServerResponse } from 'http';
import { createServer } from 'http';

createServer((request: IncomingMessage, response: ServerResponse) => {
  response.end('OK');
}).listen(process.env.PORT || '8080');
