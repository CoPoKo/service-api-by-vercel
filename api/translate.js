/*!
 * ==========================================================================
 * "CoPoKo Service API" License
 * GNU General Public License version 3.0 (GPLv3)
 * ==========================================================================
 * This file is part of "CoPoKo Service API"
 *
 * "CoPoKo Service API" is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * "CoPoKo Service API" is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with "CoPoKo Service API". If not, see <http://www.gnu.org/licenses/>.
 * ==========================================================================
*/
const translate = require("google-translate-cn-api");

// (async () => {
//   // English => Chinese
//   await translate('hello world', { to: 'zh-cn' })
//     .then(console.info)
//     .catch(console.error);

//   // Chinese => English
//   await translate('你好世界', { to: 'en' })
//     .then(console.info)
//     .catch(console.error);
// })();

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  let data = JSON.parse(req.body)
  console.log(data);
  await translate(data.s, data.conf)
    .then((trans) => {
      console.info(trans)
      res.status(200).send(trans);
    })
    .catch(console.error);

};



