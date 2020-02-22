import 'package:country_code_picker/country_code_picker.dart';
import 'package:country_list_pick/country_list_pick.dart';
import 'package:flutter/material.dart';
import 'package:hostapp/src/screen/Mobile/AddPropertyMobile.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:hostapp/src/style/AppFontSizes.dart';
import 'package:hostapp/src/style/AppImage.dart';
import 'package:hostapp/src/style/AppText.dart';
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


class AddProprtyLoadingScreen extends StatefulWidget {
  @override
  _AddProprtyLoadingScreenState createState() => _AddProprtyLoadingScreenState();
}

class _AddProprtyLoadingScreenState extends State<AddProprtyLoadingScreen> {

  @override
  Widget build(BuildContext context) {
    return ViewModelProvider<AddPropertyViewModel>.withoutConsumer(
      viewModel: AddPropertyViewModel(),
      onModelReady: (model) => model.savedData(),
      builder: (context, model, child) =>
          Scaffold(
        body: Center(
          child: Column(
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
                child: Text(AppText.addPHoldOn,
                 textAlign: TextAlign.center,
                  style: TextStyle(
                    color: Colors.grey,
                fontSize: AppFontSizes.medium,
                fontWeight: FontWeight.bold
                          ),),

                         
              ),
               SizedBox(height: 50,),
                 Center(
                child: Text('Am here because, have not yet send data to GraphQl API ',
                 textAlign: TextAlign.center,
                  style: TextStyle(
                    color: Colors.grey,
                fontSize: AppFontSizes.small,
                fontWeight: FontWeight.normal
                          ),),
              ),
               GestureDetector(
                                                  child: Padding(
                    padding: const EdgeInsets.all(1.0),
                    child: Container(
                      width: 150,
                      height: 50,
                      child: Material(
                      child: Center(
                          child: Text('Proceed',
                          style: TextStyle(
                            color: AppColor.white,
                            fontSize: 17.0,
                            fontWeight: FontWeight.bold
                          ),),
                      ),
                      color:Color(0xFF45A1C9),
                      shape: RoundedRectangleBorder(
        borderRadius: new BorderRadius.circular(18.0),
            side: BorderSide(color: AppColor.borderColor)
    ),
                ),
                    ),
                  ),
                  onTap: (){
                    model.afterloading();
                  },
                        ),
                      

            ],
          ),
        ),
      ),
    );
  }
}