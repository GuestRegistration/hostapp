import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:hostapp/src/style/AppText.dart';
import 'package:hostapp/src/style/AppTextStyle.dart';
import 'package:hostapp/src/style/AppFontSizes.dart';
import 'package:hostapp/src/viewmodels/SingleReservationDetailsViewModel.dart';
import 'package:hostapp/src/widget/CollectText.dart';
import 'package:hostapp/src/widget/input_field.dart';
import 'package:hostapp/src/util/customFunctions.dart';
import 'package:hostapp/src/widget/ui_helpers.dart';
import 'package:hostapp/src/widget/approveDialog.dart';
import 'package:flutter_datetime_picker/flutter_datetime_picker.dart';
import 'package:provider_architecture/provider_architecture.dart';
import 'package:flutter/services.dart';

class SingleReservationDetailsScreen extends StatefulWidget {
  final String reservationID;

  const SingleReservationDetailsScreen({this.reservationID});

  @override
  _SingleReservationDetailsScreenState createState() => _SingleReservationDetailsScreenState();
}

class _SingleReservationDetailsScreenState extends State<SingleReservationDetailsScreen> {
final CustomFuntion _customFuntion = locator<CustomFuntion>();
  static  TextEditingController nameofGuestController = TextEditingController();
   static  TextEditingController bookingChannelController =  TextEditingController();
   static   TextEditingController checkinController =  TextEditingController();
   static   TextEditingController checkoutController =  TextEditingController();
     static  TextEditingController inviteInLinkController =  TextEditingController();
       static  TextEditingController propertyNameController =  TextEditingController();
      static   TextEditingController instructionController =  TextEditingController();
       static   TextEditingController guestNameController =  TextEditingController();
                DateTime date = DateTime.now();
     

 final globalKey = GlobalKey<ScaffoldState>();
  
     
  @override
  Widget build(BuildContext context) {
    return ViewModelProvider<SingleReservationDetailsViewModel>.withConsumer(
       viewModelBuilder: () => SingleReservationDetailsViewModel(),
      onModelReady: (model) => model.initialize(id: widget.reservationID, 
     ),
      builder: (context, model, child) =>
       Scaffold(
          key: globalKey,
        body: (!model.busy ?  GestureDetector(
                  child: Padding(
              padding: const EdgeInsets.only(left: 15.0, right: 15.0),
              child: Column(
                  children: <Widget>[
      setData(model),
                     horizontalSpaceLarge,
                      horizontalSpaceLarge,
                   headerButton(), 
                   Row(
                       mainAxisAlignment: MainAxisAlignment.start,
                       children: <Widget>[
                        Padding(
                           padding: const EdgeInsets.all(8.0),
                           child: Text('Reservation details', style:  TextStyle(
                  color: AppColor.black,
                  fontSize: AppFontSizes.larger,
                  fontWeight: FontWeight.bold
                )
            ),), 
                   ],),
                    Expanded(
                        child: ListView(
                          children: <Widget>[
                 _customFuntion.errorUimessage(errorMessage: model.errorM),
                           verticalSpaceSmall,
                            CollectTextWithout(title: 'Property',),
                            AbsorbPointer(
                                child: InputField(
                              placeholder: 'PropertyName',
                              decoration: null,
                              controller: propertyNameController,
                          ),
                            ),
                           
                                 verticalSpaceSmall,
                         Row(
                           mainAxisAlignment: MainAxisAlignment.spaceBetween,
                           children: <Widget>[
                           CollectTextWithout(title: 'Guest',),
                           viewUI(model),

                         ],),
                          AbsorbPointer(
                                child: InputField(
                                  placeholder: 'GuestName',
                                  decoration: null,
                                  controller: guestNameController,
                              ),),
                                
                             
                              // verticalSpaceSmall,
                              //  CollectTextWithout(title: 'Booking Channel',),
                              //  AbsorbPointer(
                              //   child: InputField(
                              //     placeholder: 'bookingChannel',
                              //     decoration: null,
                              //     controller: bookingChannelController,
                              // ),
                              //  ),
                          
                             AbsorbPointer(
                                                        child: Row(
                                 mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                  children: <Widget>[
                                    Column(
                                  children: <Widget>[
                                   CollectTextWithout(title: 'Check in',),
                                    Container(
                                     width: MediaQuery.of(context).size.width/2.5,
                                      child: TextFormField(
                                    controller: checkinController,
                                    style: TextStyle(fontWeight: FontWeight.bold,),
                                    textAlign: TextAlign.center,
                                    keyboardType: TextInputType.number,
                                    decoration:  InputDecoration(
                                      enabledBorder: new OutlineInputBorder(
                                      borderRadius: BorderRadius.circular(8.0),
                                      borderSide: new BorderSide(color: AppColor.borderColor,
                                      ),
                                  ),
                            border: new OutlineInputBorder(
                                borderRadius: BorderRadius.circular(8.0),
                                borderSide: new BorderSide(color: AppColor.borderColor
                                ),

                          ),
                            hintStyle: AppTextStyle.inputHint(context),
                            
                          ),   
                          onTap: (){
                                DatePicker.showDatePicker(
                               context,
                            showTitleActions: true,
                            onChanged: (date) {
                                String v = '${date.day}-${date.month}-${date.year}';
                                setCheckinDate(value: v);

                            }, onConfirm: (date) {
                                 String v = '${date.day}-${date.month}-${date.year}';
                                setCheckinDate(value: v);
                            }, currentTime: DateTime.now(), locale: LocaleType.en);
                          },
                            ), ), 
                            ],
                                 
                                ),
                               
                                Column(
                                  children: <Widget>[
                                      verticalSpaceSmall,
                                   CollectTextWithout(title: 'Check out',),
                                   Container(
                                       height: 70,
                                       width: 150,
                                      child: TextFormField(
                                    controller: checkoutController,
                                    style: TextStyle(fontWeight: FontWeight.bold,),
                                    textAlign: TextAlign.center,
                                    keyboardType: TextInputType.number,
                                    decoration:  InputDecoration(
                                      enabledBorder: new OutlineInputBorder(
                                      borderRadius: BorderRadius.circular(8.0),
                                      borderSide: new BorderSide(color: AppColor.borderColor,
                                      ),
                                  ),
                            border: new OutlineInputBorder(
                                borderRadius: BorderRadius.circular(8.0),
                                borderSide: new BorderSide(color: AppColor.borderColor
                                ),

                          ),
                            hintStyle: AppTextStyle.inputHint(context),
                            
                          ),   
                          onTap: (){
                                DatePicker.showDatePicker(
                               context,
                            showTitleActions: true,
                            onChanged: (date) {
                                String v = '${date.day}-${date.month}-${date.year}';
                                setCheckOutDate(value: v);

                            }, onConfirm: (date) {
                                 String v = '${date.day}-${date.month}-${date.year}';
                                setCheckOutDate(value: v);
                            }, currentTime: DateTime.now(), locale: LocaleType.en);
                          },
                            ), ),  ],
                               
                                ),
                                  ],
                                ),
                             ),
 Row(
                         mainAxisAlignment: MainAxisAlignment.spaceBetween,
                         children: <Widget>[
                         CollectTextWithout(title: 'Check-In Link',),
                         shareView(),
                       ],),
                       GestureDetector(
                         child: InputDecorator(
                           child: Text(inviteInLinkController.text,  style: TextStyle(fontWeight: FontWeight.bold, color: Colors.blue),
                                  textAlign: TextAlign.start,),
                          decoration: InputDecoration(
                            //labelText: widget.invitelink,
                                enabledBorder: new OutlineInputBorder(
                                borderRadius: BorderRadius.circular(8.0),
                                borderSide: new BorderSide(color: AppColor.borderColor,
                                ),
                            ),
                      border: new OutlineInputBorder(
                        borderRadius: BorderRadius.circular(8.0),
                        borderSide: new BorderSide(color: AppColor.borderColor
                        ),
                        
                      )
                    ),
                         ),
                        
                    onTap: (){
                      print('Hi');
                      //Copy Link
                       copyLink();
                    },
                       ),
 verticalSpaceSmall,

                        CollectTextWithout(title: 'Check-in Instructions',),
                        TextField(
                      keyboardType: TextInputType.multiline,
                      controller: instructionController,
                       maxLines: 15,
                       textAlign: TextAlign.left,
                      decoration: InputDecoration(
                        border: OutlineInputBorder(),
                          enabledBorder: new OutlineInputBorder(
                            borderRadius: BorderRadius.circular(8.0),
                            borderSide: new BorderSide(color: AppColor.borderColor,
                            ),
                          ),
                       
                        labelStyle: TextStyle(

                        )
                      ),
                    ),
                            verticalSpaceSmall,
                            verticalSpaceLarge,

                        ],),
                    ),
                   
                  //     GestureDetector(
                  //   child: Padding(
                  //     padding: const EdgeInsets.only(left: 6.0, right:6.0, bottom: 20),
                  //     child: Container(
                  //       height: 50,
                  //       child: Material(
                  //         child: Center(
                  //           child: Text('Share Check-in-Link',
                  //             style: TextStyle(
                  //                 color: AppColor.white,
                  //                 fontSize: 17.0,
                  //                 fontWeight: FontWeight.bold
                  //             ),),
                  //         ),
                  //         color: Color(0xFF45A1C9),
                  //         shape: RoundedRectangleBorder(
                  //             borderRadius: new BorderRadius.circular(18.0),
                  //             side: BorderSide(color: AppColor.borderColor)
                  //         ),

                  //       ),
                  //     ),
                  //   ),
                  //   onTap: (){
                  //     _customFuntion.shareReservationLink(link: model.getinviteLink);

                  //   },
                  // )
                  
                  ],
                ),
              
            ),
       onTap:(){
         FocusScope.of(context).requestFocus(new FocusNode());
       }
        ) : Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
               Container(
                  height: 60,
                  width: 60,
                  child: CircularProgressIndicator(
                  strokeWidth: 8,
                        valueColor: AlwaysStoppedAnimation<Color>(AppColor.primary, ),
                        backgroundColor: AppColor.borderColor,
                  ),
                ),
                SizedBox(height: 30,),
                Center(
                  child: Text(AppText.fetchingRdetails,
                   textAlign: TextAlign.center,
                    style: TextStyle(
                      color: Colors.grey,
                  fontSize: AppFontSizes.medium,
                  fontWeight: FontWeight.bold
                            ),),
                           
                ),
              ],
            )         
         )
        )
    );
  }


headerButton(){
return Row(
          mainAxisAlignment: MainAxisAlignment.start,
         // crossAxisAlignment: Cros,
          children: <Widget>[
            GestureDetector(child: Padding(
        padding: const EdgeInsets.only(left: 6.0, top: 30, bottom: 10),
        child: Container(
          child: Material(
          child: Row(
              children: <Widget>[
                Padding(
                  padding: const EdgeInsets.only(left: 5.0),
                  child: Icon(Icons.arrow_back_ios,   color: AppColor.primary,),
                ),
                Center(
              child: Padding(
                padding: const EdgeInsets.all(8.0),
                child: Text('Back',
                style: TextStyle(
                  color: AppColor.primary,
                  fontSize: 17.0,
                  fontWeight: FontWeight.bold
                ),),
              )
                )],
          ),
          color: AppColor.primaryLight,
          shape: RoundedRectangleBorder(
borderRadius: new BorderRadius.circular(18.0),
side: BorderSide(color: AppColor.primaryLight)
),
    ),
        ),
      ),
            onTap: (){
//               Navigator.push( context,
//                    MaterialPageRoute(builder: (context) => Dashboard(
// showIndex: 0,
//                    ))); 
              Navigator.pop(context);  
            },
            ),   ],
                    );
}
 

  setCheckinDate({String value}){
    setState(() {
checkinController.text = value;
    });
  }

  setCheckOutDate({String value}){
    setState(() {
checkoutController.text = value;
    });
  }
  
  assignValue(SingleReservationDetailsViewModel model){
    if(model.linkUIVisisblity){
     inviteInLinkController.text = model.getinviteLink;
    return SizedBox.shrink();
    }else{
 return SizedBox.shrink();
    }
    
  }

  viewUI(SingleReservationDetailsViewModel model){
    return 
    GestureDetector(
                    child: Padding(
                      padding: const EdgeInsets.all(8.0),
                      child:   Container(
                        width: (model.appoved ? 70 : 80),
                        height: 35,
                        child: Material(
                        child: Center(
                          child: Text((model.appoved ? 'View' : 'Approve'), 
                          style: TextStyle(
                            color: Color(0xFFEFF5F7),
                            fontSize: 17.0,
                          ),),
                        ),
                        color:  Color(0xFF45A1C9),
                        shape: RoundedRectangleBorder(
        borderRadius: new BorderRadius.circular(18.0),
            side: BorderSide(color: AppColor.borderColor)
    ),  ),)  
                     ),
                    onTap: (){
return showDialog(
            context: context,
            builder: (BuildContext context) {
              return ApproveDialog( reservationID: widget.reservationID,
              isApproved: model.appoved,
              );});
                    },
                  );
  }

  shareView(){
    return GestureDetector(
                    child: Padding(
                      padding: const EdgeInsets.all(8.0),
                      child:   Container(
                        width: 70,
                        height: 35,
                        child: Material(
                        child: Center(
                          child: Icon(Icons.share, size: 30, color: AppColor.primary,)
                        ),
                        //color:  Color(0xFF45A1C9),
                        shape: RoundedRectangleBorder(
        borderRadius: new BorderRadius.circular(18.0),
            side: BorderSide(color: AppColor.white)
    ),  ),)  
                     ),
                    onTap: (){
                    _customFuntion.shareReservationLink(link: inviteInLinkController.text);
                   
                    },
                  );
  }
  copyLink(){
  Clipboard.setData(new ClipboardData(text: inviteInLinkController.text));
                              globalKey.currentState.showSnackBar( 
          SnackBar(backgroundColor: AppColor.primary,
            content:Text("Reservation link copied", style: AppTextStyle.error(context, Colors.white))));
          
}

  errorWidget(SingleReservationDetailsViewModel model,){
    return Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
               Container(
                  height: 60,
                  width: 60,
                  child: CircularProgressIndicator(
                  strokeWidth: 1,
                        valueColor: AlwaysStoppedAnimation<Color>(AppColor.borderColor,),
                        backgroundColor: AppColor.borderColor,
                  ),
                ),
                SizedBox(height: 30,),
                Center(
                  child: Text(model.getErrorMessage,
                   textAlign: TextAlign.center,
                    style: TextStyle(
                      color: Colors.red,
                  fontSize: AppFontSizes.medium,
                  fontWeight: FontWeight.bold
                            ),),
                           
                ),
                verticalSpaceLarge,
                GestureDetector(child: Padding(
                    padding: const EdgeInsets.all(1.0),
                    child: Container(
                      width: 150,
                      height: 50,
                      child: Material(
                      child: Center(
                          child: Text('Retry',
                          style: TextStyle(
                            color: AppColor.white,
                            fontSize: 17.0,
                            fontWeight: FontWeight.bold
                          ),),
                      ),
                      color: Color(0xFF45A1C9),
                      shape: RoundedRectangleBorder(
        borderRadius: new BorderRadius.circular(18.0),
            side: BorderSide(color: AppColor.borderColor)
    ),
                   
                ),
                    ),
                  ),
                  onTap: (){
                   model.initialize(id: widget.reservationID);
                  },
                        ),
              ],
            );
  }

setData(SingleReservationDetailsViewModel model){
  bookingChannelController.text = model.bookingC;
   checkinController.text = model.chekinD;
     checkoutController.text =  model.checkoutD; 
     inviteInLinkController.text =  model.invitelink;
      propertyNameController.text = model.propertyName;
      guestNameController.text = model.guestName;
        instructionController.text = model.instructions;
  print(model.instructions);
  return Text('');
}  

@override
  void dispose() {
    nameofGuestController.dispose();
    bookingChannelController.dispose();
    checkinController.dispose();
    checkoutController.dispose();
    inviteInLinkController.dispose();
    propertyNameController.dispose();
    instructionController.dispose();
    guestNameController.dispose();
    super.dispose();
  }

}

