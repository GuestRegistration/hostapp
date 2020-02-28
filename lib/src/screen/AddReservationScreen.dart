import 'package:flutter/material.dart';
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:hostapp/src/style/AppFontSizes.dart';
import 'package:hostapp/src/viewmodels/addReservation.dart';
import 'package:hostapp/src/widget/CollectText.dart';
import 'package:hostapp/src/widget/input_field.dart';
import 'package:hostapp/src/util/customFunctions.dart';
import 'package:hostapp/src/widget/ui_helpers.dart';
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
     // onModelReady: (model) => model.initialize(),
      builder: (context, model, child) =>
          Scaffold(
        body: SingleChildScrollView(
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
                            child: InputField(
                          placeholder: 'Check in',
                          controller: checkinController,
                          textInputType: TextInputType.text,
                    ), ), ],
                      ),
                     
                      Column(
                        children: <Widget>[
                            verticalSpaceSmall,
                         CollectTextWithout(title: 'Check out',),
                         Container(
                           height: 70,
                           width: 150,
                        child: TextFormField(
                          controller: null,
                          decoration :InputDecoration(
                        border: new OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(8.0),
                                  borderSide: new BorderSide(color: AppColor.secondaryDeep,
                                  ),
                              ),
                        enabledBorder: new OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(8.0),
                                  borderSide: new BorderSide(color: AppColor.inputTextCorderColor,
                                  ),
                              ),
                        )
                       ),), ],
                      ),
                        ],
                      ),
                        verticalSpaceLarge,
                   GestureDetector(
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
                  
                },
              )
              ],
            ),
          ) 
                
        ),

      ),
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
}