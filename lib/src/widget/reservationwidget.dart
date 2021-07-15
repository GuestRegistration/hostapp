import 'package:flutter/material.dart';
import 'package:hostapp/src/model/getReservationMode.dart';
import 'package:hostapp/src/style/AppTextStyle.dart';
import 'package:hostapp/src/style/AppFontSizes.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:date_format/date_format.dart';
import 'package:hostapp/src/screen/EditReservationScreen.dart';
import 'package:hostapp/src/util/customFunctions.dart';
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/widget/approveDialog.dart';
import 'package:popup_menu/popup_menu.dart';
import 'package:flutter/services.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

class ReservationWidget extends StatelessWidget{
final CustomFuntion _customFuntion = locator<CustomFuntion>();
  final GetReservationModel getReservation;
  final String type;
   GlobalKey btnKey = GlobalKey();
     
   final Function onDeleteItem;

    ReservationWidget({
    Key key,
    this.getReservation,
    this.type,
    this.onDeleteItem,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    PopupMenu.context = context;
    return GestureDetector(
                         child:  Card(
                                elevation: 10,
                                color: colorType(type: type),
                                shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.only(
                                  bottomRight: Radius.circular(20),
                                  bottomLeft: Radius.circular(20),
                                  topLeft:Radius.circular(20),
                                  topRight: Radius.circular(20))
      ),
                                child: Padding(
                                  padding: const EdgeInsets.only(top: 10.0),
                                  child: Column(
                                    children: <Widget>[
                                      Padding(
                                        padding: const EdgeInsets.only(left:10.0, top: 10.0),
                                        child: Row(
                                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                         children: <Widget>[
                                            Row(children: <Widget>[
                                              SizedBox(width: 10,),
                                           Text((getReservation.name == null ? '' : getReservation.name),
                                        style: AppTextStyle.titleLarge(context, titleColor(type: type)),),
                                        SizedBox(width: 10,),

                                       (type == 'Past' ? SizedBox.shrink() :  Icon(Icons.verified_user, color: titleColor(type: type),)),
                                            ],),
                                      //  Padding(
                                      //    padding: const EdgeInsets.only(right: 10.0),
                                      //    child:  Icon(Icons.more_vert),
                                      //  ) 
                                       Padding(
                                         padding: const EdgeInsets.only(right: 10.0),
                                         child:  PopupMenuButton<String>(
                                           padding: EdgeInsets.zero,
                                           itemBuilder: (context) => (getReservation.alreadyCheckedin ?
                                            alreadyApproveDrop() 
                                            : notApprovedDrop()),
                                           onSelected: (value){
                                            //1 - Approve
                                            //2 - View
                                            //3 - Share
                                            //4 - Copy
                                            if(value == '1'){
                                              approveReservation(context);

                                            }else if(value == '2'){
                                              viewReservation(context);

                                            }else if(value == '3'){
                                               _customFuntion.shareReservationLink(link: getReservation.checkinUrl);

                                            }

                                           },
                                         )
                                       ) 
                                       
                                       ],
                                     ),
                                      ),
                                Divider(),
                                Row(
                                  mainAxisAlignment: MainAxisAlignment.center,
                                  children: <Widget>[
                                     SizedBox(width: 10,),
                                 Expanded(child:   timer(context: context, whichdate: getReservation.checkInDate == null ? null : getReservation.checkInDate),),
                                   Expanded(child:   timer(context: context, whichdate: getReservation.checkoutDate == null ? null : getReservation.checkoutDate),),
                                  
                                  ],
                                ),
                                 SizedBox(width: 20,),
                                 
                                    ],
                                  )
                                ),
                             ),
  key: btnKey,
                    onTap: (){
                   
                      // print('*************************');
                      //  print('bookingChannel ${getReservation.bookingChannel}');
                      // print('checkedin ${getReservation.checkedinAat}');
                      //   print('checkinUrl ${getReservation.checkinUrl}');
                      //   print('checkoutDate ${getReservation.checkoutDate}');
                      //   print('ID ${ getReservation.property.id}');
                      //    print('name ${getReservation.property.name}');
                      // print('*************************');

                 
                    },
                  );
  }

  Color colorType({String type}){
    if (type == 'unApproved'){

      return Colors.white;

    }else if(type == 'Approved'){

     return Color(0xFFF7FCFE);

    }else if(type == 'Past'){

      return Color(0xFFFEF7F7);
    }else{
      return AppColor.secondary;
    }
  }

   Color titleColor({String type}){
    if (type == 'unApproved'){

//If Already checkin is true return gree else RED
      if(getReservation.alreadyCheckedin){
          return Colors.green;
      }else{

      return Colors.red;
      }

    }else if(type == 'Approved'){

     return AppColor.primary;

    }else if(type == 'Past'){

      return Colors.grey;

    }else{
      return AppColor.secondary;
    }
  }
 
 timer({BuildContext context, String whichdate}){
   return Padding(
              padding: const EdgeInsets.only(top: 10.0, left: 8.0, bottom: 10.0,),
              child: Row(
                    children: <Widget>[
                      Icon(Icons.exit_to_app, color: Colors.black,),
                        SizedBox(width: 10,),
                      Text(formatDate(value: whichdate), 
                  style: TextStyle(
        fontFamily: "Metropolis",
        fontFamilyFallback: ["RobotoRegular"],
        fontSize: AppFontSizes.small,
        fontWeight: FontWeight.normal,
        color: Colors.black),),
                    ],
                ),
            );
 }


 formatDate({String value}){

    if( value == null){

        return "";
    }else{
      //DD[0], MM[1], YY[2]
     // print('FROM SERVER AM ${getReservation.checkInDate}');
       var  month = value.split('-');
      //  print(month);
      //  print(month[0]);
        int convert = int.parse(month[1]);
   
  return '${_customFuntion.returnMonth(value: convert).toString()}, ${month[0]}, ${month[2]},';
    //return (October, 10, 1960)
   
 }
 }


viewReservation(BuildContext context){
       Navigator.push( context,
                   MaterialPageRoute(builder: (context) => EditReservationScreen(
                     id: getReservation.id,
                    bookingC: getReservation.bookingChannel,
                    checkoutD: getReservation.checkoutDate,
                    chekinD: getReservation.checkInDate,
                    invitelink:getReservation.checkinUrl,
                    propertyId: getReservation.property.id,
                    propertyN: getReservation.property.name,
                  appoved: getReservation.approved,
                   gname: getReservation.guest,
                   instructions:  getReservation.instrucstions,
                   initialGuestName: getReservation.name,
                  
                   )));
}

approveReservation(BuildContext context){
return showDialog(
            context: context,
            builder: (BuildContext context) {
              return ApproveDialog( reservationID: getReservation.id,
              isApproved: getReservation.approved,
              );});
}


alreadyApproveDrop(){
  return <PopupMenuEntry<String>>[
                                    PopupMenuItem<String>(
                                                value: '1',
                                                child: ListTile(
                                                  leading: const Icon(Icons.done_all),
                                                  title: Text(
                                                    'Approve',
                                                  ),
                                                ),
                                              ),
                                              PopupMenuItem<String>(
                                                value: '2',
                                                child: ListTile(
                                                  leading: const Icon(Icons.visibility),
                                                  title: Text(
                                                    'View',
                                                  ),
                                                ),
                                              ),

                                              PopupMenuItem<String>(
                                                value: '3',
                                                child: ListTile(
                                                  leading: const Icon(Icons.share),
                                                  title: Text(
                                                    'Share',
                                                  ),
                                                ),
                                              )
                                           ];

}

notApprovedDrop(){
  return <PopupMenuEntry<String>>[

          PopupMenuItem<String>(
            value: '2',
            child: ListTile(
              leading: const Icon(Icons.visibility),
              title: Text(
                'View',
              ),
            ),
          ),

          PopupMenuItem<String>(
            value: '3',
            child: ListTile(
              leading: const Icon(Icons.share),
              title: Text(
                'Share',
              ),
            ),
          ),
         
        ];
}
}
