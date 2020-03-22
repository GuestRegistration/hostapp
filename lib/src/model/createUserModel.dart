class CreateUserModel{
 String id, email;
 Phone phone;
    Name name;
CreateUserModel({this.id, this.email, this.phone, this.name});

 getId() => this.id;

  getName() => this.name;

  getEmail() => this.email;

  getPhoneProperty() => this.phone;
}

class Name{
  String fName, lName;

Name({this.fName, this.lName});

getFirstName() => this.fName;

getLastName() => this.lName;

}

class Phone {
  String countryCode;
  String phoneNumber;
  String completePhone;


  Phone({this.countryCode, this.phoneNumber, this.completePhone});

   getCountrtyCode() => this.countryCode;

  getPhoneNumber() => this.phoneNumber;

   getCompletePhoneN() => this.completePhone;
}
