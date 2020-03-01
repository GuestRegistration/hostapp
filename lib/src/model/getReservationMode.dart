class GetReservationModel{
String id;
  String name;
  String checkinUrl;
  String checkedinAat;
  String checkoutDate;
  bool alreadyCheckedin;
  String bookingChannel;

  GetReservationModel({this.id, this.name, this.checkinUrl, this.checkedinAat, 
  this.checkoutDate, this.alreadyCheckedin, this.bookingChannel});

   getId() => this.id;

  getName() => this.name;

  getUrl() => this.checkinUrl;

  getInDate() => this.checkedinAat;

  getOutDate() => this.checkoutDate;

  getIsAlreadyCheckIn() => this.alreadyCheckedin;

  getBookingChannel() => this.bookingChannel;
}