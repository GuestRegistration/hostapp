import 'package:firebase_remote_config/firebase_remote_config.dart';
import 'package:flutter/material.dart';
//import 'package:google_places_flutter/google_places_flutter.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:hostapp/src/style/AppImage.dart';
import 'package:hostapp/src/style/AppTextStyle.dart';
import 'package:hostapp/src/util/constants.dart';
import 'package:hostapp/src/widget/CollectText.dart';
import 'package:hostapp/src/widget/input_field.dart';
import 'package:hostapp/src/widget/ui_helpers.dart';
import 'package:hostapp/src/style/AppFontSizes.dart';
import 'package:hostapp/src/viewmodels/ProViewModel.dart';
import 'package:provider_architecture/provider_architecture.dart';
import 'package:flutter_google_places/flutter_google_places.dart';
import 'package:google_maps_webservice/places.dart';
import 'package:google_places_flutter/google_places_flutter.dart';
import 'package:flutter_google_places/flutter_google_places.dart';
import 'package:flutter/material.dart';
import 'dart:math';

class ProScreen extends StatefulWidget {
  @override
  _ProScreenState createState() => _ProScreenState();
}

class _ProScreenState extends State<ProScreen> {
  TextEditingController controller = new TextEditingController();
String error ='Error Message';
TextEditingController propertyNameController =  TextEditingController();
 TextEditingController addressController = TextEditingController();

  @override
  Widget build(BuildContext context) {
   return ViewModelProvider<ProViewModel>.withConsumer(
      viewModel: ProViewModel(),
      onModelReady: (model) => model.setupRemoteConfig(),
      builder: (context, model, child) =>
       Scaffold(
    resizeToAvoidBottomPadding: true,
      body: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Column(
            children: <Widget>[
               horizontalSpaceLarge,
                horizontalSpaceLarge,
               headerButton(),
                Padding(
                     padding: const EdgeInsets.all(8.0),
                     child: Text('Pro Screen', //Pro Screen
                      style:  TextStyle(
              color: AppColor.black,
              fontSize: AppFontSizes.largest,
              fontWeight: FontWeight.bold
            )
          ),), 

          //  GestureDetector(
          //       child: Padding(
          //         padding: const EdgeInsets.only(left: 6.0, right:6.0, bottom: 20),
          //         child: Container(
          //           height: 50,
          //           child: Material(
          //             child: Center(
          //               child: Text('OPen Second.',
          //                 style: TextStyle(
          //                     color: AppColor.white,
          //                     fontSize: 17.0,
          //                     fontWeight: FontWeight.bold
          //                 ),),
          //             ),
          //             color: Color(0xFF45A1C9),
          //             shape: RoundedRectangleBorder(
          //                 borderRadius: new BorderRadius.circular(18.0),
          //                 side: BorderSide(color: AppColor.borderColor)
          //             ),

          //           ),
          //         ),
          //       ),
          //       onTap: (){
          //        secondPlace(model);
          //       },
          //     ),
          //      CollectText(ttile: 'Property Name',),
          //      GestureDetector(
          //             child:  TextFormField(
          //               controller: propertyNameController,
          //           keyboardType: TextInputType.text,
          //           decoration:  InputDecoration(
          //             enabledBorder: new OutlineInputBorder(
          //             borderRadius: BorderRadius.circular(8.0),
          //             borderSide: new BorderSide(color: AppColor.borderColor,
          //             ),
          //         ),
          //           border: new OutlineInputBorder(
          //             borderRadius: BorderRadius.circular(8.0),
          //             borderSide: new BorderSide(color: AppColor.borderColor
          //             ),
          //         ),
          //           hintStyle: AppTextStyle.inputHint(context),
          //         ),
          //          onTap: ()async{
          //             secondPlace(model);
          // },
          //         ),  
          //         ),
          //          CollectText(ttile: 'Property Address',),
          //           InputField(
          //           placeholder: 'PropertyAddress',
          //           decoration: null,
          //           controller: addressController,
          //         ),
    //            GooglePlaceAutoCompleteTextField(
    //    googleAPIKey: 'AIzaSyCBRhAT9zrldvx7CMcdDgPt0VlCNLPtKpM',//model.key,
    //     textEditingController: controller,
    //     inputDecoration :InputDecoration(
    //   border: new OutlineInputBorder(
    //             borderRadius: BorderRadius.circular(8.0),
    //             borderSide: new BorderSide(color: AppColor.secondaryDeep,
    //             ),
    //         ),
    //   enabledBorder: new OutlineInputBorder(
    //             borderRadius: BorderRadius.circular(8.0),
    //             borderSide: new BorderSide(color: AppColor.inputTextCorderColor,
    //             ),
    //         ),
    //           ),
    //     debounceTime: 200, // default 600 ms,
    //     itmClick: (prediction) {
    //      controller.text=prediction.description;
    //       controller.selection = TextSelection.fromPosition(TextPosition(offset: prediction.description.length));
          
    //       print('***************************************************');
    //       print(prediction.structuredFormatting.secondaryText); //property Address Oluyole Local Government, 7up Road, Ibadan, Nigeria
    //        print(prediction.structuredFormatting.mainText);//property Name  O'Bounce Technologies Ltd
    //       print(prediction.description); //Full Address.  O'Bounce Technologies Ltd, Oluyole Local Government, 7up Road, Ibadan, Nigeria
       
    //     }
    // ),
    // SizedBox(height: 30,),
    // Text('Message: $error', style: TextStyle(
    //            color:AppColor.kErrorRed,
    //            fontSize: 17.0,
    //            fontWeight: FontWeight.normal
    //        ),)
      ],),
      ),
    ),
      );
  }

  secondPlace(ProViewModel model)async{
    Prediction prediction = await PlacesAutocomplete.show(
                          context: context,
                          apiKey: model.key,
                          mode: Mode.overlay, // Mode.fullscreen
                         // sessionToken: controller.text,
                          onError: (value) {
                            errorMessage(message: value.errorMessage);
                          },
                         // components: [Component(Component.country, "en")],
                          );
                          propertyNameController.text=prediction.structuredFormatting.mainText;
          //addressController.selection = TextSelection.fromPosition(TextPosition(offset: prediction.structuredFormatting.mainText.length));
          setState(() {
            addressController.text = prediction.structuredFormatting.secondaryText;
          });
        //  print('*****************SECOND PLACE**********************************');
        //  print(controller.text);
        //  print(prediction.structuredFormatting.secondaryText); //property Address Oluyole Local Government, 7up Road, Ibadan, Nigeria
        //   print(prediction.structuredFormatting.mainText);//property Name  O'Bounce Technologies Ltd
        //  print(prediction.description); //Full Address.  O'Bounce Technologies Ltd, Oluyole Local Government, 7up Road, Ibadan, Nigeria
        //     print('***************************************************');
            errorMessage(message: prediction.description);
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

errorMessage({String message}){
  setState((){
error = message;
  });

}

}
