import { Component, Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../environments/environment';



@Injectable()
export class UserService {

    private apiUrl: string;

    constructor(
        private http: Http
    ) {
        this.apiUrl = environment.apiUrl;
    }

    getUsers(): Promise<Array<Object>> {
        return this.http.get(`${this.apiUrl}/user`)
            .toPromise()
            .then((resp) => {
                const users = resp.json();
                return users;
            });
    }

    getUserById(userId): Promise<Object> {
        return this.http.get(`${this.apiUrl}/user/id/${userId}`)
            .toPromise()
            .then((resp) => {
                const user = resp.json();
                return user;
            });
    }

    addUser(user): Promise<Object> {
        return this.http.post(`${this.apiUrl}/user`, user)
            .toPromise()
            .then((resp) => {
                const user = resp.json();
                return user;
            });
    }

    deleteUser(id): Promise<Object> {
        return this.http.delete(`${this.apiUrl}/user/id/${id}`)
            .toPromise()
            .then((resp) => {
                const status = resp.json();
                return status;
            });
    }

    updateUser(id, user): Promise<Object> {
        return this.http.put(`${this.apiUrl}/user/id/${id}`, user)
            .toPromise()
            .then((resp) => {
                const user = resp.json();
                return user;
            });
    }

}
