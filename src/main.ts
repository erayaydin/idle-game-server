#!/usr/bin/env node

import type { IncomingMessage, ServerResponse } from 'http';
import { createServer } from 'http';
import { fileURLToPath } from 'url';
import { resolve } from 'path';

export default function main(port: number = 0, autostart: boolean = false) {
  const server = createServer((request: IncomingMessage, response: ServerResponse) => {
    response.end('OK');
  });

  if (autostart) {
    server.listen(port);
  }

  return server;
}

if (resolve(process.argv[1]) === resolve(fileURLToPath(import.meta.url))) {
  main(8080, true);
}
