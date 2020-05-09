import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:hostapp/src/style/AppTextStyle.dart';
import 'package:hostapp/src/style/AppFontSizes.dart';
import 'package:hostapp/src/viewmodels/addReservationViewModel.dart';
import 'package:hostapp/src/widget/CollectText.dart';
import 'package:hostapp/src/widget/input_field.dart';
import 'package:hostapp/src/widget/ButtomPicker.dart';
import 'package:hostapp/src/widget/Menu.dart';
import 'package:hostapp/src/util/customFunctions.dart';
import 'package:intl/intl.dart';
import 'package:hostapp/src/widget/ui_helpers.dart';
import 'package:flutter_datetime_picker/flutter_datetime_picker.dart';
import 'package:hostapp/src/model/getPropertiesModel.dart';
import 'package:provider_architecture/provider_architecture.dart';
import 'package:hostapp/src/model/BookingChannelModel.dart'; 
import 'package:sticky_headers/sticky_headers.dart';

class AddReservationScreen extends StatefulWidget {
  @override
  _AddReservationScreenState createState() => _AddReservationScreenState();
}

class _AddReservationScreenState extends State<AddReservationScreen> {
    final CustomFuntion _customFuntion = locator<CustomFuntion>();
   TextEditingController nameofGuestController = TextEditingController();
  // TextEditingController guestEmailController = new TextEditingController();
    //TextEditingController bookingChannelController = new TextEditingController();
     TextEditingController checkinController = new TextEditingController();
     TextEditingController checkoutController = new TextEditingController();
      TextEditingController inviteInLinkController = new TextEditingController();
     DateTime date = DateTime.now();
       GetProperties _selectedProperty, _selectedID;
       BookingChannelModel _selectedBokingModel;
       String selectedBookingName;
       String propertyID;
       int checkinDAY, checkinMONTH, checkinYEAR, checkoutDAY, checkoutMONTH, checkoutYEAR;
       int currentDay, currentMonth, currentYear;

     @override
  void initState() {
    super.initState();
    current();
     listener(nameofGuestController);
   // listener(guestEmailController); No guest Email for now
   // listener(bookingChannelController);
    listener(checkinController);
    listener(checkoutController);
  }
     
  @override
  Widget build(BuildContext context) {
    return ViewModelProvider<AddReservationViewModel>.withConsumer(
      viewModel: AddReservationViewModel(),
      onModelReady: (model) => model.initialize(),
      builder: (context, model, child) =>
      (model.busy ? loadingWidget()
                 :
                 (model.getErrorMessage == null ? 
                   Scaffold(
        body: (model.loadingOthers ? Center(
        child: CircularProgressIndicator(
                    strokeWidth: 4,
                          valueColor: AlwaysStoppedAnimation<Color>(AppColor.primary, ),
                          backgroundColor: AppColor.borderColor,
                    ),
      )
      :  Padding(
            padding: const EdgeInsets.only(left: 15.0, right: 15.0),
            child: Column(
              children: <Widget>[ 
                 horizontalSpaceLarge,
                verticalSpaceMedium,
               headerButton(model),
               
               Row(
                 mainAxisAlignment: MainAxisAlignment.start,
                 children: <Widget>[
                  Padding(
                     padding: const EdgeInsets.all(8.0),
                     child: Text('Add a reservation', style:  TextStyle(
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
                          Container(
                              height: 50,
                               width: MediaQuery.of(context).size.width,
                                padding: EdgeInsets.symmetric(horizontal: 10.0),
                                decoration: BoxDecoration(
                                  borderRadius: BorderRadius.circular(15.0),
                                  border: Border.all(
                                      color: AppColor.primary, style: BorderStyle.solid, width: 0.80),
                                ),
                            child: (model.properties == null ? Center(child: Text('You do not have any property. '
                               'Goto property page to add one for free.',
                     textAlign: TextAlign.center,
                  style:  TextStyle(
                    color: Colors.red,
                    fontStyle: FontStyle.normal,
                    fontSize: 16,
                  )
              ),
              ) :
                            DropdownButton<GetProperties>(
                              isExpanded: true,
                               iconEnabledColor: AppColor.primary,
                                  underline: SizedBox(),
                                  value: _selectedProperty,
                                  onChanged: (value) {
                                    setState(() {
                                      _selectedProperty = value;
                                       propertyID = value.id; //Return property ID
                                       
                                        print(propertyID);
                                     //  print(_selectedProperty.id);
                                      //  print(_selectedProperty);
                                    });
                                  },
                                  items: model.getPropertiesList().map((GetProperties lang) {
                                  return DropdownMenuItem<GetProperties>(
                                            value: lang, 
                                            child: Text(lang.name.toString(), //Show Name 
                                            style: TextStyle(fontWeight: FontWeight.bold, color: Colors.black),),
                                          );
                                              }).toList(),
                                
                                ))
                          ),
                           verticalSpaceSmall,
                   CollectTextWithout(title: 'Guest',),
                      InputField(
                        placeholder: 'NameOfGuest',
                        decoration: null,
                        controller: nameofGuestController,
                      ),
                       
                        verticalSpaceSmall,
                         CollectTextWithout(title: 'Booking Channel',),
                       (model.loadingOthers2 ? Center(child: CircularProgressIndicator()) :
                        Container(
                              height: 50,
                               width: MediaQuery.of(context).size.width,
                                padding: EdgeInsets.symmetric(horizontal: 10.0),
                                decoration: BoxDecoration(
                                  borderRadius: BorderRadius.circular(15.0),
                                  border: Border.all(
                                      color: AppColor.primary, style: BorderStyle.solid, width: 0.80),
                                ),
                            child: DropdownButton<BookingChannelModel>(
                              isExpanded: true,
                              iconEnabledColor: AppColor.primary,
                                  underline: SizedBox(),
                                  value: _selectedBokingModel,
                                  onChanged: (value) {
                                    setState(() {
                                   _selectedBokingModel = value;
                                    selectedBookingName = _selectedBokingModel.name;
                                   // print(selectedBookingName);
                                    });
                                  },
                                  items: model.getBookingList().map((BookingChannelModel lang) {
                                  return DropdownMenuItem<BookingChannelModel>(
                                            value: lang, //Show Name 
                                            child: Text(lang.name,
                                            style: TextStyle(fontWeight: FontWeight.bold, color: Colors.black),),
                                          );
                                              }).toList(),
                                
                                ),
                          )),
                    
                       Row(
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
                              borderSide: new BorderSide(color: AppColor.primary,
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
                        checkinDAY = date.day; checkinMONTH = date.month; checkinYEAR = date.year;

                        if(currentDay == checkinDAY && currentMonth == checkinMONTH && currentYear == checkinYEAR){
                           model.showMessage(error: null); //back to null

                        }else{
                          model.showMessage(error: null); //back to null
                          model.showMessage(error: 'Your checkin date must start from today');

                        }
                       
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
                              borderSide: new BorderSide(color: AppColor.primary,
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
                         print('Check-out Day : ${date.day}');
                        print('Check-out Month : ${date.month}');
                        print(' Check-out Year : ${date.year}');
                        checkoutDAY = date.day; checkoutMONTH = date.month; checkoutYEAR = date.year;

                        //Checkout date shoul be in 24hrs
                        if(currentDay+1 == checkoutDAY && currentMonth == checkoutMONTH && currentYear == checkoutYEAR){
                           model.showMessage(error: null); //back to null

                        }else{
                          model.showMessage(error: null); //back to null
                          model.showMessage(error: 'Your checkout date must be after 24hr');
                         

                        }
                      }, currentTime: DateTime.now(), locale: LocaleType.en);
                    },
                      ), ),  ],
                       
                        ),
                          ],
                        ),

                         verticalSpaceSmall,
                         
                      Visibility(
                         child: Column(
                            children: <Widget>[
                       Row(
                         mainAxisAlignment: MainAxisAlignment.spaceBetween,
                         children: <Widget>[
                            CollectTextWithout(title: 'Check-In Link',),
                             GestureDetector(child: Icon(Icons.share, size: 30, color: Colors.black,),
                             onTap: (){
                                _customFuntion.shareReservationLink(link: model.getinviteLink);
                             },),
                          
                       ],),
                        assignValue(model),
                           TextFormField(
                            controller: inviteInLinkController,
                            style: TextStyle(fontWeight: FontWeight.bold, color: Colors.blue),
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
                        
                      )

                    ),
                    onTap: (){
                      //Share Link
                      _customFuntion.shareReservationLink(link: model.getinviteLink);
                    },
                        ),
                            ]
                         ),
                        visible: model.linkUIVisisblity,
                      ),
                          verticalSpaceLarge,

//**************** REMOVE BUTTON FOR NOW */
              //           (model.busy ? CircularProgressIndicator(
              //     strokeWidth: 4,
              //           valueColor: AlwaysStoppedAnimation<Color>(AppColor.primary, ),
              //           backgroundColor: AppColor.borderColor,
              //     ):
              //     (model.linkUIVisisblity ? SizedBox.shrink() //Remove button if it's true;
              //     : GestureDetector(
              //   child: Padding(
              //     padding: const EdgeInsets.only(left: 6.0, right:6.0, bottom: 20),
              //     child: Container(
              //       height: 50,
              //       child: Material(
              //         child: Center(
              //           child: Text('Continue',
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
              //     model.authenticateReservation(
              //       bookChanl: selectedBookingName,
              //       checkinD: checkinController.text,
              //       checkoutD: checkoutController.text,
              //     //  guestEmail: guestEmailController.text,
              //       guestName: nameofGuestController.text,
              //       propertyID: propertyID
              //     );

              //   },
              // )
              
              // )

              //)

            
                   ], 
                 ),
               )
              ],
            ),
          
          ) 
        )
     
     
      ) : errorWidget(model)
                   )
                   ),
   
    );
  }


headerButton(AddReservationViewModel model){
return Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
         // crossAxisAlignment: Cros,
          children: <Widget>[
            GestureDetector(child: Padding(
        padding: const EdgeInsets.all(1.0),
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
             Navigator.pop(context);
            },
            ),
    horizontalSpaceMedium,
    (model.busy ? CircularProgressIndicator(
                  strokeWidth: 4,
                        valueColor: AlwaysStoppedAnimation<Color>(AppColor.primary, ),
                        backgroundColor: AppColor.borderColor,
                  ): (model.linkUIVisisblity ? SizedBox.shrink() : GestureDetector(
                    child: Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Container(
                        width: 150,
                        height: 35,
                        child: Material(
                        child: Center(
                          child: Text('Continue', //If all field is entered, Display complete else Skip
                          style: TextStyle(
                            color: Color(0xFFEFF5F7),
                            fontSize: 17.0,
                          ),),
                        ),
                        color: Color(0xFF45A1C9),
                        shape: RoundedRectangleBorder(
        borderRadius: new BorderRadius.circular(18.0),
            side: BorderSide(color: AppColor.borderColor)
    ),  ),)  
),
                    onTap: (){
                   model.authenticateReservation(
                    bookChanl: selectedBookingName,
                    checkinD: checkinController.text,
                    checkoutD: checkoutController.text,
                  //  guestEmail: guestEmailController.text,
                    guestName: nameofGuestController.text,
                    propertyID: propertyID
                  );

                    },
                  )) 
)
   
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


   
  errorWidget(AddReservationViewModel model){
    return Center(
      child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
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
                      model.initialize();
                      model.showMessage(error: null); //back to null
                    },
                          ),
                ],
              ),
    );
  }
  
  loadingWidget(){
   return Center(
      child: CircularProgressIndicator(
                    strokeWidth: 4,
                          valueColor: AlwaysStoppedAnimation<Color>(AppColor.primary, ),
                          backgroundColor: AppColor.borderColor,
                    ),
    );
  }

//Getting currentDate
  current(){
     DateTime date = DateTime.now();
      currentDay = date.day;
      currentMonth = date.month;
      currentYear = date.year;
  }

}


