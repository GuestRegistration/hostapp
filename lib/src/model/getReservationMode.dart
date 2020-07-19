class GetReservationModel{
String id;
  String name;
  String checkinUrl;
  String checkedinAat;
  String checkoutDate;
  String checkInDate;
  bool alreadyCheckedin;
  String bookingChannel, instrucstions;
  bool approved;
  List<dynamic> guest;
  Property property;
  

  GetReservationModel({this.id, this.name, this.checkinUrl, this.checkedinAat,this.instrucstions, this.approved,
  this.checkoutDate, this.alreadyCheckedin, this.bookingChannel, this.guest, this.property, this.checkInDate});

   getId() => this.id;

  getName() => this.name;

  getUrl() => this.checkinUrl;

  getInDate() => this.checkedinAat;

  getOutDate() => this.checkoutDate;

  getIsAlreadyCheckIn() => this.alreadyCheckedin;

  getBookingChannel() => this.bookingChannel;

   getProperty() => this.property;

   getCheckInDate() => this.checkInDate;

    getIsApproved() => this.approved;

    getInstructions() => this.instrucstions;
}

class Property{
 String id, name;

 Property({this.id, this.name});

getPropertyId() => this.id;

getPropertyName() => this.name;
}


class GuestModel{
  String id, name, gender, type;
    
   GuestModel({this.id, this.name, this.gender, this.type});

   
}