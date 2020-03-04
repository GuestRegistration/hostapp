import 'package:find_dropdown/find_dropdown.dart';
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

class EditReservationScreen extends StatefulWidget {
  @override
  _EditReservationScreenState createState() => _EditReservationScreenState();
}

class _EditReservationScreenState extends State<EditReservationScreen> {
   GetProperties _selectedProperty;
    final CustomFuntion _customFuntion = locator<CustomFuntion>();
   String propertyID;
    TextEditingController nameofGuestController = TextEditingController();
   TextEditingController guestEmailController = new TextEditingController();
    TextEditingController bookingChannelController = new TextEditingController();
     TextEditingController checkinController = new TextEditingController();
     TextEditingController checkoutController = new TextEditingController();
      TextEditingController inviteInLinkController = new TextEditingController();
       DateTime date = DateTime.now();

  @override
  Widget build(BuildContext context) {
    return ViewModelProvider<AddReservationViewModel>.withConsumer(
      viewModel: AddReservationViewModel(),
      onModelReady: (model) => model.initialize(),
      builder: (context, model, child) =>
      Scaffold(
        body: SingleChildScrollView(
          child: Padding(
            padding: const EdgeInsets.only(left: 15.0, right: 15.0),
            child:  Column(
            children: <Widget>[
        horizontalSpaceLarge,
                horizontalSpaceLarge,
               headerButton(),
                Row(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: <Widget>[
                   Padding(
                     padding: const EdgeInsets.all(8.0),
                     child: Text('SV02: 21/02 - 23/02', textAlign: TextAlign.right,
                      style:  TextStyle(
              color: AppColor.black,
              fontSize: AppFontSizes.largest,
              fontWeight: FontWeight.bold
            )
          ),),
                ],),
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
                                    color: AppColor.borderColor, style: BorderStyle.solid, width: 0.80),
                              ),
                          child: DropdownButton<GetProperties>(
                            isExpanded: true,
                                underline: SizedBox(),
                                value: _selectedProperty,
                                onChanged: (value) {
                                  setState(() {
                                    _selectedProperty = value;
                                     propertyID = value.id; //Return property ID
                                     
                                    //  print(_selectedID);
                                   //  print(_selectedProperty.id);
                                    //  print(_selectedProperty);
                                  });
                                },
                                items: model.getPropertiesList().map((GetProperties lang) {
                                return DropdownMenuItem<GetProperties>(
                                          value: lang, //Show Name 
                                          child: Text(lang.name.toString(), 
                                          style: TextStyle(fontWeight: FontWeight.bold, color: Colors.black),),
                                        );
                                            }).toList(),
                              
                              ),
                        ),
                         verticalSpaceSmall,
                      CollectTextWithout(title: 'Name of Guest',),
                    InputField(
                      placeholder: 'NameOfGuest',
                      decoration: null,
                      controller: nameofGuestController,
                    ),  
                    verticalSpaceSmall,
                     CollectTextWithout(title: 'Guest Email',),
                    InputField(
                      placeholder: 'guestofEmail',
                      decoration: null,
                      controller: guestEmailController,
                    ),
                     
                      verticalSpaceSmall,
                       CollectTextWithout(title: 'Booking Channel',),
                    InputField(
                      placeholder: 'Booking Channel',
                      controller: bookingChannelController,
                      textInputType: TextInputType.text,
                    ),

                    verticalSpaceSmall,
                    CollectTextWithout(title: 'Check IN',),
                    TextFormField(
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
                    ),

                     verticalSpaceSmall,
                    CollectTextWithout(title: 'Check Out',),
                    TextFormField(
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
                    ),
                    
                    verticalSpaceSmall,
                    Row(
                       mainAxisAlignment: MainAxisAlignment.spaceBetween,
                       children: <Widget>[
                          CollectTextWithout(title: 'Check-In Link',),
                           GestureDetector(child: Icon(Icons.share, size: 30, color: Colors.black,),
                           onTap: (){
                              _customFuntion.shareReservationLink(link: model.getinviteLink);
                           },),
                        
                     ],),
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
verticalSpaceSmall,
  CollectTextWithout(title: 'Terms & Conditions',),
          GestureDetector(
                child: TextField(
                  //  obscureText: false,
                  controller: null,
                  decoration: InputDecoration(
                      border: OutlineInputBorder(),
                      enabledBorder: new OutlineInputBorder(
                        borderRadius: BorderRadius.circular(8.0),
                        borderSide: new BorderSide(color: AppColor.borderColor,
                        ),
                      ),
                      
                      suffixIcon: Icon(Icons.file_download)
                  ),
                  onTap: (){
                  
                  },
                ),
              ),
       verticalSpaceLarge,
      GestureDetector(
                child: Padding(
                  padding: const EdgeInsets.only(left: 6.0, right:6.0, bottom: 20),
                  child: Container(
                    height: 50,
                    child: Material(
                      child: Center(
                        child: Text('Send Check-in Instructions',
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
                  model.authenticateReservation(
                    bookChanl: bookingChannelController.text,
                    checkinD: checkinController.text,
                    checkoutD: checkoutController.text,
                    guestEmail: guestEmailController.text,
                    guestName: nameofGuestController.text,
                    propertyID: propertyID
                  );

                },
              ),
      verticalSpaceSmall,
              GestureDetector(
                child: Padding(
                  padding: const EdgeInsets.only(left: 6.0, right:6.0, bottom: 20),
                  child: Container(
                    height: 50,
                    child: Material(
                      child: Center(
                        child: Text('Delete Reservation',
                          style: TextStyle(
                              color: AppColor.white,
                              fontSize: 17.0,
                              fontWeight: FontWeight.bold
                          ),),
                      ),
                      color: Color(0xFFD24E4E),
                      shape: RoundedRectangleBorder(
                          borderRadius: new BorderRadius.circular(18.0),
                          side: BorderSide(color: AppColor.borderColor)
                      ),

                    ),
                  ),
                ),
                onTap: (){
                  // return showDialog(
                  //     context: context,
                  //     builder: (context) {
                  //       return deleteDialog(context, model, propertyNameController.text);
                  //     }
                  // );
                },
              )

],
            ),
          )
        ),
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
}