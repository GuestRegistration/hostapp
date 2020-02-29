
class GetProperties {
  String id;
  String name;
  Address address;
  String email;
  String terms;
  PropertyPhone propertyPhone;

  GetProperties({this.id, this.name, this.propertyPhone, this.address, this.email, this.terms});

   getId() => this.id;

  getName() => this.name;

  getPhoneNumber() => this.propertyPhone;

  getAddress() => this.address;

  getEmail() => this.email;

  geterms() => this.terms;
  
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
