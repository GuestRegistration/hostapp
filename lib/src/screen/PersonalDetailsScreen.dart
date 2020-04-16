import 'package:country_code_picker/country_code_picker.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_remote_config/firebase_remote_config.dart';
import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/model/createUserModel.dart';
import 'package:hostapp/src/screen/auth_screen.dart';
import 'package:hostapp/src/screen/sign_in.dart';
import 'package:hostapp/src/service/GraphQLConfiguration.dart';
import 'package:hostapp/src/service/graphQlQuery.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:hostapp/src/style/AppFontSizes.dart';
import 'package:hostapp/src/util/customFunctions.dart';
import 'package:hostapp/src/widget/CollectText.dart';
import 'package:hostapp/src/widget/ui_helpers.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:hostapp/src/util/constants.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';

class PersonalDetailsScreen extends StatefulWidget {

  @override
  _PersonalDetailsScreenState createState() => new _PersonalDetailsScreenState();
}

class _PersonalDetailsScreenState extends State<PersonalDetailsScreen> {
  //var email;
  TextEditingController name = new TextEditingController();
  TextEditingController lastname = new TextEditingController();
  TextEditingController email = new TextEditingController();
  TextEditingController phoneNumberController = new TextEditingController();
  final CustomFuntion _customFuntion = locator<CustomFuntion>();
    final GraphQLConfiguration _graphQlConfiq = locator<GraphQLConfiguration>();
    final storage = new FlutterSecureStorage();
  var defaultphoneIsoCode;
  String mobile;  
  String errorMessage;
  int errorType;
  bool isButtonEnabled = true;
  bool _load = false, _updateLoad = false;
  Color buttoncolor = Color(0xffC7E3EF);
  String uid;

  void initState() {
    super.initState();
     getUserDetails();
    listener(name);
    listener(lastname);
     listener(phoneNumberController);
  }

//It will listen to any change or Error in Textfields
  listener(TextEditingController controller){
   controller.addListener(() {
      if(name.text.isNotEmpty && lastname.text.isNotEmpty && phoneNumberController.text.isNotEmpty){
        buttonStatus(status: false);
        //print('All Entered');
      }else{
          buttonStatus(status: true);
          //print('Not Entered');
      }
      
    });
}
//Enable => fa;se // Diable Button=> true
buttonStatus({bool status}){
  setState(() {
        isButtonEnabled = status;
      });
}

  void _onCountryChange(countryCode) {
    defaultphoneIsoCode = countryCode.toString();
    print("New Country selected: " + countryCode.toString());
  }

 

  @override
  void dispose() {
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
   
    return Scaffold(
      body: SingleChildScrollView(
              child: Column(
                children: <Widget>[
           Column(
          children: <Widget>[
              horizontalSpaceLarge,
            horizontalSpaceLarge,
            view()
          ],
        ),
              ],)
      ),
    );
  }

  //****** UI */

  view(){
    return  Padding(
      padding: const EdgeInsets.only(left: 15.0, right: 15.0),
      child: Column(
              children: <Widget>[
                headerButton(),   
                Padding(
                  padding: const EdgeInsets.only(top: 5.0),
                  child: Row(
                  mainAxisAlignment: MainAxisAlignment.start,
                    children: <Widget>[
                     Padding(
                       padding: const EdgeInsets.all(8.0),
                       child: Text('Personal details', style:  TextStyle(
                color: AppColor.black,
                fontSize: AppFontSizes.largest,
                fontWeight: FontWeight.bold
              )
            ),), ],),
                ),
                 Row(
              mainAxisAlignment: MainAxisAlignment.start,
              children: <Widget>[
               Padding(
                 padding: const EdgeInsets.only(left: 8.0),
                 child: _customFuntion.errorUimessage(errorMessage: errorMessage, type: errorType),
               )
            ],),
              CollectTextWithout(title: 'First Name',),
              Padding(padding:  EdgeInsets.only(left: 10.0, right: 5.0),
                      child: _customFuntion.textInputField(
                          controller: name,
                          hintText: 'Bloggs',
                      ),),


verticalSpaceMedium2,
                      CollectTextWithout(title: 'Last Name',),
                      Padding(padding:  EdgeInsets.only(left: 10.0, right: 5.0),
                      child: _customFuntion.textInputField(
                          controller: lastname,
                          hintText: 'Doe',
                      ),),

 verticalSpaceMedium2,
                      CollectTextWithout(title: 'Email',),
                      AbsorbPointer(
                        absorbing: true, //Email is not editable, I don't want uset to edit it.
                         child: Padding(padding:  EdgeInsets.only(left: 10.0, right: 5.0),
                        child: _customFuntion.textInputField(
                            controller: email,
                            textInputType: TextInputType.emailAddress,
                            hintText: 'joebloggs@gmail.com',
                        ),),
                      ),

 verticalSpaceMedium2,
 CollectTextWithout(title: 'Mobile Number',),
  Padding(padding:  EdgeInsets.only(left: 10.0, right: 5.0),
                            child:  Container(
                            decoration: new BoxDecoration(
                                color: Colors.white,
                                border: Border.all(color: AppColor.primary),
                                borderRadius:
                                    new BorderRadius.circular(10.0)),
                                  child: Row(
                                    children: <Widget>[
                                      Container(
                                        height: 50.0,
                                        decoration: new BoxDecoration(
                                            color: AppColor.white,
                                            border: Border.all(
                                                color: Color(0xffC6DEE9)),
                                            borderRadius:
                                                 BorderRadius.circular(10.0)),
                                        child:  CountryCodePicker(
                                          onChanged: _onCountryChange,
                                          // Initial selection and favorite can be one of code ('IT') OR dial_code('+39')
                                          initialSelection: defaultphoneIsoCode,
                                          favorite: ['+1', 'US'],
                                          // optional. Shows only country name and flag
                                          showCountryOnly: false,
                                          // optional. Shows only country name and flag when popup is closed.
                                          showOnlyCountryWhenClosed: false,
                                          // optional. aligns the flag and the Text left
                                          alignLeft: false,
                                          //itemBuilder: _buildDropdownItem,
                                        ),
                                      ),
                                      Container(
                                        alignment: Alignment.center,
                                        width: 220.0,
                                        child: new TextFormField(
                                            controller: phoneNumberController,
                                            keyboardType: TextInputType.phone,
                                            autofocus: false,
                                            validator: _customFuntion.validateMobile,
                                            onSaved: (String val) {
                                              mobile = val;
                                            },
                                            decoration: InputDecoration(
                                              hintText: "(123) 456-7890",
                                              fillColor: Color(0xffC8C3D4),
                                              hintStyle: TextStyle(
                                                  color: Color(
                                                0xff63A5C0,
                                              )),
                                              contentPadding: EdgeInsets.fromLTRB(
                                                  20.0, 10.0, 20.0, 10.0),
                                              border: InputBorder.none,
                                            )),
                                      ),
                                    ],
                                  ),
                                ),
                             
                          ),

                           verticalSpaceLarge,

                          (_load ? _customFuntion.loadingIndicator() :  AbsorbPointer(
                             absorbing: isButtonEnabled,
                       child: GestureDetector(
                  child: Padding(
                    padding: const EdgeInsets.only(left: 6.0, right:6.0, bottom: 20),
                    child: Container(
                      height: 50,
                      child: Material(
                        child: Center(
                          child: Text('Update',
                              style: TextStyle(
                                  color: AppColor.white,
                                  fontSize: 17.0,
                                  fontWeight: FontWeight.bold
                              ),),
                        ),
                       color: (isButtonEnabled ? buttoncolor : Color(0xff45A1C9)),
                        shape: RoundedRectangleBorder(
                              borderRadius: new BorderRadius.circular(18.0),
                              side: BorderSide(color: AppColor.borderColor)
                        ),

                      ),
                    ),
                  ),
                  onTap: (){
                  
              String numb = "$defaultphoneIsoCode".toString() + "${phoneNumberController.text}".toString();
              checkNumberExist(phoneNumber: numb);
                  },
                ), )
                          ),

            ],),
    );
  }

  
  headerButton(){
return Row(
          mainAxisAlignment: MainAxisAlignment.start,
         // crossAxisAlignment: Cros,
          children: <Widget>[
            GestureDetector(child: Padding(
        padding: const EdgeInsets.only(left: 6.0, top: 30, bottom: 0),
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

//***************** FUNCTIONS */



  //check if number exist
  checkNumberExist({String phoneNumber})async{
    startLoading();
    await _graphQlConfiq.getNeccessartyToken(); //MuST CALL THIS BEFRE API CALL
     GraphQLClient _client = _graphQlConfiq.clientToQuery();
    QueryResult result = await _client.query(
      QueryOptions(
          documentNode: gql(getphone),
          variables: <String, dynamic>{
             'phone': "$defaultphoneIsoCode".toString() + "${phoneNumberController.text}".toString(),
          }
      )
    ).catchError((e){
      stopLoading();
      print('Error Occur, ${e.toString()}');
      setErrorMessage(error: e.toString());

        }).timeout(Duration(seconds: 5,), onTimeout: (){
          stopLoading();
          setErrorMessage(error: 'Server Timeout, Please retry');
        },);

     if (result.data == null) {
        stopLoading();
             print('Result is Null and Error Occur');
              setErrorMessage(error: 'Server Error Occur, Please try again');

         }else if (result.data['getUserByPhone'] == null) {
           print('*************Return Data is Null => No Existing Phone Number**************');
           stopLoading();
           updateProfile(); //When succssgul, Move to update data

         }else{
             setErrorMessage(error: 'Number already exist');
            stopLoading();    
         }

  }

  //************** LOADER */
  startLoading(){
    setState(() {
      errorMessage = null; //Clear error message
      _load = true;
    });
  }

  stopLoading(){
    setState(() {
      _load = false;
    });
  }
  

  setErrorMessage({String error, int type}){
    setState(() {
      errorMessage = error;
      errorType = type;
    });
  }

  getUserDetails()async{
   String localEmail  = await storage.read(key: Constants.constmail);
   String fname=   await storage.read(key: Constants.constFname);
   String lname =  await storage.read(key: Constants.constLname);
   String phone = await storage.read(key: Constants.constPhoneN);
    String phoneIcode = await storage.read(key: Constants.constPhoneContryCode);
    uid = await storage.read(key: Constants.constID);

    email.text = localEmail;
    name.text = fname;
    lastname.text = lname;
    phoneNumberController.text = phone;
     defaultphoneIsoCode = phoneIcode;
  }

updateProfile()async{
    startLoading();
    await _graphQlConfiq.getNeccessartyToken(); //MuST CALL THIS BEFRE API CALL
     GraphQLClient _client = _graphQlConfiq.clientToQuery();
    QueryResult result = await _client.query(
      QueryOptions(
          documentNode: gql(updateuserquery),
          variables: {
          'id':  uid,
          'email': email.text,
          'first_name': name.text.trim(),
          'last_name': lastname.text.trim(),
          'phone_country_code': defaultphoneIsoCode.toString(),
          "phone_number": phoneNumberController.text,
        },
      )
    ).catchError((e){
      stopLoading();
      print('Error Occur, ${e.toString()}');
      setErrorMessage(error: e.toString());

        }).timeout(Duration(seconds: 5,), onTimeout: (){
          stopLoading();
          setErrorMessage(error: 'Server Timeout, Please retry', type: 0);
        },);

     if (result.data == null) {
        stopLoading();
             print('Result is Null and Error Occur');
              print(result.exception.graphqlErrors);
              setErrorMessage(error: result.exception.graphqlErrors.toString(),  type: 0);

         }else if (result.data['updateUser'] == null) {
           print('*************Return Data is Null => No Existing Phone Number**************');
           stopLoading();
           updateProfile();

         }else{
              String v = 'updateUser';
             CreateUserModel createUserModel = new CreateUserModel(
               email: result.data[v]['email'],
               id: result.data[v]['id'],
               name: Name(fName: result.data[v]['name']['first_name'],
                lName: result.data[v]['name']['last_name'],),
               phone: Phone(
              completePhone: result.data[v]['phone']['complete_phone'],
            countryCode: result.data[v]['phone']['country_code'],
            phoneNumber: result.data[v]['phone']['phone_number'],)
            );                
                                //Save details to Secure Storage
        _customFuntion.saveUserData(
          email: createUserModel.email,
          fname: createUserModel.name.fName,
          userID: createUserModel.id,
          lname: createUserModel.name.lName,
          phoneN: createUserModel.phone.phoneNumber,
          completePhone: createUserModel.phone.completePhone,
          phoneCode: createUserModel.phone.countryCode,
        );
  
               stopLoading();
      setErrorMessage(error: 'Profile Successfuly update',  type: 1);
              
         }

}

}
