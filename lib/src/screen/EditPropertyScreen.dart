import 'package:country_code_picker/country_code_picker.dart';
import 'package:country_list_pick/country_list_pick.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:hostapp/src/style/AppFontSizes.dart';
import 'package:hostapp/src/style/AppTextStyle.dart';
import 'package:hostapp/src/viewmodels/AddProperty_view_mode.dart';
import 'package:hostapp/src/widget/input_field.dart';
import 'package:hostapp/src/widget/CollectText.dart';
import 'package:hostapp/src/widget/ui_helpers.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:stacked/stacked.dart';
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/util/customFunctions.dart';
import 'package:flutter_google_places/flutter_google_places.dart';
import 'package:google_maps_webservice/places.dart';

class EditPropertyScreen extends StatefulWidget {
  final String pName, pAddress, pNumber,pEmail, country, prules, doclink, propertyID, phoneIcode;

  const EditPropertyScreen({this.pName, this.pAddress, this.pNumber, this.country, this.pEmail, this.prules, this.doclink, this.propertyID, this.phoneIcode});

  @override
  _EditPropertyScreenState createState() => _EditPropertyScreenState();
}

class _EditPropertyScreenState extends State<EditPropertyScreen> {
TextEditingController propertyNameController =  TextEditingController();

   TextEditingController addressController = TextEditingController();

   TextEditingController emailcontroller = new TextEditingController();

    TextEditingController phoneNumber = new TextEditingController();

 
    final CustomFuntion _customFuntion = locator<CustomFuntion>();
    FocusNode focusNode = new FocusNode();
    String defaultCountry;
    TextEditingController rulesController = new TextEditingController();
    TextEditingController docuemntController = new TextEditingController(text: '');
    bool changesIsMade =false;
     String defaultphoneIsoCode = '+1';

    @override
  void initState() {
    print('Am now in Edit Screen>>> ${widget.pNumber}');

    // TODO: implement initState
    super.initState();
     propertyNameController.text = widget.pName;
     addressController.text  = widget.pAddress;
    emailcontroller.text  = widget.pEmail;
    phoneNumber.text  = widget.pNumber;
     rulesController.text  = widget.prules;
     docuemntController.text  = widget.doclink;
     defaultCountry = widget.country;
     defaultphoneIsoCode = widget.phoneIcode;

    listenertoChange(propertyNameController);
    listenertoChange(addressController);
    listenertoChange(emailcontroller);
    listenertoChange(phoneNumber);
    listenertoChange(rulesController);
    listenertoChange(docuemntController);
  }

  listenertoChange(TextEditingController controller){
    controller.addListener(() {
      if(controller.text.isNotEmpty){
       setState(() {
         changesIsMade = true;
       });
      }else{

      }
    });
  }
  

  @override
  Widget build(BuildContext context) {
    return ViewModelBuilder<AddPropertyViewModel>.reactive(
        viewModelBuilder: () => AddPropertyViewModel(),
        onModelReady: (model) => model.editInitalize(),
        builder: (context, model, child) =>
     Scaffold(
      body: GestureDetector(
              child: Column(
                  children: <Widget>[
                  horizontalSpaceLarge,
                  horizontalSpaceLarge,
                  Padding(
                      padding: const EdgeInsets.only(top: 50.0),
                      child: headerButton(model)
                  ),
                  _customFuntion.errorUimessage(errorMessage: model.errorM),
                  verticalSpaceSmall,
                  screen1(context, model),

                ],),
     onTap:(){
         FocusScope.of(context).requestFocus(new FocusNode());
       }
      )
    )
      );


  }


  screen1(BuildContext context, AddPropertyViewModel model,){
      return  Expanded(
              child: Padding(
            padding: const EdgeInsets.only(left: 15.0, right: 15.0),
            child: ListView(
              children: <Widget>[
                CollectTextWithout(title: 'Property Name',),
                    (model.key == null ? Center(child: CircularProgressIndicator())
                    :  GestureDetector(
                        child:  TextFormField(
                          controller: propertyNameController,
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
                     onTap: ()async{
                         Prediction prediction = await PlacesAutocomplete.show(
                            context: context,
                            apiKey: model.key,
                            mode: Mode.overlay, // Mode.fullscreen
                            
                            );
           propertyNameController.text=prediction.structuredFormatting.mainText;
            setState(() {
              addressController.text = prediction.structuredFormatting.secondaryText;
            });
                      },
                    ),  
                     
                    )
                  ),
                    verticalSpaceSmall,
                     CollectTextWithout(title: 'Property Address',),
                    GestureDetector(
                        child:  TextFormField(
                          controller: addressController,
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
                     onTap: ()async{
                         Prediction prediction = await PlacesAutocomplete.show(
                            context: context,
                            apiKey: model.key,
                            mode: Mode.overlay, // Mode.fullscreen
                            );
               addressController.text = prediction.structuredFormatting.secondaryText;
             }, ),  
                    ),
                    
                     verticalSpaceSmall,
                CollectTextWithout(title: 'Country',),
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
                           child:  Row(
                             mainAxisAlignment: MainAxisAlignment.center,
                             children: <Widget>[
                             CountryCodePicker(

                    onChanged: (value){
                    model.setCountry(selectedcountry:value.name.toString());
                     setPhoneIcode(value.dialCode);//include icode when selecting country
                    },
                    initialSelection: defaultphoneIsoCode, //just same mean as default country
                    favorite: ['+39','FR'],
                   showCountryOnly: true,
                    showOnlyCountryWhenClosed: true,
                  ),
                  SizedBox(width: 10,),
                  Icon(Icons.arrow_drop_down, size: 25,)
                           ],)
                  ,),
                        ),
                    ],),

                      verticalSpaceSmall,
                CollectTextWithout(title: 'Contact Email',),
                    InputField(
                      placeholder: '',
                      controller: emailcontroller,
                      textInputType: TextInputType.emailAddress,
                      onChanged: (value){
                      },
                    ),

                     verticalSpaceSmall,
                      CollectText(ttile: 'PhoneNumber',),
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
                         model.setCountry(selectedcountry:value.name.toString()); //switch country Name
                         setPhoneIcode(value.dialCode);//include icode when selecting country
                    },
                    initialSelection: defaultphoneIsoCode,
                    favorite: ['+39','FR'],
                    onInit: (value) {
                      print('Initial Value ${value.code}');
                    },
                    showCountryOnly: false,
                    alignLeft: false,
                  ),
                          ),
                        ),
                      ),
                      
                    ),
                    ),

          Padding(
            padding: const EdgeInsets.only(left: 1.0, right: 1.0),
            child: Column(
              children: <Widget>[
                verticalSpaceMedium,
                CollectTextWithout(title:'Property Rules'),
                TextField(
                  keyboardType: TextInputType.multiline,
                  controller: rulesController,
                  maxLines: 5,
                  decoration: InputDecoration(
                      border: OutlineInputBorder(),
                      enabledBorder: new OutlineInputBorder(
                        borderRadius: BorderRadius.circular(8.0),
                        borderSide: new BorderSide(color: AppColor.borderColor,
                        ),
                      ),
                      // labelText: 'Paste your property rules here..',
                      labelStyle: GoogleFonts.abel(
                      )
                  ),

                ),

                verticalSpaceSmall,
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
                        labelText: 'Paste URL here',
                        suffixIcon: Icon(Icons.attachment)
                    ),
                    onTap: (){
                   
                    },
                  ),
                ),
                verticalSpaceLarge,

                // GestureDetector(
                //   child: Padding(
                //     padding: const EdgeInsets.only(left: 6.0, right:6.0, bottom: 20),
                //     child: Container(
                //       height: 50,
                //       child: Material(
                //         child: Center(
                //           child: Text('Remove Property',
                //             style: TextStyle(
                //                 color: AppColor.white,
                //                 fontSize: 17.0,
                //                 fontWeight: FontWeight.bold
                //             ),),
                //         ),
                //         color: Color(0xFFD24E4E),
                //         shape: RoundedRectangleBorder(
                //             borderRadius: new BorderRadius.circular(18.0),
                //             side: BorderSide(color: AppColor.borderColor)
                //         ),

                //       ),
                //     ),
                //   ),
                //   onTap: (){
                //     return showDialog(
                //         context: context,
                //         builder: (context) {
                //           return deleteDialog(context, model, propertyNameController.text);
                //         }
                //     );
                //   },
                // )

],
            ),
          )
              ],
            ),
          ),
      );
  }


headerButton(AddPropertyViewModel model){
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
    GestureDetector(
                    child: Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: (model.busy && model.key !=null ? 
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
                        color: (changesIsMade ? Color(0xFF45A1C9)  : AppColor.disableButton),
                        shape: RoundedRectangleBorder(
        borderRadius: new BorderRadius.circular(18.0),
            side: BorderSide(color: AppColor.borderColor)
    ),  ),)  
                      ),),
                    onTap: (){
                    // model.showMessage(error: 'The email you entered is invalid');
                      if(changesIsMade){
                     if(model.getCountry == null){
                          model.setCountry(selectedcountry: defaultCountry);
                        }
                      
                        model.updateDetails(
                            address: addressController.text.trim(),
                            contactEmail: emailcontroller.text.trim(),
                            phoneN: phoneNumber.text.trim(),
                            country: model.getCountry,
                            propertyName: propertyNameController.text.trim(),
                            pID: widget.propertyID,
                            phoneIcode: defaultphoneIsoCode,
                            link: docuemntController.text.trim(),
                            rules: rulesController.text.trim(),
                        );
                      }else{


                      }

                    },
                  ),

                      ],
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

  deleteDialog(BuildContext contex, AddPropertyViewModel model, String propertyName){
    return Center(
      child: Dialog(
        elevation: 0,
        backgroundColor: Colors.transparent,
        child: Container(
          height: MediaQuery.of(contex).size.height /4.4,
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
                        Text('You will no longer be able to manage reservations for this property. This action cannot be undone.',
                            style: TextStyle(
                                color: Colors.grey,
                                fontSize: AppFontSizes.small,
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
                              model.deleteProperty(propertyName: propertyName);
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

 setPhoneIcode(String code){
setState(() {
  defaultphoneIsoCode= code;
   changesIsMade= true;
});
  }

}