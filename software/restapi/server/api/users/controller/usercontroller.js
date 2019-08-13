import UserDao from "../dao/userdao";
import { jwtTokenPasser } from "../../../utils/commanUtils";
import { authPassword } from "../../../utils/passwordHASH";


export default class UserController {

  /**
   *  Email Checking.
   *  @emailChecking : validates email
   *  if successful
   *  @saveEmployees: continues with registering users.
   *  @param req
   *  @param res
   */
  static registerIncomers(req, res) {
    UserDao.emailChecking(req)
      .then(email => {
        if (email.count === 0) {

          /**
           * registration of user
           */
          UserDao.saveEmployees(req)
            .then(() => {
              res.sendStatus(201);
            })
            .catch(error => res.status(403).send(error));
        } else {
          res.sendStatus(409);
        }
      })
      .catch(error => res.status(403).send(error));
  }

  /**
   * Read Employees data
   */

  static readEmployees(req,res){
    UserDao.readEmployees().then(list => {
      if(list.count > 0){
        res.status(200).json(list);
      }else{
        res.sendStatus(403);
      }
    })
      .catch(error => res.status(403).send(error));
  }

  /**
   *  user authentication
   *
   * @param req
   * @param res
   *
   *  @return token
   */
  static authUser(req, res) {
    
    UserDao.emailChecking(req)
      .then(email => {
        if (email.count === 1) {
          UserDao.authPassword(req.body.email)
            .then(salt => {
                let hashed_password = authPassword(
                  req.body.password,
                  salt[0].dataValues.salt
                );
                UserDao.loginUser(req, hashed_password.passwordHASH)
                  .then(auth => {
                    if (auth.count === 0) {
                      res.status(403).send({
                        message: "Invalid email and password"
                      });
                    } else if (auth.count === 1) {
                      res.status(200).send({
                        token: jwtTokenPasser.jwtToken(req.body.email)
                      });
                    }
                  })
                  .catch(error => res.status(403).send(error));
            })
            .catch(error => {
              res.status(403).send(error);
            })
        } else {
          res.status(403).send({ message: "Invalid email and password" });
        }
      })
      .catch(error => res.status(403).send(error));
  }

}
