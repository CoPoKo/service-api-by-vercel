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
module.exports = (req, res) => {
  const { name = 'World' } = req.query
  res.status(200).send(`Hello ${name}!`)
}