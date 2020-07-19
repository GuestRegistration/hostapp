
class GetProperties {
  String id;
  String name;
  Address address;
  String email;
  String terms;
  String rulesText;
  PropertyPhone propertyPhone;
ReservationM reservation;

  GetProperties({this.id, this.name, this.propertyPhone, this.address, this.email, this.terms, this.rulesText, this.reservation});

   getId() => this.id;

  getName() => this.name;

  getPhoneNumber() => this.propertyPhone;

  getAddress() => this.address;

  getEmail() => this.email;

  geterms() => this.terms;

 getRules() => this.rulesText;
  
}

class Address {
  String street;
  String country;

  Address({this.street, this.country});

   getStreet() => this.street;

  getCountry() => this.country;
}

class PropertyPhone {
  String countryCode;
  String phoneNumber;
  String completePhone;


  PropertyPhone({this.countryCode, this.phoneNumber, this.completePhone});

   getCountrtyCode() => this.countryCode;

  getPhoneNumber() => this.phoneNumber;

   getCompletePhoneN() => this.completePhone;
}


class ReservationM{
  String id;
  String name;
  String checkoutDate;
  String checkInDate;

  ReservationM({this.id, this.name, this.checkoutDate, this.checkInDate});

    getId() => this.id;

  getName() => this.name;

  
   getCheckInDate() => this.checkInDate;

   
  getOutDate() => this.checkoutDate;
}