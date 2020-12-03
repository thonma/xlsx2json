const XlsxPopulate = require('xlsx-populate');
const _ = require('lodash');

const CONF = {
  SRC_FILE: './test.xlsx',
  SRC_SHEET: 0,
  SRC_RANGE: 'A1:M6',
  DIST_FOMATTED: true,
  DIST_INDENT_SIZE: 2,
};

const main = () => {
  XlsxPopulate.fromFileAsync(CONF.SRC_FILE).then(workbook => {
    const out = [];

    const sheet = workbook.sheet(CONF.SRC_SHEET);

    const all = sheet.range(CONF.SRC_RANGE).value();
    const head = all[0];
    const bodies = all.slice(1);

    for (let i = 0; i < bodies.length; i++) {
      const row = {};

      for (let j = 0; j < bodies[i].length; j++) {
        _.set(row, head[j], bodies[i][j]);
      }

      out.push(row);
    }

    if (CONF.DIST_FOMATTED) {
      console.log(JSON.stringify(out, null, CONF.DIST_INDENT_SIZE));
      return;
    }
    console.log(JSON.stringify(out));
  });
};

main();
