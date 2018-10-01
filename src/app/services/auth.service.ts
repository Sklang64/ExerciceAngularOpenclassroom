import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  constructor() { }
  //#region création user
  /**
   * Description : fonction async qui permet l'ajout d'un nouvel utilisateur dans firebase
   * @param email type string
   * @param password type string
   */
  createNewUser(email:string, password: string){
    return new Promise( 
      (resolve, reject) =>{
        firebase.auth().createUserWithEmailAndPassword(email,password).then(
          () => {
            resolve();
          },
          (error)=>{
            reject();
          }
        );
      }
    );
  }
  //#endregion

  //#region Connexion user
  /**
   * Description : Fonction async qui permet de connecter un utilisateur déjà existant
   * @param email type string
   * @param password type string
   */
  signInUser(email: string, password:string){
    return new Promise( 
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email,password).then( 
          () => {
            resolve();
          },
          (error) =>{
            reject(error);
          })
      })
  }
  //#endregion

  //#region Déconnexion user
/**
 * Description : méthode qui permet de déconnecter l'utilisateur
 */
signOutUser(){
  firebase.auth().signOut();
}
//#endregion
}
