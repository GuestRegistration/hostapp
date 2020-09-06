import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:hostapp/src/style/AppTextStyle.dart';
import 'package:hostapp/src/style/AppFontSizes.dart';
import 'package:hostapp/src/viewmodels/addReservationViewModel.dart';
import 'package:hostapp/src/widget/CollectText.dart';
import 'package:hostapp/src/widget/input_field.dart';
import 'package:hostapp/src/util/customFunctions.dart';
import 'package:hostapp/src/widget/ui_helpers.dart';
import 'package:hostapp/src/widget/approveDialog.dart';
import 'package:flutter_datetime_picker/flutter_datetime_picker.dart';
import 'package:hostapp/src/model/getPropertiesModel.dart';
import 'package:provider_architecture/provider_architecture.dart';
import 'package:hostapp/src/model/BookingChannelModel.dart'; 

import 'package:flutter/services.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';


class EditReservationScreen extends StatefulWidget {
  final String  chekinD, checkoutD, invitelink, propertyN, bookingC, propertyId, instructions, initialGuestName, id;
  final List<dynamic> gname;
  final bool appoved;

  const EditReservationScreen({this.chekinD, this.checkoutD, this.invitelink, this.instructions,this.initialGuestName,this.id,
   this.propertyN, this.bookingC, this.propertyId, this.gname, this.appoved});

  @override
  _EditReservationScreenState createState() => _EditReservationScreenState();
}

class _EditReservationScreenState extends State<EditReservationScreen> {
  final CustomFuntion _customFuntion = locator<CustomFuntion>();
   TextEditingController nameofGuestController = TextEditingController();
    TextEditingController bookingChannelController = new TextEditingController();
     TextEditingController checkinController = new TextEditingController();
     TextEditingController checkoutController = new TextEditingController();
      TextEditingController inviteInLinkController = new TextEditingController();
       TextEditingController propertyNameController = new TextEditingController();
        TextEditingController instructionController = new TextEditingController();
         TextEditingController guestNameController = new TextEditingController();
     DateTime date = DateTime.now();
       String propertyID;
       List<dynamic> guestName;
       String selectedGuest;

 final globalKey = GlobalKey<ScaffoldState>();
     @override
  void initState() {
    super.initState();

    checkinController.text = widget.chekinD;
    checkoutController.text = widget.checkoutD;
    inviteInLinkController.text = widget.invitelink;
    bookingChannelController.text = widget.bookingC;
    propertyID = widget.propertyId;
    propertyNameController.text = widget.propertyN;
    guestName = widget.gname;
    instructionController.text = widget.instructions;
    guestNameController.text = widget.initialGuestName;

    //_selectedProperty =
    
    // print(widget.gname);
    //  print(widget.chekinD);
    //  print(widget.checkoutD);
    //   print(widget.invitelink);
    //    print(widget.bookingC);
    //    print(widget.propertyId);
  }
     
  @override
  Widget build(BuildContext context) {
    return ViewModelProvider<AddReservationViewModel>.withConsumer(
       viewModelBuilder: () => AddReservationViewModel(),
      onModelReady: (model) => model.initialize(),
      builder: (context, model, child) =>
       Scaffold(
          key: globalKey,
        body: GestureDetector(
                  child: Padding(
              padding: const EdgeInsets.only(left: 15.0, right: 15.0),
              child: Column(
                  children: <Widget>[
                     horizontalSpaceLarge,
                      horizontalSpaceLarge,
                      Padding(
                      padding: const EdgeInsets.only(top: 20.0),
                      child: headerButton(model)
                  ),
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
                           child: Text(widget.invitelink,  style: TextStyle(fontWeight: FontWeight.bold, color: Colors.blue),
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
        )          
        )
    );
  }


   headerButton(AddReservationViewModel model){
return Row(
          mainAxisAlignment: MainAxisAlignment.start,
         // crossAxisAlignment: Cros,
          children: <Widget>[
            GestureDetector(child: Container(
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
   
            onTap: (){
//               Navigator.push( context,
//                    MaterialPageRoute(builder: (context) => Dashboard(
// showIndex: 0,
//                    ))); 
              Navigator.pop(context);  
            },
            ), 
              horizontalSpaceLarge,
              horizontalSpaceLarge,
              horizontalSpaceSmall,
     GestureDetector(
                      child: Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: (model.busy  ? 
                        CircularProgressIndicator(
                    strokeWidth: 2,
                          valueColor: AlwaysStoppedAnimation<Color>(AppColor.primary, ),
                          backgroundColor: AppColor.borderColor,
                    )
                         : 
                        Container(
                          width: 150,
                          height: 35,
                          child: Material(
                          child: Center(
                            child: Text('Save Changes', //If all field is entered, Display complete else Skip
                            style: TextStyle(
                              color: Color(0xFFEFF5F7),
                              fontSize: 17.0,
                            ),),
                          ),
                          color:Color(0xFF45A1C9),
                          shape: RoundedRectangleBorder(
          borderRadius: new BorderRadius.circular(18.0),
              side: BorderSide(color: AppColor.borderColor)
      ),  ),)  
                        ),),
                      onTap: (){
                     
                      },
                    ),
   
              ],
            
                );
}
 
   listener(TextEditingController controller){
   controller.addListener(() {
      if(controller.text.isNotEmpty){
                    //widget.model.setdataEnterdStatus(true);
                      }else{
                      //  widget.model.setdataEnterdStatus(false);
                      }
      // if(propertyNameController.text.isNotEmpty && addressController.text.isNotEmpty && widget.model.getCountry != null &&
      // emailcontroller.text.isNotEmpty && phoneNumber.text.isNotEmpty){
      //   widget.model.setCountinueButton(true);
      // }else{
      //   widget.model.setCountinueButton(false);
      // }
    });
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
  
  assignValue(AddReservationViewModel model){
    if(model.linkUIVisisblity){
     inviteInLinkController.text = model.getinviteLink;
    return SizedBox.shrink();
    }else{
 return SizedBox.shrink();
    }
    
  }

  viewUI(AddReservationViewModel model){
    return 
    GestureDetector(
                    child: Padding(
                      padding: const EdgeInsets.all(8.0),
                      child:   Container(
                        width: (widget.appoved ? 70 : 80),
                        height: 35,
                        child: Material(
                        child: Center(
                          child: Text((widget.appoved ? 'View' : 'Approve'), 
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
              return ApproveDialog( reservationID: widget.id,
              isApproved: widget.appoved,
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
                    _customFuntion.shareReservationLink(link: widget.invitelink);
                   
                    },
                  );
  }
 
  copyLink(){
  Clipboard.setData(new ClipboardData(text: widget.invitelink));
                              globalKey.currentState.showSnackBar( 
          SnackBar(backgroundColor: AppColor.primary,
            content:Text("Reservation link copied", style: AppTextStyle.error(context, Colors.white))));
          
}

}