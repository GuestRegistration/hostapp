import 'package:hostapp/src/model/getPropertiesModel.dart';

class GetNotificationModel{
  String id, text, timestamp, time;
  bool read;
  GetProperties getProperties;
  PayLoad payload;

  GetNotificationModel({this.id, this.text, this.timestamp, this.time, this.read, this.getProperties,
  this.payload});

 getID() => this.id;
 
   getText() => this.text;

  getTimeStamp() => this.timestamp;

  getTime() => this.time;

  getRead() => this.read;

  getPropertyData() => this.getProperties;

  getPayLoad() => this.payload;

  GetNotificationModel.fromData(Map<String, dynamic> data):
  text = data['text'],
  timestamp = data['timestamp'],
   time = data['time'],
    read = data['read'];
  
}

class PayLoad{
  String reservationID, propertyID, userID, identityID;

  PayLoad({this.reservationID, this.propertyID, this.userID, this.identityID});

  getReservationID() => this.reservationID;

  getPropertyID() => this.propertyID;

  getUserID() => this.userID;

  getIdentity() => identityID;

}
