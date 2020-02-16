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
import 'package:hostapp/src/widget/propertButton.dart';
import 'package:hostapp/src/widget/ui_helpers.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:provider_architecture/provider_architecture.dart';
import 'package:responsive_builder/responsive_builder.dart';



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
  tablet: Container(color: Colors.yellow),
)
      );
  }
}

class AddProprtyUI extends StatelessWidget {
    TextEditingController propertyNameController = TextEditingController();
   TextEditingController addressController = TextEditingController();
   TextEditingController emailcontroller = TextEditingController();
    TextEditingController phoneNumber = TextEditingController();
    TextEditingController rulesController = TextEditingController();
  
 

final AddPropertyViewModel model;

   AddProprtyUI(this.model);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: Text('Add Property', style: GoogleFonts.alice(
          textStyle: TextStyle(
            color: AppColor.black,
            fontSize: AppFontSizes.large,
          )
        ),),
        backgroundColor: AppColor.white,
        actions: <Widget>[
          // Padding(
          //   padding: const EdgeInsets.only(right: 15.0),
          //   child: GestureDetector(child: Icon(FontAwesome.sign_out, size: 30, color: Colors.red), 
          //   onTap: (){
          //    // authService.signOut(context: context);
          //   },
          //   ),
          // ),
        ],
      ),
      body: SingleChildScrollView(
              child: Column(
          children: <Widget>[
            horizontalSpaceSmall,
            Padding(
              padding: const EdgeInsets.all(10.0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  PropertyButton(
                    text: '1',
                    background: AppColor.black,
                    onpress: (){
                    
                    },
                  ),
                  horizontalSpaceSmall,
                  PropertyButton(
                    text: '2',
                    background: (model.pageIndex == 2 || model.pageIndex == 3 ? AppColor.black
                    : AppColor.kGrey200),
                    onpress: (){
                    //print('Hi');
                    },
                  ),

                   horizontalSpaceSmall,
                  PropertyButton(
                    text: '3',
                    background: (model.pageIndex == 3 ? AppColor.black
                    : AppColor.kGrey200),
                    onpress: (){
                    //print('Hi');
                    },
                  )
              ],),
            ),
            SingleChildScrollView(
          child: swtichScreen(model, context)
        ),
          ],
        ),
      )
   
    );
  }

swtichScreen( AddPropertyViewModel model, BuildContext context){
  if(model.pageIndex == 1){
    return screen1(context, model);

  }else if(model.pageIndex == 2){
     return screen2(context, model);

  }else if(model.pageIndex == 3){
     return screen3(context, model);

  }
}

//Index 1
  screen1(BuildContext context, AddPropertyViewModel model, ){
      return  Padding(
          padding: const EdgeInsets.only(left: 15.0, right: 15.0),
          child: Column(
            children: <Widget>[
                 verticalSpaceMedium,
                  InputField(
                    placeholder: 'Property Name',
                    controller: propertyNameController,
                  ),
                  verticalSpaceSmall,
                  InputField(
                    placeholder: 'Property Address',
                    controller: addressController,
                  ),

                    verticalSpaceSmall,
                  InputField(
                    placeholder: 'Contact Email',
                    controller: emailcontroller,
                    textInputType: TextInputType.emailAddress,
                  ),

                   verticalSpaceSmall,
                  InputField(
                    placeholder: 'PhoneNumber',
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
                  onPressed: () => model.movetoScreen2(
                    address: addressController.text.trim(),
                    contactEmail: emailcontroller.text.trim(),
                    phoneN: phoneNumber.text.trim(),
                    propertyName: propertyNameController.text.trim()
                  )
                )

            ],
          ),
        );
     
  }

//Index 2
 screen2(BuildContext context, AddPropertyViewModel model, ){
      return  Center(
        child: Padding(
            padding: const EdgeInsets.only(left: 15.0, right: 15.0),
            child: Column(
              children: <Widget>[
                   Container(
                     height: 300,
                     width: 300,
                     child: (model.selectedImage == null
                     ? GestureDetector(child:
                       Padding(
                           padding: EdgeInsets.only(top: 10.0),
                           child: Center(
                             child: Column(
                       children: <Widget>[
                         Image.asset(AppImage.uploadImage),
                         Padding(
                           padding: EdgeInsets.only(top: 10.0),
                           child: Center(
                             child: Text('No image selected.', 
                                 style: AppTextStyle.error(context, AppColor.kErrorRed),)
                           ),
                         ),
                       ],
                     ) ),
                         ),
                     onTap: (){
                       //TODO Select Image from Gallery.
                       model.pickImage();
                     },)
                     : GestureDetector(
                                            child: Padding(
                                  padding: const EdgeInsets.all(5.0),
                                  child: Column(
                                    children: <Widget>[
                                      Text('Tap to replace', 
                                 style: AppTextStyle.error(context, AppColor.black),),
                                        verticalSpaceSmall,
                                     Flexible(child:  Image.file(model.selectedImage, fit: BoxFit.fill,),)
                                    ],
                                  )
                                 ),
                                 onTap: (){
                                    //TODO Replace Previous Image.
                                           model.pickImage();
                                 }
                     )),


                     decoration: ShapeDecoration(
                color: AppColor.kGrey200,
                shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.only(
                      topLeft:  const  Radius.circular(30.0),
                      topRight: const  Radius.circular(30.0),
                      bottomLeft:const  Radius.circular(30.0),
                      bottomRight: const  Radius.circular(30.0),
                    )),

              ),
                   ),
                   verticalSpaceLarge,
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: <Widget>[
                        MaterialButton(
                    child: Text('Back',
                    style: TextStyle(
                      color: AppColor.white,
                      fontSize: 17.0,
                      fontWeight: FontWeight.bold
                    ),),
                    color: AppColor.black,
                    onPressed: () =>  model.goback()
                  ),
                  horizontalSpaceLarge,
                  MaterialButton(
                    child: Text('Skip',
                    style: TextStyle(
                      color: AppColor.white,
                      fontSize: 17.0,
                      fontWeight: FontWeight.bold
                    ),),
                    color: AppColor.black,
                    onPressed: () =>  model.nextPage()
                  )
                      ],
                    )

              ],
            ),
          ),
      );
     
  }

//Index 3
 screen3(BuildContext context, AddPropertyViewModel model, ){
      return  Padding(
          padding: const EdgeInsets.only(left: 15.0, right: 15.0),
          child: Column(
            children: <Widget>[
               verticalSpaceSmall,
               Text('Tell People what to expect', style: GoogleFonts.alice(
          textStyle: TextStyle(
            color: AppColor.black,
            fontSize: AppFontSizes.large,
          )
        ),),
        verticalSpaceMedium,
               TextField(
                  keyboardType: TextInputType.multiline,
                  controller: rulesController,
                   maxLines: 10,
                  decoration: InputDecoration(
                    border: OutlineInputBorder(),
                    labelText: 'Paste your property rules here..',
                    labelStyle: GoogleFonts.abel(
                    )
                  ),
                ),
  verticalSpaceLarge,
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: <Widget>[
                        MaterialButton(
                    child: Text('Back',
                    style: TextStyle(
                      color: AppColor.white,
                      fontSize: 17.0,
                      fontWeight: FontWeight.bold
                    ),),
                    color: AppColor.black,
                    onPressed: () =>  model.goback()
                  ),
                  horizontalSpaceLarge,
                  BusyButton(
                      title: 'Skip',
                      busy: model.busy,
                      onPressed: () {
                         //TODO Submit all to Firestore
                      model.lastScreenbutton(
                       propertyName: propertyNameController.text.trim(),
                      address: addressController.text.trim(),
                      contactEmail: emailcontroller.text.trim(),
                        phoneN: phoneNumber.text.trim(),
                        image: model.selectedImage,
                        propertyRule: rulesController.text.trim()
                    );
                    print(propertyNameController.text);
                      },
                    )
                      ],
                    )


            ],
          ),
        );
     
  }



}