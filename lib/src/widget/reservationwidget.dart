import 'package:flutter/material.dart';
import 'package:hostapp/src/model/getReservationMode.dart';
import 'package:hostapp/src/style/AppTextStyle.dart';

class ReservationWidget extends StatelessWidget{
  
  final GetReservationModel getReservation;
     
   final Function onDeleteItem;

   const ReservationWidget({
    Key key,
    this.getReservation,
    this.onDeleteItem,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
                         child: Container(
                          
                             decoration: new BoxDecoration(
                              gradient: new LinearGradient(
                                  colors: [
                                    Colors.grey[100],
                                    Colors.grey[100]
                                  ],
                                  begin: const FractionalOffset(0.0, 0.0),
                                  end: const FractionalOffset(1.0, 1.0),
                                  stops: [0.0, 1.0],),
                                // borderRadius: BorderRadius.circular(20),
                            ),
                               child: Card(
                                elevation: 10,
                                shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.only(
                                  bottomRight: Radius.circular(20),
                                  bottomLeft: Radius.circular(20),
                                  topLeft:Radius.circular(20),
                                  topRight: Radius.circular(20))
      ),
                                child: Padding(
                                  padding: const EdgeInsets.only(top: 10.0),
                                  child: ListTile(
                                   title: Padding(
                                     padding: const EdgeInsets.only(bottom: 10.0, top: 10.0),
                                     child: Text((getReservation.name == null ? '' : getReservation.name), style: AppTextStyle.title(context),),
                                   ),
                                   leading: Icon(Icons.share, size: 25, color: Colors.black,),
                                   subtitle: Padding(
                                     padding: const EdgeInsets.only(bottom: 8.0),
                                     child: Text((getReservation.checkinUrl == null ? '' : 
                                     getReservation.checkinUrl 
                                     ), style: AppTextStyle.subtitle(context),),
                                   ),
                                  //  trailing: Row(
                                  //    children: <Widget>[
                                  //      SizedBox(height: 30,),
                                  //      Text("Feb, 22, 2020", style: AppTextStyle.subtitle(context),),
                                  //       Text("To", style: AppTextStyle.subtitle(context),),
                                  //        Text("Feb, 22, 2020", style: AppTextStyle.subtitle(context),),
                                  //    ],
                                  //  )
                               ),
                                ),
                             ),
                           ),
                    onTap: (){
                      
                    },
                  );
               

  }
}