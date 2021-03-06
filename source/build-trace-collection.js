// @flow

//
// Copyright (c) 2018 DDN. All rights reserved.
// Use of this source code is governed by a MIT-style
// license that can be found in the LICENSE file.

export const traceItemRegex = /(http.+):(\d+):(\d+)/;

import type { LineData } from './srcmap-reverse.js';

export default (xs: string): LineData[] => {
  return xs
    .split('\n')
    .map((x: string) => traceItemRegex.exec(x))
    .filter((x: ?(string[])) => x != null)
    .map(([compiledLine, url, line, column]: string[]) => ({
      compiledLine,
      url,
      line: parseInt(line, 10),
      column: parseInt(column, 10)
    }));
};
