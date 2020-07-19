import 'package:flutter/material.dart';
import 'package:country_code_picker/country_code_picker.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:hostapp/src/screen/Mobile/AddPropertyMobile.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:hostapp/src/viewmodels/AddReservationViewModel.dart';
import 'package:hostapp/src/style/AppFontSizes.dart';
import 'package:hostapp/src/widget/ui_helpers.dart';
import 'package:provider_architecture/provider_architecture.dart';
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/util/customFunctions.dart';


class SendCheckInInstruction extends StatefulWidget {
  final List<String> movedData;

  const SendCheckInInstruction({this.movedData});

  @override
  _SendCheckInInstructionState createState() => _SendCheckInInstructionState();
}

class _SendCheckInInstructionState extends State<SendCheckInInstruction> {
   final CustomFuntion _customFuntion = locator<CustomFuntion>();
    TextEditingController instructionController = new TextEditingController();

  @override
  Widget build(BuildContext context) {
    return ViewModelProvider<AddReservationViewModel>.withConsumer(
       viewModelBuilder: () => AddReservationViewModel(),
      builder: (context, model, child) =>
          Scaffold(
         body: SingleChildScrollView(
                    child: Padding(
       padding: const EdgeInsets.only(left: 15.0, right: 15.0),
        child: Column(
              children: <Widget>[
                Padding(
                    padding: const EdgeInsets.only(top: 50.0),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: <Widget>[
                       Padding(
                         padding: const EdgeInsets.all(8.0),
                         child: Text('Check-in Instructions', style:  TextStyle( //Property Rules
                  color: AppColor.black,
                  fontSize: AppFontSizes.largest,
                  fontWeight: FontWeight.bold
                )
              ),),
              ],),
                  ),
                  verticalSpaceSmall,
                 Text('Tell your guests what they need to know about your property for a frictionless check-in experience. ',
                 textAlign: TextAlign.center, 
                 style: TextStyle(
              color: Colors.grey,
              fontSize: AppFontSizes.medium,
              fontWeight: FontWeight.normal
            )
        ),

                   Row(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: <Widget>[
                    Padding(
                  padding: const EdgeInsets.only(top: 8.0),
                  child: _customFuntion.errorUimessage(errorMessage: model.errorM),
                ),
                  ],
                ),
                verticalSpaceMedium,
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
                      labelText: 'Type or paste instructions here',
                      labelStyle: TextStyle(

                      )
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
                    model.checkInInstrusion(instruction: instructionController.text, moved: widget.movedData);
                  },
                )
                
              
              ],
        ),
      ),
         ),
          ),
    );
  }
}