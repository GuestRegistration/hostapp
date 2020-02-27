import 'package:country_code_picker/country_code_picker.dart';
import 'package:country_list_pick/country_list_pick.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
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
import 'package:hostapp/src/util/constants.dart';
import 'package:hostapp/src/widget/ui_helpers.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:international_phone_input/international_phone_input.dart';
import 'package:provider_architecture/provider_architecture.dart';
import 'package:responsive_builder/responsive_builder.dart';
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/util/customFunctions.dart';


class AddPropertyView extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ViewModelProvider<AddPropertyViewModel>.withoutConsumer(
      viewModel: AddPropertyViewModel(),
      onModelReady: (model) => model.initialize(),
      builder: (context, model, child) =>
      
      //Check device screen type 
      ScreenTypeLayout(
  mobile: OrientationLayoutBuilder(
          landscape: (context) => AddPropertyLandscape(),
          portrait: (context) =>  AddPropertyPortrait()
                ),
  tablet: AddPropertyLandscape(),
)
      );
  }
}

class AddProprtyUI extends StatefulWidget {
final AddPropertyViewModel model;

   AddProprtyUI(this.model);

  @override
  _AddProprtyUIState createState() => _AddProprtyUIState();
}

class _AddProprtyUIState extends State<AddProprtyUI> {
    TextEditingController propertyNameController =  TextEditingController();

   TextEditingController addressController = TextEditingController();

   TextEditingController emailcontroller = new TextEditingController();

    TextEditingController phoneNumber = new TextEditingController();


    final CustomFuntion _customFuntion = locator<CustomFuntion>();
    FocusNode focusNode = new FocusNode();
    String defaultCountry = 'United State';
    TextEditingController rulesController = new TextEditingController();
    TextEditingController docuemntController = new TextEditingController(text: '');
 String phoneIsoCode = '+1';

    @override
  void initState() {
    // TODO: implement initState
    super.initState();
    listener(propertyNameController);
    listener(addressController);
    listener(emailcontroller);
    listener(phoneNumber);
    listenerScreen2(rulesController);
     listenerScreen2(docuemntController);
     widget.model.setCountry(selectedcountry: defaultCountry);
  }
  
// void onPhoneNumberChange(String number, String internationalizedPhoneNumber, String isoCode) {
//     setState(() {
//        phoNumber = number;
//        phoneIsoCode = isoCode;
//        print('******Phone Number: ${phoNumber}');
//        print('*****ISO CODE: $phoneIsoCode');
//     });
// }


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
              child: Column(children: <Widget>[
                Column(
          children: <Widget>[
              horizontalSpaceLarge,
            horizontalSpaceLarge,
           swtichScreen(widget.model, context)
          ],
        ),
              ],)
      ),

    );
  }

swtichScreen( AddPropertyViewModel model, BuildContext context){
  if(model.pageIndex == 0){
    return screen1(context, model);
  // }else if(model.pageIndex == 2){ //Not in MVP
  //    return screen2(context, model);

  }else if(model.pageIndex == 1){
     return screen2(context, model);
  }
}

  screen1(BuildContext context, AddPropertyViewModel model, ){
      return  Padding(
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
                   child: Text('Add Property', style:  TextStyle(
            color: AppColor.black,
            fontSize: AppFontSizes.largest,
            fontWeight: FontWeight.bold
          )
        ),), ],),
            ),
           _customFuntion.errorUimessage(errorMessage: model.errorM),
                 verticalSpaceSmall,
               
               CollectText(ttile: 'Property Name',),
                  InputField(
                    placeholder: 'PropertyName',
                    decoration: null,
                    controller: propertyNameController,
                  ),
                
                  verticalSpaceSmall,
                   CollectText(ttile: 'Property Address',),
                  InputField(
                    placeholder: 'Address',
                    decoration: null,
                    controller: addressController,
                  ),
                   verticalSpaceSmall,
                    CollectText(ttile: 'Country',),
                  Row(children: <Widget>[
Expanded(
     child: Container(
                          decoration: new BoxDecoration(
                        color: AppColor.fieldDecoration,
                     borderRadius: new BorderRadius.only(
                          topLeft: const Radius.circular(8.0),
                          topRight: const Radius.circular(8.0),
                          bottomLeft: const Radius.circular(8.0),
                          bottomRight: const Radius.circular(8.0),
                          ),
                          ),
                         child: CountryListPick(
                          isShowFlag: true,
                          isShowTitle: true,
                          isDownIcon: true,
                          initialSelection: '+1',
                          onChanged: (code) {
                             model.setCountry(selectedcountry:code.name.toString());
                             setState(() {
                               phoneIsoCode = code.dialCode;
                             });
                          //  print(code.name); //country
                            // print(code.code); //AD
                            // print(code.dialCode); //+376
                            // print(code.flagUri);
                          },
                        ),
                        ),
                      ),
                  ],),
                    verticalSpaceSmall,
                     CollectText(ttile: 'Contact Email',),
                  InputField(
                    placeholder: '',
                    controller: emailcontroller,
                    textInputType: TextInputType.emailAddress,
                    onChanged: (value){
                      
                     
                    },
                  ),

                   verticalSpaceSmall,
                    CollectText(ttile: 'PhoneNumber',),
                      // InternationalPhoneInput(
                      // onPhoneNumberChange: onPhoneNumberChange, 
                      // initialPhoneNumber: phoNumber,
                      // initialSelection: phoneIsoCode,
                      
                      
                      //      ),
                    InputField(
                   placeholder: 'PhoneNumber',
                    controller: phoneNumber,
                    textInputType: TextInputType.number,
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
                    hintText: "xxxxxx",
                    hintStyle: AppTextStyle.inputHint(context),
                    prefixIcon: Padding(
                      padding: const EdgeInsets.only(right: 10),
                      child: ClipRRect(
                         borderRadius: BorderRadius.circular(8.0),
                        child: Container(
                          decoration: new BoxDecoration(
                        color: AppColor.fieldDecoration,
                       borderRadius: new BorderRadius.only(
                          topLeft: const Radius.circular(8.0),
                          topRight: const Radius.circular(8.0),
                          bottomLeft: const Radius.circular(8.0),
                          bottomRight: const Radius.circular(8.0),
                          ),
                          
                          ),
                         child: CountryCodePicker(
                  onChanged: (value){
                      
                  },
                  initialSelection: '+1',
                  favorite: ['+39','FR'],
                  showCountryOnly: false,
                  alignLeft: false,
                ),
                        ),
                      ),
                    ),
                    
                  ),
                  ),
 verticalSpaceSmall,
 verticalSpaceSmall,
                   Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: <Widget>[
                        GestureDetector(
                                                  child: Padding(
                    padding: const EdgeInsets.all(1.0),
                    child: Container(
                      width: 150,
                      height: 50,
                      child: Material(
                      child: Center(
                          child: Text('Cancel',
                          style: TextStyle(
                            color: AppColor.white,
                            fontSize: 17.0,
                            fontWeight: FontWeight.bold
                          ),),
                      ),
                      color: (model.isDataEntered ? Color(0xFF45A1C9) : AppColor.disableButton),
                      shape: RoundedRectangleBorder(
        borderRadius: new BorderRadius.circular(18.0),
            side: BorderSide(color: AppColor.borderColor)
    ),
                   
                ),
                    ),
                  ),
                  onTap: (){
                    if(model.isDataEntered){
                           return showDialog(
                      context: context,
                      builder: (context) {
                       return errasedAll(context);
                      }
                  );
                  
                    }
                  },
                        ),
                        
                  horizontalSpaceSmall,
                  (model.busy ? CircularProgressIndicator() :
                  GestureDetector(
                       child: Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Container(
                        width: 150,
                        height: 50,
                        child: Material(
                        child: Center(
                          child: Text('Continue', //If all field is entered, Display complete else Skip
                          style: TextStyle(
                            color: AppColor.white,
                            fontSize: 17.0,
                            fontWeight: FontWeight.bold
                          ),),
                        ),
                        color:  (model.continueButton ? Color(0xFF45A1C9) : AppColor.disableButton),
                        shape: RoundedRectangleBorder(
        borderRadius: new BorderRadius.circular(18.0),
            side: BorderSide(color: AppColor.borderColor)
    ),
                       
                ),
                      ),
                    ),
                    onTap: (){
                    //   // if(model.continueButton == false){
                    //   //   //DO Nothing
                    //   // }else{
                        if(model.getCountry == null){
                        model.setCountry(selectedcountry: defaultCountry);
                            }
                        model.movetoScreen2(
                        address: addressController.text.trim(),
                        contactEmail: emailcontroller.text.trim(),
                        phoneN: phoneNumber.text.trim(),
                        isoCod: phoneIsoCode,
                        country: model.getCountry,
                        propertyName: propertyNameController.text.trim()
                      );
                    //  // }
                    },
                  ))
                    
                      ],
                    )


            ],
          ),
        );
  }

 screen2(BuildContext context, AddPropertyViewModel model, ){
      return  Padding(
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
                   child: Text('Add a Property ', style:  TextStyle( //Property Rules
            color: AppColor.black,
            fontSize: AppFontSizes.largest,
            fontWeight: FontWeight.bold
          )
        ),), ],),
            ),
               verticalSpaceSmall,
               Text('Property Rules and T&C Document', style: TextStyle(
            color: Colors.grey,
            fontSize: AppFontSizes.medium,
            fontWeight: FontWeight.bold
          )
        ),
        verticalSpaceMedium,
               TextField(
                  keyboardType: TextInputType.multiline,
                  controller: rulesController,
                   maxLines: 10,
                  decoration: InputDecoration(
                    border: OutlineInputBorder(),
                      enabledBorder: new OutlineInputBorder(
                        borderRadius: BorderRadius.circular(8.0),
                        borderSide: new BorderSide(color: AppColor.borderColor,
                        ),
                      ),
                    labelText: 'Paste your property rules here..',
                    labelStyle: GoogleFonts.abel(
                    )
                  ),
                  // onChanged: (value){
                  //     if(model.selectedDocument == null && rulesController.text.isEmpty){
                  //         model.setPropertyRulesButtonStatus(false);
                        
                  //     }else{
                  //       model.setPropertyRulesButtonStatus(true);
                  //     }
                  //   },
                ),
                      verticalSpaceLarge,
Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Row(
                    children: <Widget>[
     Text('Terms & Conditions', textAlign: TextAlign.left, style: TextStyle(
                     fontSize: AppFontSizes.medium,
                   ),),
                    ],
                    
                  ),
                ),
                //  textInputField(
                //       placeholder: 'Attached document here',
                //     controller: rulesController,
                //   ),
                 GestureDetector(
                       child: TextField(
                  //  obscureText: false,
                    controller: docuemntController,
                    decoration: InputDecoration(
                      border: OutlineInputBorder(),
                        enabledBorder: new OutlineInputBorder(
                          borderRadius: BorderRadius.circular(8.0),
                          borderSide: new BorderSide(color: AppColor.borderColor,
                          ),
                        ),
                      labelText:   (model.selectedDocument == null ? 'Attached document here' : 'Document attached'),
                      suffixIcon: Icon(Icons.attachment)
                    ),
                    onTap: (){
                        //TODO Select Document from Gallery.
                      model.pickDocument(docuemntController);
                       if(docuemntController.text.isNotEmpty && rulesController.text.isNotEmpty){
                        model.setPropertyRulesButtonStatus(true);
                      }else{
                          model.setPropertyRulesButtonStatus(false);
                      }
                    },
                ),
                 ),
  verticalSpaceLarge,
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: <Widget>[
                        GestureDetector(child: Padding(
                    padding: const EdgeInsets.all(1.0),
                    child: Container(
                      width: 150,
                      height: 50,
                      child: Material(
                      child: Center(
                          child: Text('Cancel',
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
                      //model.goback();
                  },
                        ),
                        
                  horizontalSpaceSmall,
                  GestureDetector(
                    child: Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Container(
                        width: 150,
                        height: 50,
                        child: Material(
                        child: Center(
                          child: Text((model.isPropertyRulesSet ? 'Complete' : 'Skip'), //If all field is entered, Display complete else Skip
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
    ),  ),
                      ),
                    ),
                    onTap: (){
                       model.lastScreenbutton(
                       rules: rulesController.text.trim(),
                    );
                    },
                  ),
                  // BusyButton(
                  //     title: 'Skip',
                  //     busy: model.busy,
                  //     onPressed: () {
                  //        //TODO Submit all to Firestore
                  //     model.lastScreenbutton(
                  //      propertyName: propertyNameController.text.trim(),
                  //     address: addressController.text.trim(),
                  //     contactEmail: emailcontroller.text.trim(),
                  //       phoneN: phoneNumber.text.trim(),
                  //       image: model.selectedImage,
                  //       propertyRule: rulesController.text.trim()
                  //   );
                  //   print(propertyNameController.text);
                  //     },
                  //   )
                      ],
                    )
            ],
          ),
        );
     
  }

  textInputField({
      final TextEditingController controller,
  final TextInputType textInputType,
  final bool password = false,
  final bool isReadOnly = false,
  final String placeholder,
  final String validationMessage,
  final Function enterPressed,
  final bool smallVersion = false,
  final FocusNode fieldFocusNode,
  final FocusNode nextFocusNode,
  final TextInputAction textInputAction,
  final String additionalNote,
  final Function(String) onChanged,
  final InputDecoration decoration,
  final TextInputFormatter formatter,
  final BuildContext context
 }
  ){


  double fieldHeight = 55;

   return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: <Widget>[
        Row(
            children: <Widget>[
              Expanded(
                child: Theme(
                  data: new ThemeData(
            primaryColor: AppColor.borderColor,
            primaryColorDark: AppColor.borderColor,
          ),
           child: TextFormField(
                    controller: controller,
                    keyboardType: textInputType,
                    focusNode: fieldFocusNode,
                    textInputAction: textInputAction,
                    onChanged: onChanged,
                    inputFormatters: formatter != null ? [formatter] : null,
                    onEditingComplete: () {
                      if (enterPressed != null) {
                        FocusScope.of(context).requestFocus(FocusNode());
                        enterPressed();
                      }
                    },
                    onFieldSubmitted: (value) {
                      if (nextFocusNode != null) {
                        nextFocusNode.requestFocus();
                      }
                    },
                    obscureText: password,
                    readOnly: isReadOnly,
                    
                    decoration: (decoration == null ? InputDecoration(
                    
                        border: new OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(8.0),
                                  borderSide: new BorderSide(color: AppColor.borderColor,
                                  ),
                              ),
                               enabledBorder: new OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(8.0),
                                  borderSide: new BorderSide(color: AppColor.borderColor,
                                  ),
                              ),
                        hintStyle:TextStyle(fontSize: smallVersion ? 12 : 15)) : 
                          decoration)
                  ),
                ),
              ),
            ],
          ),
      ],
    );
}

 listener(TextEditingController controller){
   controller.addListener(() {
      if(controller.text.isNotEmpty){
                    widget.model.setdataEnterdStatus(true);
                      }else{
                        widget.model.setdataEnterdStatus(false);
                      }

      if(propertyNameController.text.isNotEmpty && addressController.text.isNotEmpty && widget.model.getCountry != null &&
      emailcontroller.text.isNotEmpty && phoneNumber.text.isNotEmpty){
        widget.model.setCountinueButton(true);
      }else{
        widget.model.setCountinueButton(false);
      }
      
    });
}
listenerScreen2(TextEditingController controller){
    controller.addListener(() {
      // if(controller.text.isNotEmpty){
      //               widget.model.setdataEnterdStatus(true);
      //                 }else{
      //                   widget.model.setdataEnterdStatus(false);
      //                 }

      if(rulesController.text.isNotEmpty && docuemntController.text.isNotEmpty){
        widget.model.setPropertyRulesButtonStatus(true);
      }else{
        widget.model.setPropertyRulesButtonStatus(false);
      }
      
    });
}

errasedAll(BuildContext contex){
  return Center(
        child: Dialog(
           elevation: 0,
          backgroundColor: Colors.transparent,
          child: Container(
            height: MediaQuery.of(contex).size.height /4.6,
            child: Card(
                  elevation: 10,
                  shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.only(
                    bottomRight: Radius.circular(20),
                    bottomLeft: Radius.circular(20),
                    topLeft:Radius.circular(20),
                    topRight: Radius.circular(20))
),
                              child: Padding(
                                padding: const EdgeInsets.only(top: 10.0),
                                child: Column(children: <Widget>[
                                  Padding(
                                    padding: const EdgeInsets.only(top: 10.0, right: 10, left: 10,),
                                    child: Column(
                                      mainAxisAlignment: MainAxisAlignment.start,
                                      crossAxisAlignment: CrossAxisAlignment.start,
                                      children: <Widget>[
                                      Text('Are you sure?', style:  TextStyle(
                                        color: AppColor.black,
                                        fontSize: AppFontSizes.medium,
                                        fontWeight: FontWeight.bold
                                      )),
                                      SizedBox(height: 10,),
                                    Text('The information you entered will not be saved.',
                                    style: TextStyle(
                                      color: Colors.grey,
                                      fontSize: AppFontSizes.medium,
                                      fontWeight: FontWeight.bold
                                    )),
                                    ],),
                                  ),
                                  SizedBox(height: 10,),
                                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[
                      Expanded(
                    child: GestureDetector(
                child: Padding(
                  padding: const EdgeInsets.all(1.0),
                  child: Container(
                    width: 100,
                    height: 50,
                    child: Material(
                    child: Center(
                          child: Text('NO',
                          style: TextStyle(
                            color: AppColor.kErrorRed,
                            fontSize: 17.0,
                            fontWeight: FontWeight.bold
                          ),),
                    ),
                    color: Color(0xFFffebee),
                    shape: RoundedRectangleBorder(
  borderRadius: new BorderRadius.circular(5.0),
        side: BorderSide(color: AppColor.white)
),
                  
                    ),
                        ),
                      ),
                      onTap: (){
                        Navigator.of(contex).pop();
                      
                      
                      }  
                              ),
                            ),
                      Expanded(
                       child: GestureDetector(
                           child: Padding(
                            padding: const EdgeInsets.all(8.0),
                            child: Container(
                              width: 100,
                              height: 50,
                              child: Material(
                              child: Center(
                                child: Text('YES', //If all field is entered, Display complete else Skip
                                style: TextStyle(
                                  color: AppColor.primary,
                                  fontSize: 17.0,
                                  fontWeight: FontWeight.bold
                                ),),
                              ),
                              color:  Color(0xFFe3f2fd),
                              shape: RoundedRectangleBorder(
                              borderRadius: new BorderRadius.circular(5.0),
                                  side: BorderSide(color: AppColor.white)
                        ),
                             
                    ),
                            ),
                          ),
                          onTap: (){
                              propertyNameController.clear();
                              addressController.clear();
                              widget.model.setCountry(selectedcountry:defaultCountry);
                              emailcontroller.clear();
                               phoneNumber.clear();
                              Navigator.of(contex).pop();
                          }
                        ),
                      ),
                          ],
                        ) ],)
                        ),
                      ),
          ),

        ),
        
      );
}

}







 //Index 2  NOT IN MVP
//  screen2(BuildContext context, AddPropertyViewModel model, ){
//       return  Center(
//         child: Padding(
//             padding: const EdgeInsets.only(left: 15.0, right: 15.0),
//             child: Column(
//               children: <Widget>[
//                    Container(
//                      height: 300,
//                      width: 300,
//                      child: (model.selectedImage == null
//                      ? GestureDetector(child:
//                        Padding(
//                            padding: EdgeInsets.only(top: 10.0),
//                            child: Center(
//                              child: Column(
//                        children: <Widget>[
//                          Image.asset(AppImage.uploadImage),
//                          Padding(
//                            padding: EdgeInsets.only(top: 10.0),
//                            child: Center(
//                              child: Text('No image selected.', 
//                                  style: AppTextStyle.error(context, AppColor.kErrorRed),)
//                            ),
//                          ),
//                        ],
//                      ) ),
//                          ),
//                      onTap: (){
//                        //TODO Select Image from Gallery.
//                        model.pickImage();
//                      },)
//                      : GestureDetector(
//                                             child: Padding(
//                                   padding: const EdgeInsets.all(5.0),
//                                   child: Column(
//                                     children: <Widget>[
//                                       Text('Tap to replace', 
//                                  style: AppTextStyle.error(context, AppColor.black),),
//                                         verticalSpaceSmall,
//                                      Flexible(child:  Image.file(model.selectedImage, fit: BoxFit.fill,),)
//                                     ],
//                                   )
//                                  ),
//                                  onTap: (){
//                                     //TODO Replace Previous Image.
//                                            model.pickImage();
//                                  }
//                      )),


//                      decoration: ShapeDecoration(
//                 color: AppColor.kGrey200,
//                 shape: RoundedRectangleBorder(
//                     borderRadius: BorderRadius.only(
//                       topLeft:  const  Radius.circular(30.0),
//                       topRight: const  Radius.circular(30.0),
//                       bottomLeft:const  Radius.circular(30.0),
//                       bottomRight: const  Radius.circular(30.0),
//                     )),

//               ),
//                    ),
//                    verticalSpaceLarge,
//                     Row(
//                       mainAxisAlignment: MainAxisAlignment.center,
//                       children: <Widget>[
//                           Padding(
//                     padding: const EdgeInsets.all(8.0),
//                     child: Container(
//                       width: 150,
//                       height: 50,
//                       child: MaterialButton(
//                       child: Text('Cancel',
//                       style: TextStyle(
//                         color: AppColor.white,
//                         fontSize: 17.0,
//                         fontWeight: FontWeight.bold
//                       ),),
//                       color: Color(0xFF45A1C9),
//                       shape: RoundedRectangleBorder(
//         borderRadius: new BorderRadius.circular(18.0),
//             side: BorderSide(color: AppColor.borderColor)
//     ),
//                       onPressed: () => model.movetoScreen2(
//                         address: addressController.text.trim(),
//                         contactEmail: emailcontroller.text.trim(),
//                         phoneN: phoneNumber.text.trim(),
//                         country: country,
//                         propertyName: propertyNameController.text.trim()
//                       )
//                 ),
//                     ),
//                   ),
//                   //       MaterialButton(
//                   //   child: Text('Back',
//                   //   style: TextStyle(
//                   //     color: AppColor.white,
//                   //     fontSize: 17.0,
//                   //     fontWeight: FontWeight.bold
//                   //   ),),
//                   //   color: AppColor.black,
//                   //   onPressed: () =>  model.goback()
//                   // ),
//                   horizontalSpaceLarge,
//                   // MaterialButton(
//                   //   child: Text('Skip',
//                   //   style: TextStyle(
//                   //     color: AppColor.white,
//                   //     fontSize: 17.0,
//                   //     fontWeight: FontWeight.bold
//                   //   ),),
//                   //   color: AppColor.black,
//                   //   onPressed: () =>  model.nextPage()
//                   // ),
//                    Padding(
//                     padding: const EdgeInsets.all(8.0),
//                     child: Container(
//                       width: 150,
//                       height: 50,
//                       child: MaterialButton(
//                       child: Text('Skip',
//                       style: TextStyle(
//                         color: AppColor.white,
//                         fontSize: 17.0,
//                         fontWeight: FontWeight.bold
//                       ),),
//                       color: Color(0xFF45A1C9),
//                       shape: RoundedRectangleBorder(
//         borderRadius: new BorderRadius.circular(18.0),
//             side: BorderSide(color: AppColor.borderColor)
//     ),
//                       onPressed: () => model.nextPage()
//                 ),
//                     ),
//                   ),
//                       ],
//                     )

//               ],
//             ),
//           ),
//       );
     
//   }
