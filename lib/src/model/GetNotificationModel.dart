class GetNotificationModel{
  String text, timestamp, time, read;

  GetNotificationModel({this.text, this.timestamp, this.time, this.read});

   getId() => this.text;

  getTimeStamp() => this.timestamp;

  getTime() => this.time;

  getRead() => this.read;
  
}
