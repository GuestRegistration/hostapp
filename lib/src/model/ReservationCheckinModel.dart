class ReservationCheckinModel {
User user;
Reservation reservation;
Identity identity;

ReservationCheckinModel({this.user, this.reservation, this.identity});

getUserSubModel() => this.user;

getReservationSubModel() => this.reservation;

getIdentitySubModel() => this.identity;
}

class User{
  PhoneModel phone;
 Name name;
 String email;
 User({this.name, this.phone, this.email});

 getName() => this.name;
 getPhoneNumber() => this.phone;
 getEmail () => this.email;
}
class PhoneModel {
  String countryCode;
  String phoneNumber;
  String completePhone;


  PhoneModel({this.countryCode, this.phoneNumber, this.completePhone});

   getCountrtyCode() => this.countryCode;

  getPhoneNumber() => this.phoneNumber;

   getCompletePhoneN() => this.completePhone;
}



class Name{
  String fname, lname;

  Name({this.fname, this.lname});

  getFirstName() => this.fname;

  getLastName() => this.lname;
}

class Reservation{
String reservation_name;
  
  Reservation({this.reservation_name});

  getReservationName() => this.reservation_name;
}



class Identity{
     String identity_country, identity_userId, identity_documentType, identity_documentUrl;

     Identity({this.identity_country, this.identity_userId, this.identity_documentType, this.identity_documentUrl});

getIdentity_country() => this.identity_country;

getIdentity_userIdy() => this.identity_userId;

getIdentity_documentType() => this.identity_documentType;


getIdentity_documentUrl() => this.identity_documentUrl;


}