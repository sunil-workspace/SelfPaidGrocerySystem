import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class MemberidValidatorService {

  constructor(public http:Http) { }

  memberIdValidator(memberId){
    return this.http.get('http://localhost:8080/selfpaidgrocerysystem/validateMemberId/'+memberId).map(res => res.json());
    

    /*if(memberId == "1234"){
      return this.http.get('assets/jsons/validMember.json').map(res => res.json());
      } else {
        return this.http.get('assets/jsons/invalidMember.json').map(res => res.json());
      }*/
    
  }

}
