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
import Parser from 'rss-parser'
import axios from 'axios'
let parser = new Parser()

module.exports = async (req, res) => {
  const { body } = req
  const { data } = await axios.get(body.url)
  const feed = await parser.parseString(data)
  res.send(feed)
}
// 大文本还是会超时