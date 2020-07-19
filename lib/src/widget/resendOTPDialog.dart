import 'package:flutter/material.dart';
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/util/customFunctions.dart';
import 'dart:async';
import 'package:country_code_picker/country_code_picker.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:hostapp/src/screen/OTPScreen.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:hostapp/src/service/GraphQLConfiguration.dart';
import 'package:hostapp/src/service/graphQlQuery.dart';

class ResendOTPDialog extends StatefulWidget {
  final String email;
  final String  lastname, name, authuid;
  ResendOTPDialog(
      {this.email,
      this.lastname,
      this.name,
      this.authuid,});
  @override
  _ResendOTPDialogState createState() => _ResendOTPDialogState();
}

class _ResendOTPDialogState extends State<ResendOTPDialog> {
  
  TextEditingController phone = new TextEditingController();
   String phoneCode = '+1';
  String errorMessage = '';
   final CustomFuntion _customFuntion = locator<CustomFuntion>();
  bool _load = false;
    final GraphQLConfiguration _graphQlConfiq = locator<GraphQLConfiguration>();
    bool isButtonEnabled = true;
   final FirebaseAuth auth = FirebaseAuth.instance;
  
  Color buttoncolor = Color(0xffC7E3EF);

@override
  void initState() {
    // TODO: implement initState
    super.initState();
    listener(phone);
     
  }
 @override
  Widget build(BuildContext context) {
    return Center(
      child: Dialog(
        insetAnimationCurve: Curves.elasticInOut,
        elevation: 0,
        shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(20.0)),
        backgroundColor: Color(0xFFF7FCFE),
        child: Container(
          width: MediaQuery.of(context).size.width,
             // color:  Color(0xFFF7FCFE),
          decoration: new BoxDecoration(
        shape: BoxShape.rectangle,
        borderRadius:
            new BorderRadius.all(new Radius.circular(40.0)),
        ),
          child: SingleChildScrollView(
            child: GestureDetector(
                  child: Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Column(
                    children: <Widget>[
                      Padding(
                        padding: const EdgeInsets.all(10.0),
                        child:  Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: <Widget>[
                          Container(
                            height: 50.0,
                            width: 320.0,
                            decoration: new BoxDecoration(
                                color: Colors.white,
                                border: Border.all(color: Color(0xffC6DEE9)),
                                borderRadius: new BorderRadius.circular(10.0)),
                            child: Row(
                              children: <Widget>[
                                Container(
                                  height: 50.0,
                                  width: 68.0,
                                  decoration: new BoxDecoration(
                                      color: Colors.white,
                                      border:
                                          Border.all(color: Color(0xffC6DEE9)),
                                      borderRadius:
                                          new BorderRadius.circular(10.0)),
                                  child:  CountryCodePicker(
                                    //onChanged: print,
                                    onChanged: _onCountryChange,
                                    initialSelection: 'US',
                                    favorite: ['+1', 'US'],
                                    showCountryOnly: false,
                                    showOnlyCountryWhenClosed: false,
                                    alignLeft: false,
                                  ),
                                ),
                                Container(
                                  alignment: Alignment.center,
                                  width: 150.0,
                                  height: 50.0,
                                  child: new TextFormField(
                                      controller: phone,
                                      keyboardType: TextInputType.phone,
                                      //maxLength: 12,
                                      autofocus: false,
                                      validator: _customFuntion.validateMobile,
                                      decoration: InputDecoration(
                                        hintText: "(123) 456-7890",
                                        fillColor: Color(0xffC8C3D4),
                                        hintStyle: TextStyle(
                                            wordSpacing: 0.0,
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
                          Center(
                            child: Column(
                              mainAxisAlignment: MainAxisAlignment.center,
                              crossAxisAlignment: CrossAxisAlignment.center,
                              children: <Widget>[
                                SizedBox(
                                  height: 10.0,
                                ),
                               (_load ? _customFuntion.loadingIndicator() :
                                AbsorbPointer(
                                    absorbing: isButtonEnabled,
                                      child: FlatButton(
                                    child: Center(
                                        child: Text(
                                      "Resend Code",
                                      textAlign: TextAlign.center,
                                      style: TextStyle(
                                          color: (isButtonEnabled ? buttoncolor : Color(0xff45A1C9)), //Color(0xff63A5C0),  
                                          fontWeight: FontWeight.bold,
                                          decoration: TextDecoration.underline,
                                          fontSize: 16.0),
                                    )),
                                    onPressed: () {
                                      String numb = "$phoneCode".toString() + "${phone.text}".toString();
                                      checkNumberExist(phoneNumber: numb);
                                    },
                                  ),
                                )),
                                (errorMessage == null ? SizedBox.shrink() : Text(
                              errorMessage,
                              textAlign: TextAlign.center,
                              style: TextStyle(
                            color: Colors.red,
                            fontWeight: FontWeight.normal,
                                  fontSize: 13.0),
                            )),
                              ],
                            ),
                          ),
                        ],
                      ),
                    
                      ),
                       SizedBox(height: 5,),
                   
                      
                    ],
                  ),
                ),
            ),
          ),
        ),
      ),
    );
  }
  //****************** FUNCTIONS ****************/

void _onCountryChange(countryCode) {
    //Todo : manipulate the selected country code here
    phoneCode = countryCode.toString();
    print("New Country selected: " + countryCode.toString());
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
              setErrorMessage(error: 'Server Error Occur, Please try again');

         }else if (result.data['getUserByPhone'] == null) {
           print('*************Return Data is Null => No Existing Phone Number**************');
           stopLoading();
           Navigator.pop(context);
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

   listener(TextEditingController controller){
   controller.addListener(() {
      if(phone.text.isNotEmpty){
        buttonStatus(status: false);
        //print('All Entered');
      }else{
          buttonStatus(status: true);
          //print('Not Entered');
      }
      
    });
}

buttonStatus({bool status}){
  setState(() {
        isButtonEnabled = status;
      });
}


   Future<void> navigateotp() async {
   print("$phoneCode" + "${phone.text}");
   
    // Navigator.of(context).pushReplacement(
    //   MaterialPageRoute(
    //     builder: (context) {
    //       return OTPScreen( //Verifyotp(//
    //         phoneNumber: "$phoneCode" + "${phone.text}",
    //         name: widget.name,
    //         lastname:  widget.lastname,
    //         email: widget.email,
    //         authuid: widget.authuid,
    //       );
    //     },
    //   ),
    // );
  }


}