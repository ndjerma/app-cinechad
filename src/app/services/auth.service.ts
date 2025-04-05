import { Injectable, ResourceStatus } from "@angular/core";
import { User } from "../models/user.constants";
import { max } from "rxjs";

@Injectable()
export class AuthService {

    static dummyUserList: Array<User> = [
        {
            id: 1,
            email: 'djermaaa@gmail.com',
            password: 'testtest',
            date: new Date("2025-03-31 20:01")
        },
        {
            id: 2,
            email: 'itsjohnny@gmail.com',
            password: 'testpass123',
            date: new Date("2025-03-31 20:01")
        },
        {
            id: 3,
            email: 'mims@gmail.com',
            password: 'testpass123',
            date: new Date("2025-04-31 20:01")
        }]

        currentUser: User = AuthService.dummyUserList[0];

        // * korisnicko ime getUsername
        getUsername(user: User): string{
            return user.email;
        }

        // * id korisnika getUserById
        getUserById(id: number): User {
            var foundUser!: User;

            AuthService.dummyUserList.forEach(user => {
                if(user.id == id){
                    foundUser = user;
                }
            });

            this.currentUser = foundUser;
            return foundUser;
        }

        // * prikaz korisnika - getUser
        getUser(userEmail: string): User {
            this.currentUser = AuthService.dummyUserList.find(userToFind => userToFind.email == userEmail)!;
            return this.currentUser;
        }

        // * provera lozinke
        isPasswordCorrect(userEmail: string, userPass: string): boolean {
            return AuthService.dummyUserList.find(userToFind => 
                (userToFind.email == userEmail && userToFind.password == userPass)) != undefined;
        }

        //* registruj korisnika
        registerUser(email: string, password: string, date: Date): User{
            var maxId: number = 0;
            AuthService.dummyUserList.forEach(user =>
                {
                    if(maxId < user.id){
                        maxId = user.id;
                    }
                });

            var id = ++maxId;
            var user: User = {id, email, password, date};

            AuthService.dummyUserList.push(user);

            this.currentUser = user;

            console.log(user);
            return user;
        }
}