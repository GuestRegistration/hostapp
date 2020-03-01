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

class AddReservationScreen extends StatefulWidget {
  @override
  _AddReservationScreenState createState() => _AddReservationScreenState();
}

class _AddReservationScreenState extends State<AddReservationScreen> {
    final CustomFuntion _customFuntion = locator<CustomFuntion>();
   TextEditingController nameofGuestController = TextEditingController();
   TextEditingController guestEmailController = new TextEditingController();
    TextEditingController bookingChannelController = new TextEditingController();
     TextEditingController checkinController = new TextEditingController();
     TextEditingController checkoutController = new TextEditingController();
      TextEditingController inviteInLinkController = new TextEditingController();
     DateTime date = DateTime.now();
       String _selectedProperty = '', _selectedID = ''; //
         

     @override
  void initState() {
    super.initState();
     listener(nameofGuestController);
    listener(guestEmailController);
    listener(bookingChannelController);
    listener(checkinController);
    listener(checkoutController);
  }
     
  @override
  Widget build(BuildContext context) {
    return ViewModelProvider<AddReservationViewModel>.withConsumer(
      viewModel: AddReservationViewModel(),
      onModelReady: (model) => model.initialize(),
      builder: (context, model, child) =>
       Scaffold(
        body: (model.busy ? Center(
        child: CircularProgressIndicator(
                    strokeWidth: 4,
                          valueColor: AlwaysStoppedAnimation<Color>(AppColor.primary, ),
                          backgroundColor: AppColor.borderColor,
                    ),
      )
      : SingleChildScrollView(
                child: Padding(
            padding: const EdgeInsets.only(left: 15.0, right: 15.0),
            child: Column(
              children: <Widget>[ 
                 horizontalSpaceLarge,
                horizontalSpaceLarge,
               headerButton(),
                Padding(
                     padding: const EdgeInsets.all(8.0),
                     child: Text('Add a reservation', style:  TextStyle(
              color: AppColor.black,
              fontSize: AppFontSizes.largest,
              fontWeight: FontWeight.bold
            )
          ),), 
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
                          child: DropdownButton(
                            isExpanded: true,
                                underline: SizedBox(),
                                items: model.getPropertiesList().map((GetProperties lang) {
                                return DropdownMenuItem<GetProperties>(
                                          value: lang,
                                          child: Text(lang.name.toString(), 
                                          style: TextStyle(fontWeight: FontWeight.bold, color: Colors.black),),
                                        );
                                            }).toList(),
                                onChanged: (GetProperties val) {
                                  setState(() {
                                     _selectedProperty= val.name;
                                     _selectedID= val.id;
                                    //  print(_selectedID);
                                    //  print(_selectedProperty);

                                  });
                                    },
                              ),
                        ),
                  //  FindDropdown(
                  //   items: model.properties.map((value)),
                  //   label: "Select Property",
                  //   onChanged:(value){
                  //     model.selectedProperty = value[0].name;
                  //     print(model.selectedProperty.toString());
                  //   },
                  //   selectedItem: '',
                  //   validate: (item) {
                  //     if (item == null)
                  //       return "Required field";
                  //     else if (item == "NO")
                  //       return "Invalid item";
                  //     else
                  //       return null;
                  //   },
                  // ),
                 
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
                        (model.busy ? CircularProgressIndicator(
                  strokeWidth: 4,
                        valueColor: AlwaysStoppedAnimation<Color>(AppColor.primary, ),
                        backgroundColor: AppColor.borderColor,
                  ):
                  (model.linkUIVisisblity ? SizedBox.shrink() //Remove button if it's true;
                  : GestureDetector(
                child: Padding(
                  padding: const EdgeInsets.only(left: 6.0, right:6.0, bottom: 20),
                  child: Container(
                    height: 50,
                    child: Material(
                      child: Center(
                        child: Text('Generate Check-In Link',
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
                    propertyID: _selectedID
                  );

                },
              ))
              )
                   
              ],
            ),
          
          
          ) 
                
        )
        
      ))
    
      
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
}