import Promise from "bluebird";
import models from "../../../models";
import { passwordHASH } from "../../../utils/passwordHASH";

/**
 * @emailChecking
 *
 * @returns email validation result
 */
export default class UserDao {
  static emailChecking(req) {
    return new Promise((resolve, reject) => {
      models.Employees.findAndCountAll({
        attributes: ['email'],
        where: {
          email: req.body.email
        }
      }).then(
        emailCheck => {
          resolve(emailCheck);

        },
        error => {
          reject(error);
        }
      );
    });
  }

  /**
   * Querying employees data
   */

  static readEmployees(){
    return new Promise((resolve, reject) => {
      models.Employees.findAndCountAll({
        attributes: ['id','email','name','surname','phonenumber','address','role']
      }).then(
        emailCheck => {
          resolve(emailCheck);

        },
        error => {
          reject(error);
        }
      );
    });
  }

  /**
   *  Users password salt
   * @param email
   * @returns {Promise} salt for a particular email
   *
   */
  static authPassword(email) {
    return new Promise((resolve, reject) => {
      models.Employees.findAll({
        attributes: ["salt"],
        where: {
          email: email
        }
      }).then(
        saltcheck => {
         resolve(saltcheck);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  /**
   * registers users
   * @param req
   * @returns {Promise}
   */
  static saveEmployees(req) {
    let hashed_password = passwordHASH.hash(req.body.password);
    return new Promise((resolve, reject) => {
      models.Employees.create({
        email: req.body.email,
        password: hashed_password.passwordHASH,
        salt: hashed_password.salt,
        name: req.body.name,
        surname: req.body.surname,
        phonenumber: req.body.phonenumber,
        address: req.body.address,
        role: req.body.role,
      }).then(
        employeesData => {
          resolve(employeesData);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  /**
   * User authentication
   * @param req
   * @param password
   * @returns {Promise}
   */
  static loginUser(req, password) {
    return new Promise((resolve, reject) => {
      models.Employees.findAndCountAll({
        attributes: [
          "id",
          "name",
          "surname",
          "email",
          "address",
          "role",
          "phonenumber"
        ],
        where: {
          email: req.body.email,
          password: password
        }
      }).then(
        auth => {
          resolve(auth);
        },
        error => {
          reject(error);
        }
      );
    });
  }
}
