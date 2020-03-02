import 'package:country_code_picker/country_code_picker.dart'; //for country code
import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_database/firebase_database.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'dart:async' show Future;
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:hostapp/src/screen/verifyotp.dart';
import 'package:hostapp/src/service/GraphQLConfiguration.dart';

class LoginPage extends StatefulWidget {
  final String email, existingemail;
  final String name, phoneNumber, lastname;
  bool phoneerror;
  LoginPage(
      {this.email,
      this.existingemail,
      this.phoneerror,
      this.lastname,
      this.name,
      this.phoneNumber});
  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> with WidgetsBindingObserver {
  String mobile;
  DatabaseReference userRef;
  final GlobalKey<FormState> formKey = GlobalKey<FormState>();
  String email1;
  final scaffoldkey = GlobalKey<ScaffoldState>();
  bool _validate = false;
  TextEditingController name = new TextEditingController();
  TextEditingController lastname = new TextEditingController();
  TextEditingController email = new TextEditingController();
  TextEditingController phone = new TextEditingController();
  TextEditingController propertiesname = new TextEditingController();
  TextEditingController role = new TextEditingController();
  GraphQLConfiguration graphQLConfiguration = GraphQLConfiguration();

  var phoneCode;
  var hostProperty, hostrole;
  List host1;
  bool isButtonEnabled = true;
  bool errorflag = false;
  bool _load = false;
  bool duplicatephoneno = false;
  var buttoncolor;
  String phoneNo;
  String smsOTP;
  String verificationId;
  String errorMessage = '';
  FirebaseAuth _auth = FirebaseAuth.instance;
  var interphone;
  String phoneNumber;
  String phoneIsoCode;
  var confirmedNumber;
  String insertData = r"""
        mutation users(     
         $id: String!  
         $phone: String!
         $email : String!
         $name: String!
         $lastname: String!){
           createUser( id: $id,email: $email,
          phone: $phone , first_name:$name,last_name:$lastname
        ){ 
          id
          email
          phone  
          name{
            first_name
          last_name
          }       
                }
        }
          """;
  String getphone = r"""
          query($phone: String!){
  getUserByPhone(phone: $phone){
    phone
  }
}
          """;
  String selectdata = r"""
              query($email: String!) {       
              getUserByEmail(email: $email){
              email
              }
            }
              """;
  void initState() {
    super.initState();

    email1 = "${widget.existingemail}";

    WidgetsBinding.instance.addObserver(this);
  }

  isEmpty() {
    if (name.text != "" && lastname.text != "" && phone.text != "") {
      setState(() {
        print(" isButtonEnabled = false;");
        isButtonEnabled = false;
      });
    } else {
      print(" isButtonEnabled = false;");

      setState(() {
        isButtonEnabled = true;
      });
    }
  }

  Future<void> navigateotp() async {
    print("inside navigate otp");
    print("internationalizedPhoneNumber" + interphone.toString());
    final FirebaseAuth auth = FirebaseAuth.instance;
    final FirebaseUser user1 = await auth.currentUser();
    final email1 = user1.email;
    final uid = user1.uid;
    Navigator.of(context).push(
      MaterialPageRoute(
        builder: (context) {
          return Verifyotp(
            phoneNumber: "$phoneCode" + "${phone.text}",
            name: name.text,
            lastname: lastname.text,
            email: email1.toLowerCase(),
            authuid: uid,
          );
        },
      ),
    );
  }

  void _onCountryChange(countryCode) {
    phoneCode = countryCode.toString();
    print("New Country selected: " + countryCode.toString());
  }

  void dispose() {
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final HttpLink httpLink = HttpLink(
        uri:
            'https://us-central1-guestregistration-4140a.cloudfunctions.net/api');
    final ValueNotifier<GraphQLClient> client =
        ValueNotifier<GraphQLClient>(GraphQLClient(
            link: httpLink,
            cache: OptimisticCache(
              dataIdFromObject: typenameDataIdFromObject,
            )));

    if (isButtonEnabled == false) {
      buttoncolor = Color(0xff45A1C9);
    } else {
      buttoncolor = Color(0xffC7E3EF);
    }
    if (widget.phoneerror == true) {
      print("widget.phoneerror" + widget.phoneerror.toString());
      errorMessage = "mobile number is in valid relative to country code ";
    } else {
      print("inside widget.phoneerror else");
      print("widget.phoneerror else" + widget.phoneerror.toString());
    }
    Widget loadingIndicator = _load
        ? Center(
            child: Column(
              children: <Widget>[
                SizedBox(
                  height: 20.0,
                ),
                new Container(
                  width: 60.0,
                  height: 60.0,
                  child: new CircularProgressIndicator(
                    strokeWidth: 8,
                    valueColor: AlwaysStoppedAnimation<Color>(
                      Color(0xFF45A1C9),
                    ),
                    backgroundColor: Color(0xFFC6DEE9),
                  ),
                ),
              ],
            ),
          )
        : new Container();
    return GraphQLProvider(
      client: client,
      child: Scaffold(
        key: scaffoldkey,
        body: Center(
          child: SingleChildScrollView(
            child: new Form(
              autovalidate: _validate,
              key: formKey,
              // ),
              child: Mutation(
                options: MutationOptions(
                  documentNode: gql(insertData),
                  onCompleted: (data) {
                    print(data.toString());
                  },
                  onError: (error) {
                    print('Error Occur: ${error.toString()}');
                  },
                ),
                builder: (runMutation, result) {
                  return Column(
                    mainAxisSize: MainAxisSize.max,
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: <Widget>[
                      new SizedBox(
                        height: 22.0,
                      ),
                      Visibility(
                        child: Text(
                          "one or more fields are incomplete",
                          style: TextStyle(
                              color: Colors.black,
                              fontWeight: FontWeight.bold,
                              fontSize: 30.0),
                        ),
                        visible: errorflag,
                      ),
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
                      SizedBox(
                        height: 32.0,
                      ),
                      Align(
                        alignment: Alignment(-.85, 0),
                        child: Container(
                          child: Text(
                            "First Name*",
                            style: TextStyle(
                                color: Color(0xffB8B8B8), fontSize: 15.0),
                          ),
                        ),
                      ),
                      SizedBox(
                        height: 20.0,
                      ),
                      Align(
                        alignment: Alignment(-.100, 0),
                        child: Container(
                          alignment: Alignment.center,
                          height: 50.0,
                          width: 320.0,
                          decoration: new BoxDecoration(
                              color: Colors.white,
                              borderRadius: new BorderRadius.circular(
                                10.0,
                              ),
                              border: Border.all(color: Color(0xffC6DEE9))),
                          child: new TextFormField(
                              controller: name,
                              onChanged: (val) {
                                isEmpty();
                              },
                              validator: (value) {
                                if (value.isEmpty) {
                                  return "Please Enter First Name";
                                }
                                return null;
                              },
                              decoration: InputDecoration(
                                hintText: "John",
                                hintStyle: TextStyle(
                                    color: Color(
                                  0xff63A5C0,
                                )),
                                contentPadding:
                                    EdgeInsets.fromLTRB(20.0, 10.0, 20.0, 10.0),
                                border: InputBorder.none,
                              )),
                        ),
                      ),
                      SizedBox(
                        height: 32.0,
                      ),
                      Align(
                        alignment: Alignment(-.85, 0),
                        child: Container(
                          child: Text(
                            "Last Name*",
                            style: TextStyle(
                                color: Color(0xffB8B8B8), fontSize: 15.0),
                          ),
                        ),
                      ),
                      SizedBox(
                        height: 20.0,
                      ),
                      Align(
                        alignment: Alignment(-.100, 0),
                        child: Container(
                          alignment: Alignment.center,
                          height: 50.0,
                          width: 320.0,
                          decoration: new BoxDecoration(
                              color: Colors.white,
                              border: Border.all(color: Color(0xffC6DEE9)),
                              borderRadius: new BorderRadius.circular(10.0)),
                          child: new TextFormField(
                              controller: lastname,
                              onChanged: (val) {
                                isEmpty();
                              },
                              validator: (value) {
                                if (value.isEmpty) {
                                  return "Please Enter Last Name";
                                } else {}
                                return null;
                              },
                              decoration: InputDecoration(
                                hintText: "Doe",
                                hintStyle: TextStyle(
                                    color: Color(
                                  0xff63A5C0,
                                )),
                                contentPadding:
                                    EdgeInsets.fromLTRB(20.0, 10.0, 20.0, 10.0),
                                border: InputBorder.none,
                              )),
                        ),
                      ),
                      SizedBox(
                        height: 32.0,
                      ),
                      Align(
                        alignment: Alignment(-.85, 0),
                        child: Container(
                          child: Text(
                            "Mobile Phone*",
                            style: TextStyle(
                                color: Color(0xffB8B8B8), fontSize: 15.0),
                          ),
                        ),
                      ),
                      SizedBox(
                        height: 20.0,
                      ),
                      Align(
                        alignment: Alignment(-.100, 0),
                        child: Row(
                          crossAxisAlignment: CrossAxisAlignment.center,
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: <Widget>[
                            Container(
                              decoration: new BoxDecoration(
                                  color: Colors.white,
                                  border: Border.all(color: Color(0xffC6DEE9)),
                                  borderRadius:
                                      new BorderRadius.circular(10.0)),
                              child: Row(
                                children: <Widget>[
                                  Container(
                                    height: 50.0,
                                    decoration: new BoxDecoration(
                                        color: Colors.white,
                                        border: Border.all(
                                            color: Color(0xffC6DEE9)),
                                        borderRadius:
                                            new BorderRadius.circular(10.0)),
                                    child: new CountryCodePicker(
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
                                        onChanged: (val) {
                                          isEmpty();
                                        },
                                        controller: phone,
                                        keyboardType: TextInputType.phone,
                                        autofocus: false,
                                        validator: validateMobile,
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
                               
                          ],
                        ),
                      ),
                      Visibility(
                                    child: Text(
                                      "This mobile number already exists",
                                      style: TextStyle(
                                          color: Colors.red, fontSize: 16.0),
                                    ),
                                    visible: duplicatephoneno,
                                  ),
                      SizedBox(
                        height: 10.0,
                      ),
                      SizedBox(
                        height: 10.0,
                      ),
                      new Align(
                        child: loadingIndicator,
                        alignment: FractionalOffset.center,
                      ),
                      SizedBox(
                        height: 20.0,
                      ),
                      new SizedBox(
                        width: 300.0,
                        height: 47.0,
                        child: AbsorbPointer(
                          absorbing: isButtonEnabled,
                          child: new RaisedButton(
                              child: const Text(
                                'Continue',
                                style: TextStyle(
                                    color: Colors.white,
                                    fontSize: 16.0,
                                    fontWeight: FontWeight.bold),
                              ),
                              color: buttoncolor,
                              shape: new RoundedRectangleBorder(
                                borderRadius: new BorderRadius.circular(13.0),
                              ),
                              onPressed: () async {
                                if (formKey.currentState.validate()) {
                                  if (name.text == "" &&
                                      phone.text == "" &&
                                      lastname.text == "") {
                                    setState(() {
                                      errorflag = true;
                                    });
                                  } else {
                                    setState(() {
                                      errorflag = false;
                                    });
                                  }

                                  GraphQLClient _client =
                                      graphQLConfiguration.clientToQuery();
                                  QueryResult result = await _client.mutate(
                                    MutationOptions(
                                      document: getphone,
                                      variables: {
                                        'phone': "$phoneCode".toString() +
                                            "${phone.text}".toString(),
                                      },
                                    ),
                                  );

                                  if (result.data["getUserByPhone"] == null) {
                                    print("inside if");

                                    navigateotp();
                                  } else {
                                    print("inside else");
                                    print("phone number already exist");
                                    setState(() {
                                      duplicatephoneno = true;
                                    });
                                    //print(result.data["getUserByPhone"]);

                                  }
                                  formKey.currentState.save();
                                  scaffoldkey.currentState
                                      .showSnackBar(SnackBar(
                                    content: Text("Start adding user details"),
                                  ));
                                } else {
                                  // validation error
                                  scaffoldkey.currentState
                                      .showSnackBar(SnackBar(
                                    content: Text("Failed to Add user details"),
                                  ));
                                }
                              }),
                        ),
                      ),
                      SizedBox(
                        height: 20.0,
                      ),
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
                  );
                },
              ),
            ),
          ),
        ),
      ),
    );
  }
}

String validateMobile(String value) {
  String patttern = r'(^[0-9]*$)';
  RegExp regExp = new RegExp(patttern);
  if (value.length == 0) {
    return "Mobile is Required";
  } else if (value.length >= 15) {
    return "Mobile number can't be more than 15 digits";
  } else if (!regExp.hasMatch(value)) {
    return "Mobile Number must be digits";
  }
  return null;
}
