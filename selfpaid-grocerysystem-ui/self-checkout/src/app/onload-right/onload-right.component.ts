import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MemberidValidatorService } from '../services/memberid-validator.service';


@Component({
  selector: 'app-onload-right',
  templateUrl: './onload-right.component.html',
  styleUrls: ['./onload-right.component.css']
})
export class OnloadRightComponent implements OnInit {

  @Output() onClicking = new EventEmitter<boolean>();

memberId : string = "";
notAvalidMember : string = "";

  constructor(private memberidValidatorService : MemberidValidatorService) { } 

  ngOnInit() {
  }

  displayLookupFinishPayButtonsForGuest() {
    console.log("Inside displayLookupFinishPayButtonsForGuest");
    this.onClicking.emit();
  }

  displayLookupFinishPayButtonsForMember(memberId) {
    console.log("Inside displayLookupFinishPayButtonsForMember: ", memberId);
    this.memberidValidatorService.memberIdValidator(memberId).subscribe((response) => {
      console.log("Response came to displayLookupFinishPayButtonsForMember method. Is Member:: ", response.isValidMember); 
      if(response.isValidMember=="true"){
        this.onClicking.emit();
      } else if(response.isValidMember == "false"){
        this.notAvalidMember="The entered Member ID is not valid!";
      } else{
        this.notAvalidMember = response.isValidMember;
        this.memberId = "";
      }

    });


   
    
    
  }


}
