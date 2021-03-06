/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * and the Server Side Public License, v 1; you may not use this file except in
 * compliance with, at your election, the Elastic License or the Server Side
 * Public License, v 1.
 */

export const mockHttpServer = jest.fn();

jest.mock('./http_server', () => {
  const realHttpServer = jest.requireActual('./http_server');

  return {
    ...realHttpServer,
    HttpServer: mockHttpServer,
  };
});

jest.mock('./lifecycle_handlers', () => ({
  registerCoreHandlers: jest.fn(),
}));
