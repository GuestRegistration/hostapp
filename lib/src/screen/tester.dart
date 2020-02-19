import 'package:country_code_picker/country_code_picker.dart';
import 'package:flutter/material.dart';
import 'package:hostapp/src/screen/Mobile/AddPropertyMobile.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:hostapp/src/style/AppFontSizes.dart';
import 'package:hostapp/src/style/AppImage.dart';
import 'package:hostapp/src/style/AppTextStyle.dart';
import 'package:flutter_icons/flutter_icons.dart';
import 'package:hostapp/src/viewmodels/AddProperty_view_mode.dart';
import 'package:hostapp/src/widget/busy_button.dart';
import 'package:hostapp/src/widget/input_field.dart';
import 'package:hostapp/src/widget/CollectText.dart';
import 'package:hostapp/src/widget/propertButton.dart';
import 'package:hostapp/src/widget/ui_helpers.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:provider_architecture/provider_architecture.dart';
import 'package:responsive_builder/responsive_builder.dart';

class Tester extends StatefulWidget {
  @override
  _TesterState createState() => _TesterState();
}

class _TesterState extends State<Tester> {
    TextEditingController propertyNameController = TextEditingController();
   TextEditingController addressController = TextEditingController();
   TextEditingController emailcontroller = TextEditingController();
    TextEditingController phoneNumber = TextEditingController();
    TextEditingController rulesController = TextEditingController();
  

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
              child: Column(
          children: <Widget>[
              horizontalSpaceLarge,
                    horizontalSpaceLarge,
                    horizontalSpaceLarge,
            Padding(
              padding: const EdgeInsets.only(top: 50.0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                
                 Padding(
                   padding: const EdgeInsets.all(8.0),
                   child: Text('Add Property', style: GoogleFonts.abhayaLibre(
          textStyle: TextStyle(
            color: AppColor.black,
            fontSize: AppFontSizes.largest,
          )
        ),),
                 ), ],),
            ),
            SingleChildScrollView(
          child: screen1(), //swtichScreen(model, context)
        ),
          ],
        ),
      )
   
    );
  
}

//Index 1
  screen1(){
      return  Padding(
          padding: const EdgeInsets.only(left: 15.0, right: 15.0),
          child: Column(
            children: <Widget>[
                 verticalSpaceMedium,
               CollectText(ttile: 'Property Name',),
                  InputField(
                    placeholder: 'h',
                    isReadOnly: false,
                    decoration: null,
                    controller: propertyNameController,
                  ),
                  verticalSpaceSmall,
                   CollectText(ttile: 'Property Address',),
                  InputField(
                    placeholder: '',
                    controller: addressController,
                  ),
                  TextField(
                        obscureText: true,
                        controller: null,
                        keyboardType: TextInputType.visiblePassword,
                        style: TextStyle(
                          fontSize: 18,
                          color: Color.fromRGBO(195, 33, 72,1.0),
                        ),
                        decoration: InputDecoration(
                            icon: Icon(Icons.lock,
                              color: Colors.red,),
                          hintText: 'ادخل كلمة السر', //Enter the password
                          border: new OutlineInputBorder(
                              borderRadius: BorderRadius.circular(8.0)
                        ),
                      ),
                      ),

                    verticalSpaceSmall,
                     CollectText(ttile: 'Contact Email',),
                  InputField(
                    placeholder: '',
                    controller: emailcontroller,
                    textInputType: TextInputType.emailAddress,
                  ),

                   verticalSpaceSmall,
                    CollectText(ttile: 'PhoneNumber',),
                  InputField(
                    placeholder: '',
                    controller: phoneNumber,
                    textInputType: TextInputType.number,
                    decoration:  InputDecoration(
                                          border: InputBorder.none,
                                          hintText: "xxxxxx",
                                          hintStyle: AppTextStyle.inputHint(context),
                                          icon: CountryCodePicker(
                                         onChanged: (value){
                                           
                                         },
                                        initialSelection: '+1',
                                        favorite: ['+39','FR'],
                                        showCountryOnly: false,
                                        alignLeft: false,
                                      ),
                                        ),
                    
                    
                  ),
 verticalSpaceSmall,
 verticalSpaceSmall,
                  MaterialButton(
                  child: Text('Continue',
                  style: TextStyle(
                    color: AppColor.white,
                    fontSize: 17.0,
                    fontWeight: FontWeight.bold
                  ),),
                  color: AppColor.black,
                 
                )

            ],
          ),
        );
     
  }


}