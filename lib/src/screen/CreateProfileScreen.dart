import 'package:country_code_picker/country_code_picker.dart';
import 'package:flutter/material.dart';
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/screen/CreatProfileLoadingS.dart';
import 'package:hostapp/src/screen/verifyotp.dart';
import 'package:hostapp/src/util/customFunctions.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:hostapp/src/screen/OTPScreen.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:hostapp/src/widget/CollectText.dart';
import 'package:hostapp/src/service/graphQlQuery.dart';
import 'package:hostapp/src/service/GraphQLConfiguration.dart';
import 'package:hostapp/src/widget/ui_helpers.dart';

class CreateProfileScreen extends StatefulWidget {
   final String userEmail, userid, fname, lname;

  const CreateProfileScreen({this.userEmail, this.userid, this.fname, this.lname});

  @override
  _CreateProfileScreenState createState() => _CreateProfileScreenState();
}

class _CreateProfileScreenState extends State<CreateProfileScreen> {
  final GlobalKey<FormState> formKey = GlobalKey<FormState>();
    final CustomFuntion _customFuntion = locator<CustomFuntion>();
    final GraphQLConfiguration _graphQlConfiq = locator<GraphQLConfiguration>();
  var phoneCode = '+1';
  bool isButtonEnabled = true;
  bool errorflag = false;
  bool _load = false;
  bool duplicatephoneno = false;
  Color buttoncolor = Color(0xffC7E3EF);
  String smsOTP;
  String verificationId;
  String errorMessage;
  var interphone;
  String phoneNumber;
  var confirmedNumber;
  String mobile;
  TextEditingController name = new TextEditingController();
  TextEditingController lastname = new TextEditingController();
  TextEditingController email = new TextEditingController();
  TextEditingController phone = new TextEditingController();
  TextEditingController propertiesname = new TextEditingController();
  TextEditingController role = new TextEditingController();


  void initState() {
    super.initState();
    name.text = widget.fname;
    lastname.text = widget.lname;
    listener(name);
    listener(lastname);
    listener(phone);
  }

  @override
  Widget build(BuildContext context) {
   return  Scaffold(
        body : SingleChildScrollView(
            child: Padding(
             padding: const EdgeInsets.only(left: 15.0, right: 15.0),
              child: Column(
                      children: <Widget>[
              verticalSpaceLarge,   
                        Text(
                          "Create your profile",
                          style: TextStyle(
                              color: Colors.black,
                              fontWeight: FontWeight.bold,
                              fontSize: 34.0),
                        ),
                        SizedBox(
                          height: 10.0,
                        ),
                        Text(
                          "Secure your activity and validate your account",
                          style: TextStyle(
                              color: Color(0xff8F8F8F),
                              fontSize: 14.0,
                              fontWeight: FontWeight.w600),
                        ),
                        SizedBox(height: 10,),
                         (errorMessage == null ? SizedBox.shrink() : Text(
                              errorMessage,
                              textAlign: TextAlign.center,
                              style: TextStyle(
                            color: Colors.red,
                            fontWeight: FontWeight.normal,
                                  fontSize: 18.0),
                            )),
                            
                              verticalSpaceSmall,
                 CollectText(ttile: 'First Name',),
                  Padding(padding:  EdgeInsets.only(left: 10.0, right: 5.0),
                  child: _customFuntion.textInputField(
                      controller: name,
                      hintText: 'John',
                  ),),
verticalSpaceMedium2,
                  CollectText(ttile: 'Last Name',),
                  Padding(padding:  EdgeInsets.only(left: 10.0, right: 5.0),
                  child: _customFuntion.textInputField(
                      controller: lastname,
                      hintText: 'Doe',
                  ),),

                  verticalSpaceMedium2,
                  CollectText(ttile: 'Mobile Phone',),
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
                                        initialSelection: 'US',
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
                                          controller: phone,
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
                        child: Text('Continue',
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
                
            String numb = "$phoneCode".toString() + "${phone.text}".toString();
            checkNumberExist(phoneNumber: numb);
                },
              ), )
                        ),

                        verticalSpaceMedium2,
                        SizedBox(
                          width: 321.0,
                          child: Align(
                            child: Column(
                              children: <Widget>[
                                Container(
                                  child: Center(
                                    child: Row(
                                      children: <Widget>[
                                        Text(
                                          "By creating an account, you agree to our",
                                          style: TextStyle(
                                              color: Color(0xff8F8F8F),
                                              fontSize: 12.0,
                                              fontWeight: FontWeight.w600),
                                        ),
                                        Text(
                                          " Terms of ",
                                          style: TextStyle(
                                              color: Color(0xff8F8F8F),
                                              fontSize: 12.0,
                                              decoration:
                                                  TextDecoration.underline,
                                              fontWeight: FontWeight.w600),
                                        ),
                                      ],
                                    ),
                                  ),
                                ),
                                Center(
                                  child: Row(
                                    mainAxisAlignment: MainAxisAlignment.center,
                                    crossAxisAlignment: CrossAxisAlignment.center,
                                    children: <Widget>[
                                      Text(
                                        "Service",
                                        style: TextStyle(
                                            color: Color(0xff8F8F8F),
                                            fontSize: 12.0,
                                            decoration: TextDecoration.underline,
                                            fontWeight: FontWeight.w600),
                                      ),
                                      Text(
                                        " and",
                                        style: TextStyle(
                                            color: Color(0xff8F8F8F),
                                            fontSize: 12.0,
                                            fontWeight: FontWeight.w600),
                                      ),
                                      Text(
                                        " Privacy Policy ",
                                        style: TextStyle(
                                            color: Color(0xff8F8F8F),
                                            fontSize: 12.0,
                                            fontWeight: FontWeight.w600,
                                            decoration: TextDecoration.underline),
                                      ),
                                    ],
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ),
                      ],
                    
           
          ),
            ),
        ),
      );
  }

  //********************** FUNCTIONS */
  //It will listen to any change or Error in Textfields
  listener(TextEditingController controller){
   controller.addListener(() {
      if(name.text.isNotEmpty && lastname.text.isNotEmpty && phone.text.isNotEmpty){
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

//On country change, whereever coutry is selected
void _onCountryChange(countryCode) {
    phoneCode = countryCode.toString();
    print("New Country selected: " + countryCode.toString());
  }


   Future<void> navigateotp() async {
     print('****BEFORE Create NAVIGATION');
      // print(" CreateProfile Email: ${widget.userEmail}");
      //  print(" CreateProfile ID: ${widget.userid}");
        print(" PhoneCode ID: $phoneCode");
       print('*************');
   
    Navigator.of(context).pushReplacement(
      MaterialPageRoute(
        builder: (context) {
          return CreateProfileLoadingS( 
            
            phoneNumber: phone.text,
            phoneCountryCode: phoneCode,
            name: name.text,//name.text,
            lastname:  lastname.text,
            email: widget.userEmail,
            authuid: widget.userid,
          );
        },
      ),
    );
  }

  //check if number exist
  checkNumberExist({String phoneNumber})async{
    startLoading();
    await _graphQlConfiq.getNeccessartyToken(); //MuST CALL THIS BEFRE API CALL
     GraphQLClient _client = _graphQlConfiq.clientToQuery();
    QueryResult result = await _client.query(
      QueryOptions(
          documentNode: gql(getphone),
          variables: <String, dynamic>{
             'phone': "$phoneCode".toString() + "${phone.text}".toString(),
          }
      )
    ).catchError((e){
      stopLoading();
      print('Error Occur, ${e.toString()}');
      setErrorMessage(error: e.toString());

        }).timeout(Duration(seconds: 10,), onTimeout: (){
          stopLoading();
          setErrorMessage(error: 'Server Timeout, Please retry');
        },);

     if (result.data == null) {
        stopLoading();
             print('Result is Null and Error Occur');
             print(result.exception.graphqlErrors);
              setErrorMessage(error: result.exception.graphqlErrors.toString());

         }else if (result.data['getUserByPhone'] == null) {
           print('*************Return Data is Null => No Existing Phone Number**************');
           stopLoading();
           navigateotp();

         }else{
             setErrorMessage(error: 'Number already exist');
            stopLoading();    
         }

  }

  //************** LOADER */
  startLoading(){
    setState(() {
      errorMessage = ''; //Clear error message
      _load = true;
    });
  }

  stopLoading(){
    setState(() {
      _load = false;
    });
  }

  setErrorMessage({String error}){
    setState(() {
      errorMessage = error;
    });
  }


}