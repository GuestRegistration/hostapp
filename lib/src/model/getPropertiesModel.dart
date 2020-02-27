
class GetProperties {
  String id;
  String name;
  String phone;
  Address address;
  String email;
  String terms;

  GetProperties({this.id, this.name, this.phone, this.address, this.email, this.terms});

   getId() => this.id;

  getName() => this.name;

  getPhoneNumber() => this.phone;

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
